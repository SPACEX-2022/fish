import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GameService } from './game.service';
import { RoomService } from '../room/room.service';
import { UserService } from '../user/user.service';
import { WsJwtGuard } from '../auth/guards/ws-jwt.guard';
import { GameEventDto, ScoreUpdateDto } from './dto/game.dto';
import { JwtPayload } from '../auth/dto/auth.dto';
import { RedisService } from '../common/services/redis.service';

interface SocketWithUser extends Socket {
  user?: JwtPayload;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class GameGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  // 存储用户与房间的映射关系
  private userRoomMap = new Map<string, string>();

  constructor(
    private gameService: GameService,
    private roomService: RoomService,
    private userService: UserService,
    private jwtService: JwtService,
    private redisService: RedisService,
  ) {}

  afterInit(server: Server) {
    console.log('WebSocket服务器初始化');
  }

  async handleConnection(client: Socket) {
    try {
      // 验证token
      const token = client.handshake.auth.token || client.handshake.headers.authorization?.split(' ')[1];
      
      if (!token) {
        client.disconnect();
        return;
      }
      
      const payload = this.jwtService.verify(token) as JwtPayload;
      (client as SocketWithUser).user = payload;
      
      // 将用户连接ID存储到Redis
      await this.redisService.set(`user:${payload.userId}:socket`, client.id);
      
      console.log(`用户 ${payload.nickname} (${payload.userId}) 已连接, socketId: ${client.id}`);
    } catch (error) {
      console.error(`Socket连接验证失败: ${error}`);
      client.disconnect();
    }
  }

  async handleDisconnect(client: Socket) {
    try {
      const socketWithUser = client as SocketWithUser;
      if (socketWithUser.user) {
        const { userId } = socketWithUser.user;
        
        // 清除Redis中的连接记录
        await this.redisService.del(`user:${userId}:socket`);
        
        // 如果用户在房间中，则让其离开房间
        const roomId = this.userRoomMap.get(userId);
        if (roomId) {
          // 尝试从房间中移除用户
          try {
            await this.roomService.leaveRoom(roomId, userId);
            this.userRoomMap.delete(userId);
            
            // 通知房间其他人
            this.server.to(roomId).emit('room:user_left', { userId });
            
            // 获取更新后的房间信息并广播
            const room = await this.roomService.findById(roomId);
            if (room) {
              this.server.to(roomId).emit('room:updated', this.roomService.toRoomResponseDto(room));
            }
          } catch (error) {
            console.error(`用户离开房间失败: ${error}`);
          }
        }
        
        console.log(`用户 ${socketWithUser.user.nickname} (${userId}) 已断开连接`);
      }
    } catch (error) {
      console.error(`处理断开连接失败: ${error}`);
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('room:join')
  async handleJoinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { roomId: string },
  ) {
    try {
      const socketWithUser = client as SocketWithUser;
      if (!socketWithUser.user) {
        return { success: false, message: '未授权' };
      }
      
      const { userId } = socketWithUser.user;
      const { roomId } = data;
      
      // 将用户加入到房间的Socket房间
      client.join(roomId);
      
      // 记录用户与房间的关系
      this.userRoomMap.set(userId, roomId);
      
      // 获取房间信息
      const room = await this.roomService.findById(roomId);
      
      // 通知房间其他人
      client.to(roomId).emit('room:user_joined', {
        userId,
        nickname: socketWithUser.user.nickname,
      });
      
      // 如果房间处于倒计时状态，则开始倒计时
      if (room.status === 'countdown') {
        this.gameService.startCountdown(roomId, this.server);
      }
      
      return { success: true, room: this.roomService.toRoomResponseDto(room) };
    } catch (error) {
      console.error(`加入房间失败: ${error}`);
      return { success: false, message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('room:leave')
  async handleLeaveRoom(@ConnectedSocket() client: Socket) {
    try {
      const socketWithUser = client as SocketWithUser;
      if (!socketWithUser.user) {
        return { success: false, message: '未授权' };
      }
      
      const { userId } = socketWithUser.user;
      const roomId = this.userRoomMap.get(userId);
      
      if (!roomId) {
        return { success: false, message: '用户不在任何房间中' };
      }
      
      // 从房间中移除用户
      const updatedRoom = await this.roomService.leaveRoom(roomId, userId);
      
      // 从Socket房间中移除
      client.leave(roomId);
      
      // 清除用户房间映射
      this.userRoomMap.delete(userId);
      
      // 通知房间其他人
      this.server.to(roomId).emit('room:user_left', { userId });
      
      // 如果房间还存在，则广播更新后的房间信息
      if (updatedRoom) {
        this.server.to(roomId).emit('room:updated', this.roomService.toRoomResponseDto(updatedRoom));
      }
      
      return { success: true };
    } catch (error) {
      console.error(`离开房间失败: ${error}`);
      return { success: false, message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('room:ready')
  async handleSetReady(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { isReady: boolean },
  ) {
    try {
      const socketWithUser = client as SocketWithUser;
      if (!socketWithUser.user) {
        return { success: false, message: '未授权' };
      }
      
      const { userId } = socketWithUser.user;
      const roomId = this.userRoomMap.get(userId);
      
      if (!roomId) {
        return { success: false, message: '用户不在任何房间中' };
      }
      
      // 设置准备状态
      const updatedRoom = await this.roomService.setReady(roomId, userId, data.isReady);
      
      // 广播更新后的房间信息
      this.server.to(roomId).emit('room:updated', this.roomService.toRoomResponseDto(updatedRoom));
      
      return { success: true };
    } catch (error) {
      console.error(`设置准备状态失败: ${error}`);
      return { success: false, message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('game:start')
  async handleStartGame(@ConnectedSocket() client: Socket) {
    try {
      const socketWithUser = client as SocketWithUser;
      if (!socketWithUser.user) {
        return { success: false, message: '未授权' };
      }
      
      const { userId } = socketWithUser.user;
      const roomId = this.userRoomMap.get(userId);
      
      if (!roomId) {
        return { success: false, message: '用户不在任何房间中' };
      }
      
      // 开始游戏
      const updatedRoom = await this.roomService.startGame(roomId, userId);
      
      // 广播游戏开始
      this.server.to(roomId).emit('game:start');
      
      // 启动游戏计时器
      this.gameService.startGameTimer(roomId, this.server);
      
      return { success: true };
    } catch (error) {
      console.error(`开始游戏失败: ${error}`);
      return { success: false, message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('game:event')
  async handleGameEvent(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: GameEventDto,
  ) {
    try {
      const socketWithUser = client as SocketWithUser;
      if (!socketWithUser.user) {
        return { success: false, message: '未授权' };
      }
      
      const { userId } = socketWithUser.user;
      const roomId = this.userRoomMap.get(userId);
      
      if (!roomId) {
        return { success: false, message: '用户不在任何房间中' };
      }
      
      // 处理游戏事件
      await this.gameService.handleGameEvent(roomId, {
        ...data,
        userId,
        nickname: socketWithUser.user.nickname,
      }, this.server);
      
      return { success: true };
    } catch (error) {
      console.error(`处理游戏事件失败: ${error}`);
      return { success: false, message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('game:score')
  async handleScoreUpdate(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: ScoreUpdateDto,
  ) {
    try {
      const socketWithUser = client as SocketWithUser;
      if (!socketWithUser.user) {
        return { success: false, message: '未授权' };
      }
      
      const { userId } = socketWithUser.user;
      const roomId = this.userRoomMap.get(userId);
      
      if (!roomId) {
        return { success: false, message: '用户不在任何房间中' };
      }
      
      // 更新得分
      await this.gameService.updatePlayerScore(roomId, userId, data.score, this.server);
      
      return { success: true };
    } catch (error) {
      console.error(`更新得分失败: ${error}`);
      return { success: false, message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('game:end')
  async handleEndGame(@ConnectedSocket() client: Socket) {
    try {
      const socketWithUser = client as SocketWithUser;
      if (!socketWithUser.user) {
        return { success: false, message: '未授权' };
      }
      
      const { userId } = socketWithUser.user;
      const roomId = this.userRoomMap.get(userId);
      
      if (!roomId) {
        return { success: false, message: '用户不在任何房间中' };
      }
      
      // 手动结束游戏
      await this.gameService.manualEndGame(roomId, userId, this.server);
      
      return { success: true };
    } catch (error) {
      console.error(`结束游戏失败: ${error}`);
      return { success: false, message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('game:next')
  async handleReadyForNextGame(@ConnectedSocket() client: Socket) {
    try {
      const socketWithUser = client as SocketWithUser;
      if (!socketWithUser.user) {
        return { success: false, message: '未授权' };
      }
      
      const { userId } = socketWithUser.user;
      const roomId = this.userRoomMap.get(userId);
      
      if (!roomId) {
        return { success: false, message: '用户不在任何房间中' };
      }
      
      // 准备下一局
      const updatedRoom = await this.roomService.readyForNextGame(roomId, userId);
      
      // 广播更新后的房间信息
      this.server.to(roomId).emit('room:updated', this.roomService.toRoomResponseDto(updatedRoom));
      
      return { success: true };
    } catch (error) {
      console.error(`准备下一局失败: ${error}`);
      return { success: false, message: error.message };
    }
  }
} 
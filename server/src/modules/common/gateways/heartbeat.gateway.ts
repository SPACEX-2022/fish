import { 
  WebSocketGateway, 
  WebSocketServer, 
  OnGatewayConnection, 
  OnGatewayDisconnect,
  SubscribeMessage,
  ConnectedSocket
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, UseGuards } from '@nestjs/common';
import { HeartbeatService } from '../services/heartbeat.service';
import { WsJwtGuard } from '../../auth/guards/ws-jwt.guard';
import { JwtPayload } from '../../auth/dto/auth.dto';

// 扩展Socket类型以包含user属性
interface SocketWithUser extends Socket {
  user?: JwtPayload;
}

@WebSocketGateway({
  namespace: 'heartbeat',
  cors: {
    origin: '*',
  },
})
export class HeartbeatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger('HeartbeatGateway');
  private readonly clients = new Map<string, string>(); // userId -> socketId

  constructor(
    private readonly heartbeatService: HeartbeatService,
  ) {}

  async handleConnection(client: SocketWithUser) {
    try {
      this.logger.log(`客户端已连接: ${client.id}`);
      
      // 发送连接成功消息
      client.emit('connection', { 
        status: 'connected',
        clientId: client.id,
        timestamp: Date.now()
      });
    } catch (error) {
      this.logger.error(`处理连接时出错: ${error.message}`);
      client.disconnect();
    }
  }

  async handleDisconnect(client: SocketWithUser) {
    try {
      this.logger.log(`客户端已断开连接: ${client.id}`);
      
      // 如果是已认证用户，移除心跳记录
      if (client.user) {
        const userId = client.user.sub;
        this.clients.delete(userId);
        await this.heartbeatService.removeHeartbeat(userId);
      }
    } catch (error) {
      this.logger.error(`处理断开连接时出错: ${error.message}`);
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('heartbeat')
  async handleHeartbeat(@ConnectedSocket() client: SocketWithUser) {
    try {
      if (!client.user) {
        client.emit('error', { message: '未授权的请求' });
        return;
      }

      const userId = client.user.sub;
      const clientId = client.id;
      
      // 记录心跳
      await this.heartbeatService.recordHeartbeat(userId, clientId);
      
      // 更新客户端映射
      this.clients.set(userId, clientId);
      
      // 发送心跳响应
      client.emit('heartbeat', { 
        status: 'ok',
        timestamp: Date.now()
      });
      
      this.logger.debug(`用户 ${userId} 心跳已更新`);
    } catch (error) {
      this.logger.error(`处理心跳消息时出错: ${error.message}`);
      client.emit('error', { message: '处理心跳消息时出错' });
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('status')
  async handleStatus(@ConnectedSocket() client: SocketWithUser) {
    try {
      if (!client.user) {
        client.emit('error', { message: '未授权的请求' });
        return;
      }

      const userId = client.user.sub;
      const status = await this.heartbeatService.getUserOnlineInfo(userId);
      
      client.emit('status', {
        ...status,
        timestamp: Date.now()
      });
    } catch (error) {
      this.logger.error(`处理状态请求时出错: ${error.message}`);
      client.emit('error', { message: '处理状态请求时出错' });
    }
  }
} 
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { RoomService } from '../room/room.service';
import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';
import { RedisService } from '../common/services/redis.service';
import { GameRecord, GameRecordDocument } from './schemas/game-record.schema';
import { GameEvent, PlayerResult } from './dto/game.dto';
import { RoomStatus } from '../room/schemas/room.schema';
import { Socket, Server } from 'socket.io';
import { GameRecordDto, PlayerGameRecordsDto, PlayerResultDto, GameEventWithUserDto } from './dto/game.dto';

@Injectable()
export class GameService {
  private readonly gameDuration: number;

  constructor(
    @InjectModel(GameRecord.name) private gameRecordModel: Model<GameRecordDocument>,
    private roomService: RoomService,
    private userService: UserService,
    private configService: ConfigService,
    private redisService: RedisService,
  ) {
    this.gameDuration = this.configService.get<number>('GAME_DURATION_SECONDS', 60);
  }

  /**
   * 开始游戏倒计时
   */
  async startCountdown(roomId: string, io: Server) {
    const room = await this.roomService.findById(roomId);
    
    if (room.status !== RoomStatus.COUNTDOWN) {
      return;
    }
    
    // 获取倒计时时间
    const countdownSeconds = this.configService.get<number>('PUBLIC_MATCH_COUNTDOWN_SECONDS', 5);
    
    // 设置倒计时
    let countdown = countdownSeconds;
    
    // 每秒发送倒计时
    const intervalId = setInterval(async () => {
      io.to(roomId).emit('game:countdown', { countdown });
      
      countdown--;
      
      if (countdown < 0) {
        clearInterval(intervalId);
        
        // 开始游戏
        try {
          const hostId = room.hostId.toString();
          await this.roomService.startGame(roomId, hostId);
          
          // 发送游戏开始事件
          io.to(roomId).emit('game:start');
          
          // 启动游戏计时器
          this.startGameTimer(roomId, io);
        } catch (error) {
          console.error(`启动游戏失败: ${error}`);
          io.to(roomId).emit('game:error', { message: '游戏启动失败' });
        }
      }
    }, 1000);
    
    // 将定时器ID存储到Redis，以便可以在需要时取消
    await this.redisService.set(`countdown:${roomId}`, intervalId.toString());
  }

  /**
   * 启动游戏计时器
   */
  async startGameTimer(roomId: string, io: Server) {
    let timeLeft = this.gameDuration;
    
    // 存储游戏开始时间
    await this.redisService.set(`game:${roomId}:startTime`, Date.now().toString());
    
    // 每秒更新时间
    const intervalId = setInterval(async () => {
      io.to(roomId).emit('game:time', { timeLeft });
      
      timeLeft--;
      
      if (timeLeft < 0) {
        clearInterval(intervalId);
        
        // 游戏结束
        try {
          await this.endGame(roomId, io);
        } catch (error) {
          console.error(`游戏结束处理失败: ${error}`);
          io.to(roomId).emit('game:error', { message: '游戏结束处理失败' });
        }
      }
    }, 1000);
    
    // 将定时器ID存储到Redis，以便可以在需要时取消
    await this.redisService.set(`timer:${roomId}`, intervalId.toString());
  }

  /**
   * 更新玩家得分
   */
  async updatePlayerScore(roomId: string, userId: string, score: number, io: Server) {
    const room = await this.roomService.updatePlayerScore(roomId, userId, score);
    
    if (room) {
      // 广播得分更新
      io.to(roomId).emit('game:score_update', {
        userId,
        score,
        players: room.players,
      });
    }
  }

  /**
   * 处理游戏事件
   */
  async handleGameEvent(roomId: string, eventData: any, io: Server) {
    // 广播游戏事件到房间内的所有玩家
    io.to(roomId).emit('game:event', eventData);
  }

  /**
   * 结束游戏
   */
  async endGame(roomId: string, io: Server) {
    // 获取房间信息
    const room = await this.roomService.findById(roomId);
    
    // 如果游戏不在进行中，则不处理
    if (room.status !== RoomStatus.PLAYING) {
      return;
    }
    
    // 更新房间状态为已结束
    await this.roomService.endGame(roomId);
    
    // 计算游戏时长
    const startTimeStr = await this.redisService.get(`game:${roomId}:startTime`);
    const startTime = startTimeStr ? parseInt(startTimeStr) : Date.now() - this.gameDuration * 1000;
    const endTime = Date.now();
    const duration = Math.round((endTime - startTime) / 1000);
    
    // 计算结果并存储到游戏记录
    const playerResultsList: PlayerResult[] = room.players.map(player => {
      return {
        userId: player.userId,
        nickname: player.nickname,
        score: player.score,
        rank: 0, // 暂时设为0，后面会更新
        events: [],
      };
    });
    
    // 计算排名
    playerResultsList.sort((a, b) => b.score - a.score);
    playerResultsList.forEach((player, index) => {
      player.rank = index + 1;
    });
    
    // 确定获胜者
    const winner = playerResultsList[0];
    
    // 创建游戏记录
    const gameRecord = new this.gameRecordModel({
      roomId: roomId,
      roomCode: room.roomCode,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      duration,
      players: playerResultsList,
      winner
    });
    
    const savedRecord = await gameRecord.save();
    
    // 更新玩家统计信息
    for (const player of playerResultsList) {
      await this.userService.updateGameStats(
        player.userId.toString(),
        player.score,
        player.rank === 1
      );
    }
    
    // 发送游戏结束事件
    io.to(roomId).emit('game:end', {
      gameId: savedRecord._id.toString(),
      duration,
      playerResults: savedRecord.players.map(player => ({
        userId: player.userId.toString(),
        nickname: player.nickname,
        score: player.score,
        rank: player.rank,
        events: player.events.map(event => ({
          type: event.type,
          targetId: event.targetId,
          score: event.score,
          x: event.x,
          y: event.y,
          itemId: event.itemId,
          userId: player.userId.toString(),
          nickname: player.nickname,
        }))
      })),
      winnerId: winner?.userId.toString(),
    });
  }

  /**
   * 手动结束游戏（如房主提前结束）
   */
  async manualEndGame(roomId: string, userId: string, io: Server) {
    const room = await this.roomService.findById(roomId);
    
    // 检查是否是房主
    if (room.hostId.toString() !== userId) {
      throw new Error('只有房主可以提前结束游戏');
    }
    
    // 取消游戏计时器
    const timerId = await this.redisService.get(`timer:${roomId}`);
    if (timerId) {
      clearInterval(parseInt(timerId));
      await this.redisService.del(`timer:${roomId}`);
    }
    
    // 结束游戏
    await this.endGame(roomId, io);
  }

  /**
   * 获取玩家的游戏记录
   */
  async getUserGameRecords(userId: string): Promise<PlayerGameRecordsDto> {
    const records = await this.gameRecordModel
      .find({
        'players.userId': userId,
      })
      .sort({ createdAt: -1 })
      .limit(10)
      .exec();

    const winCount = await this.gameRecordModel
      .countDocuments({
        'winner.userId': userId,
      })
      .exec();

    const totalGames = await this.gameRecordModel
      .countDocuments({
        'players.userId': userId,
      })
      .exec();

    let totalScore = 0;
    let bestScore = 0;

    const user = await this.userService.findById(userId);
    if (!user) {
      throw new NotFoundException('用户不存在');
    }

    // 计算总分和最高分
    for (const record of records) {
      const playerResult = record.players.find(p => p.userId === userId);
      if (playerResult) {
        totalScore += playerResult.score;
        if (playerResult.score > bestScore) {
          bestScore = playerResult.score;
        }
      }
    }

    const avgScore = totalGames > 0 ? Math.round(totalScore / totalGames) : 0;

    return {
      userId,
      nickname: user.nickname,
      totalGames,
      wins: winCount,
      avgScore,
      totalScore,
      bestScore,
      recentGames: records.map(record => this.mapGameRecordToDto(record)),
    };
  }

  /**
   * 获取游戏记录
   */
  async getGameRecord(gameId: string): Promise<GameRecordDto> {
    const record = await this.gameRecordModel.findById(gameId).exec();
    
    if (!record) {
      throw new NotFoundException('游戏记录不存在');
    }
    
    return this.mapGameRecordToDto(record);
  }

  /**
   * 将GameRecord映射为GameRecordDto
   */
  private mapGameRecordToDto(record: GameRecordDocument): GameRecordDto {
    return {
      id: record._id.toString(),
      roomId: record.roomId,
      roomCode: record.roomCode,
      startTime: record.startTime,
      endTime: record.endTime,
      duration: record.duration,
      players: record.players,
      winner: record.winner,
    };
  }
} 
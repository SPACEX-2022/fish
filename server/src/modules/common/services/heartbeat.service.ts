import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from './redis.service';

@Injectable()
export class HeartbeatService {
  private readonly logger = new Logger('Heartbeat');
  private readonly HEARTBEAT_PREFIX = 'heartbeat:user:';
  private readonly HEARTBEAT_EXPIRY = 30; // 30秒过期

  constructor(private readonly redisService: RedisService) {}

  /**
   * 记录用户心跳
   * @param userId 用户ID
   * @param clientId 客户端连接ID
   */
  async recordHeartbeat(userId: string, clientId: string): Promise<void> {
    const key = `${this.HEARTBEAT_PREFIX}${userId}`;
    await this.redisService.hset(key, 'lastSeen', Date.now().toString());
    await this.redisService.hset(key, 'clientId', clientId);
    await this.redisService.expire(key, this.HEARTBEAT_EXPIRY);
    
    this.logger.debug(`用户 ${userId} 心跳已更新`);
  }

  /**
   * 检查用户是否在线
   * @param userId 用户ID
   */
  async isUserOnline(userId: string): Promise<boolean> {
    const key = `${this.HEARTBEAT_PREFIX}${userId}`;
    const exists = await this.redisService.exists(key);
    return exists;
  }

  /**
   * 获取用户的所有在线信息
   * @param userId 用户ID
   */
  async getUserOnlineInfo(userId: string): Promise<{ isOnline: boolean; lastSeen?: number; clientId?: string }> {
    const key = `${this.HEARTBEAT_PREFIX}${userId}`;
    const info = await this.redisService.hgetall(key);
    
    if (!info || Object.keys(info).length === 0) {
      return { isOnline: false };
    }
    
    return {
      isOnline: true,
      lastSeen: parseInt(info.lastSeen, 10),
      clientId: info.clientId,
    };
  }

  /**
   * 移除用户心跳记录
   * @param userId 用户ID
   */
  async removeHeartbeat(userId: string): Promise<void> {
    const key = `${this.HEARTBEAT_PREFIX}${userId}`;
    await this.redisService.del(key);
    this.logger.debug(`用户 ${userId} 心跳已移除`);
  }

  /**
   * 获取当前在线用户数
   */
  async getOnlineUserCount(): Promise<number> {
    // 在实际生产环境中，可能需要使用Redis的KEYS或SCAN命令来实现，但这里简化处理
    // 这种实现方式在生产环境可能效率不高，对于大规模应用应考虑其他方案
    const keys = await this.redisService.getClient().keys(`${this.HEARTBEAT_PREFIX}*`);
    return keys.length;
  }
} 
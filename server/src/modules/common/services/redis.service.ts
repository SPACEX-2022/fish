import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private redisClient: Redis;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    this.redisClient = new Redis({
      host: this.configService.get<string>('REDIS_HOST', 'localhost'),
      port: this.configService.get<number>('REDIS_PORT', 6379),
      password: this.configService.get<string>('REDIS_PASSWORD', ''),
      db: this.configService.get<number>('REDIS_DB', 0),
    });

    this.redisClient.on('error', (err) => {
      console.error('Redis连接错误:', err);
    });

    this.redisClient.on('connect', () => {
      const host = this.configService.get<string>('REDIS_HOST', 'localhost');
      const port = this.configService.get<number>('REDIS_PORT', 6379);
      console.log(`Redis连接成功! 已连接到: ${host}:${port}`);
    });
  }

  onModuleDestroy() {
    if (this.redisClient) {
      this.redisClient.disconnect();
    }
  }

  // 设置键值
  async set(key: string, value: string): Promise<void> {
    await this.redisClient.set(key, value);
  }

  // 设置键值并设置过期时间
  async setEx(key: string, seconds: number, value: string): Promise<void> {
    await this.redisClient.setex(key, seconds, value);
  }

  // 获取键值
  async get(key: string): Promise<string | null> {
    return this.redisClient.get(key);
  }

  // 删除键值
  async del(key: string): Promise<void> {
    await this.redisClient.del(key);
  }

  // 将值添加到列表
  async lpush(key: string, value: string): Promise<void> {
    await this.redisClient.lpush(key, value);
  }

  // 将值添加到列表尾部
  async rpush(key: string, value: string): Promise<void> {
    await this.redisClient.rpush(key, value);
  }

  // 获取列表范围
  async lrange(key: string, start: number, stop: number): Promise<string[]> {
    return this.redisClient.lrange(key, start, stop);
  }

  // 检查键是否存在
  async exists(key: string): Promise<boolean> {
    const result = await this.redisClient.exists(key);
    return result === 1;
  }

  // 设置过期时间
  async expire(key: string, seconds: number): Promise<void> {
    await this.redisClient.expire(key, seconds);
  }

  // 设置哈希表字段
  async hset(key: string, field: string, value: string): Promise<void> {
    await this.redisClient.hset(key, field, value);
  }

  // 获取哈希表字段
  async hget(key: string, field: string): Promise<string | null> {
    return this.redisClient.hget(key, field);
  }

  // 获取所有哈希表字段
  async hgetall(key: string): Promise<Record<string, string>> {
    return this.redisClient.hgetall(key);
  }

  // 删除哈希表字段
  async hdel(key: string, field: string): Promise<void> {
    await this.redisClient.hdel(key, field);
  }

  // 递增
  async incr(key: string): Promise<number> {
    return this.redisClient.incr(key);
  }

  // 通过值递增
  async incrby(key: string, value: number): Promise<number> {
    return this.redisClient.incrby(key, value);
  }

  // 递减
  async decr(key: string): Promise<number> {
    return this.redisClient.decr(key);
  }

  // 通过值递减
  async decrby(key: string, value: number): Promise<number> {
    return this.redisClient.decrby(key, value);
  }

  // 获取原始Redis客户端
  getClient(): Redis {
    return this.redisClient;
  }
} 
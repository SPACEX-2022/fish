import { Global, Module } from '@nestjs/common';
import { RedisService } from './services/redis.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseLoggerService } from './services/database-logger.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [RedisService, DatabaseLoggerService],
  exports: [RedisService],
})
export class CommonModule {} 
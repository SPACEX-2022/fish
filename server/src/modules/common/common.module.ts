import { Global, Module } from '@nestjs/common';
import { RedisService } from './services/redis.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseLoggerService } from './services/database-logger.service';
import { HeartbeatService } from './services/heartbeat.service';
import { HeartbeatController } from './controllers/heartbeat.controller';
import { HeartbeatGateway } from './gateways/heartbeat.gateway';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '30d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [HeartbeatController],
  providers: [
    RedisService, 
    DatabaseLoggerService, 
    HeartbeatService,
    HeartbeatGateway
  ],
  exports: [RedisService, HeartbeatService, JwtModule],
})
export class CommonModule {} 
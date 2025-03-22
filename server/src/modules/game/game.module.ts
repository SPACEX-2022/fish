import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameGateway } from './game.gateway';
import { GameService } from './game.service';
import { GameRecord, GameRecordSchema } from './schemas/game-record.schema';
import { RoomModule } from '../room/room.module';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GameController } from './game.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GameRecord.name, schema: GameRecordSchema },
    ]),
    RoomModule,
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRES_IN', '1d'),
        },
      }),
    }),
  ],
  controllers: [GameController],
  providers: [GameGateway, GameService],
  exports: [GameService],
})
export class GameModule {} 
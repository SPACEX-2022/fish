import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../user/schemas/user.schema';

export type RoomDocument = Room & Document;

export enum RoomType {
  PUBLIC = 'public',   // 公共房间，可匹配
  PRIVATE = 'private', // 私有房间，需邀请码
}

export enum RoomStatus {
  WAITING = 'waiting',   // 等待中
  COUNTDOWN = 'countdown', // 倒计时
  PLAYING = 'playing',   // 游戏中
  FINISHED = 'finished', // 已结束
}

export interface PlayerInfo {
  userId: string;
  nickname: string;
  avatarUrl: string;
  score: number;
  isReady: boolean;
  isHost: boolean;
}

@Schema({ timestamps: true })
export class Room {
  @Prop({ required: true, unique: true })
  roomCode: string;

  @Prop({ required: true, enum: RoomType, default: RoomType.PUBLIC })
  type: string;

  @Prop({ required: true, enum: RoomStatus, default: RoomStatus.WAITING })
  status: string;

  @Prop({ required: true })
  hostId: string;

  @Prop({ type: [Object], default: [] })
  players: PlayerInfo[];

  @Prop({ type: Date, default: null, required: false })
  startTime: Date | null;

  @Prop({ type: Date, default: null, required: false })
  endTime: Date | null;

  @Prop({ default: 0 })
  currentRound: number;

  @Prop({ default: Date.now, expires: '1h' })
  expiresAt: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room); 
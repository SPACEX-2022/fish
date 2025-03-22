import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { User } from '../../user/schemas/user.schema';
import { Room } from '../../room/schemas/room.schema';
import { GameEventType, GameEvent, PlayerResult } from '../dto/game.dto';

export type GameRecordDocument = GameRecord & Document;

@Schema({ timestamps: true })
export class PlayerEvent {
  @Prop({ required: true, enum: GameEventType })
  type: string;

  @Prop({ required: true })
  targetId: string;

  @Prop({ required: false })
  score?: number;

  @Prop({ required: false })
  x?: number;

  @Prop({ required: false })
  y?: number;

  @Prop({ required: false })
  itemId?: string;

  @Prop({ required: true })
  timestamp: Date;
}

@Schema()
export class PlayerResult {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  userId: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  nickname: string;

  @Prop({ required: true, default: 0 })
  score: number;

  @Prop({ required: true })
  rank: number;

  @Prop({ type: [PlayerEvent], default: [] })
  events: PlayerEvent[];
}

@Schema({ timestamps: true })
export class GameRecord {
  @Prop({ type: Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ required: true })
  roomId: string;

  @Prop({ required: true })
  roomCode: string;

  @Prop({ required: true, type: Object })
  winner: PlayerResult;

  @Prop({ required: true, type: [Object] })
  players: PlayerResult[];

  @Prop({ type: [Object], default: [] })
  events: GameEvent[];

  @Prop()
  startTime: Date;

  @Prop()
  endTime: Date;

  @Prop()
  duration: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const PlayerEventSchema = SchemaFactory.createForClass(PlayerEvent);
export const PlayerResultSchema = SchemaFactory.createForClass(PlayerResult);
export const GameRecordSchema = SchemaFactory.createForClass(GameRecord); 
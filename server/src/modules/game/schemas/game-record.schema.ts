import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { GameEvent, PlayerResult } from '../dto/game.dto';

export type GameRecordDocument = GameRecord & Document;

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

  @Prop({ type: Date, required: false })
  startTime: Date | null;

  @Prop({ type: Date, required: false })
  endTime: Date | null;

  @Prop({ required: false })
  duration: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const GameRecordSchema = SchemaFactory.createForClass(GameRecord); 
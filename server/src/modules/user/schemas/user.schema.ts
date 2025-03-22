import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  openId: string;

  @Prop({ required: true })
  nickname: string;

  @Prop()
  avatarUrl: string;

  @Prop({ default: 0 })
  totalScore: number;

  @Prop({ default: 0 })
  gamesPlayed: number;

  @Prop({ default: 0 })
  wins: number;

  @Prop({ default: Date.now })
  lastLoginAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User); 
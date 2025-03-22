import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export enum GameEventType {
  FISH_CAUGHT = 'fish_caught',
  ITEM_USED = 'item_used',
  SPECIAL_EVENT = 'special_event',
}

export interface GameEvent {
  type: GameEventType;
  targetId: string;
  score?: number;
  x?: number;
  y?: number;
  itemId?: string;
}

export class GameEventDto implements GameEvent {
  @IsEnum(GameEventType)
  @IsNotEmpty()
  type: GameEventType;

  @IsString()
  @IsNotEmpty()
  targetId: string;

  @IsNumber()
  @IsOptional()
  score?: number;

  @IsNumber()
  @IsOptional()
  x?: number;

  @IsNumber()
  @IsOptional()
  y?: number;

  @IsString()
  @IsOptional()
  itemId?: string;
}

export interface GameEventWithUser extends GameEvent {
  userId: string;
  nickname: string;
}

export class GameEventWithUserDto extends GameEventDto implements GameEventWithUser {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  nickname: string;
}

export interface PlayerResult {
  userId: string;
  nickname: string;
  score: number;
  rank: number;
  events: GameEventWithUser[];
}

export class PlayerResultDto implements PlayerResult {
  userId: string;
  nickname: string;
  score: number;
  rank: number;
  events: GameEventWithUserDto[];
}

export class GameRecordDto {
  id: string;
  roomId: string;
  roomCode: string;
  startTime: Date | null;
  endTime: Date | null;
  duration: number;
  players: PlayerResultDto[];
  winner: PlayerResultDto;
}

export class PlayerScoreDto {
  userId: string;
  nickname: string;
  score: number;
}

export class GameTimerDto {
  remaining: number;
  total: number;
}

export class CountdownDto {
  count: number;
}

export class PlayerGameRecordsDto {
  userId: string;
  nickname: string;
  totalGames: number;
  wins: number;
  avgScore: number;
  totalScore: number;
  bestScore: number;
  recentGames: GameRecordDto[];
}

export class ScoreUpdateDto {
  @IsNumber()
  @IsNotEmpty()
  score: number;
}

export class GameResultDto {
  roomId: string;
  gameId: string;
  duration: number;
  playerResults: {
    userId: string;
    nickname: string;
    score: number;
    rank: number;
  }[];
  winnerId: string;
} 
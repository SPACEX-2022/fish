import { RoomStatus, RoomType } from '../schemas/room.schema';

export class CreateRoomDto {
  type: RoomType;
}

export class JoinRoomDto {
  roomCode: string;
}

export class RoomResponseDto {
  id: string;
  roomCode: string;
  type: RoomType;
  status: RoomStatus;
  players: {
    userId: string;
    nickname: string;
    avatarUrl: string;
    score: number;
    isReady: boolean;
    isHost: boolean;
  }[];
  hostId: string;
  startTime: Date | null;
  endTime: Date | null;
  currentRound: number;
  createdAt: Date;
}

export class RoomListItemDto {
  id: string;
  roomCode: string;
  type: RoomType;
  status: RoomStatus;
  playerCount: number;
  hostName: string;
  createdAt: Date;
} 
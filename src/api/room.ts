import http from './index';

/**
 * 房间API模块
 * 
 * 提供多人游戏房间相关的API接口，包括创建房间、加入房间、获取房间列表等功能。
 * 
 * @module api/room
 */

// 房间类型
export interface Room {
  id: string;
  code: string;
  name: string;
  owner: {
    id: string;
    nickname: string;
    avatarUrl: string;
  };
  players: {
    id: string;
    nickname: string;
    avatarUrl: string;
    isReady: boolean;
    score?: number;
    isReadyForNextGame?: boolean;
  }[];
  status: 'waiting' | 'countdown' | 'playing' | 'ended';
  isPrivate: boolean;
  maxPlayers: number;
  currentPlayers: number;
  gameSettings: {
    duration: number;
    fishCount: number;
    specialEvents: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

// 创建房间参数
export interface CreateRoomParams {
  name: string;
  isPrivate: boolean;
  maxPlayers: number;
  gameSettings: {
    duration: number;
    fishCount: number;
    specialEvents: boolean;
  };
}

// 加入房间参数
export interface JoinRoomParams {
  roomId?: string;
  code?: string;
}

/**
 * 获取公共房间列表
 * @returns 房间列表
 */
export async function getPublicRooms(): Promise<Room[]> {
  return http.get<Room[]>('/rooms/public');
}

/**
 * 根据ID获取房间信息
 * @param roomId 房间ID
 * @returns 房间信息
 */
export async function getRoomById(roomId: string): Promise<Room> {
  return http.get<Room>(`/rooms/${roomId}`);
}

/**
 * 根据邀请码获取房间信息
 * @param code 邀请码
 * @returns 房间信息
 */
export async function getRoomByCode(code: string): Promise<Room> {
  return http.get<Room>(`/rooms/code/${code}`);
}

/**
 * 创建房间
 * @param params 创建房间参数
 * @returns 创建的房间
 */
export async function createRoom(params: CreateRoomParams): Promise<Room> {
  return http.post<Room>('/rooms', params);
}

/**
 * 加入房间
 * @param params 加入房间参数
 * @returns 加入的房间
 */
export async function joinRoom(params: JoinRoomParams): Promise<Room> {
  return http.post<Room>('/rooms/join', params);
}

/**
 * 离开房间
 * @param roomId 房间ID
 * @returns 操作结果
 */
export async function leaveRoom(roomId: string): Promise<Room | { success: boolean; message: string }> {
  return http.post<Room | { success: boolean; message: string }>(`/rooms/${roomId}/leave`);
}

/**
 * 设置准备状态
 * @param roomId 房间ID
 * @param isReady 是否准备
 * @returns 更新后的房间
 */
export async function setReady(roomId: string, isReady: boolean): Promise<Room> {
  return http.post<Room>(`/rooms/${roomId}/ready`, { isReady });
}

/**
 * 开始游戏
 * @param roomId 房间ID
 * @returns 开始游戏后的房间
 */
export async function startGame(roomId: string): Promise<Room> {
  return http.post<Room>(`/rooms/${roomId}/start`);
}

/**
 * 准备下一局
 * @param roomId 房间ID
 * @returns 更新后的房间
 */
export async function readyForNextGame(roomId: string): Promise<Room> {
  return http.post<Room>(`/rooms/${roomId}/ready-next`);
} 
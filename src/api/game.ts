import http from './index';

/**
 * 游戏API模块
 * 
 * 提供游戏记录相关的API接口，包括获取游戏记录、玩家游戏统计等功能。
 * 
 * @module api/game
 */

// 游戏记录类型
export interface GameRecordItem {
  id: string;
  roomId: string;
  roomCode: string;
  startTime: string;
  endTime: string;
  duration: number;
  players: PlayerResult[];
  winner: PlayerResult;
}

// 玩家结果类型
export interface PlayerResult {
  userId: string;
  nickname: string;
  score: number;
  rank: number;
  events: GameEvent[];
}

// 游戏事件类型
export interface GameEvent {
  type: 'fish_caught' | 'item_used' | 'special_event';
  targetId: string;
  score?: number;
  x?: number;
  y?: number;
  itemId?: string;
  userId: string;
  nickname: string;
}

// 玩家游戏记录类型
export interface PlayerGameRecords {
  userId: string;
  nickname: string;
  totalGames: number;
  wins: number;
  avgScore: number;
  totalScore: number;
  bestScore: number;
  recentGames: GameRecordItem[];
}

/**
 * 获取玩家的游戏记录
 * @returns 游戏记录
 */
export async function getMyGameRecords(): Promise<PlayerGameRecords> {
  return http.get<PlayerGameRecords>('/game/records');
}

/**
 * 获取指定玩家的游戏记录
 * @param userId 玩家ID
 * @returns 游戏记录
 */
export async function getUserGameRecords(userId: string): Promise<PlayerGameRecords> {
  return http.get<PlayerGameRecords>(`/game/records/${userId}`);
}

/**
 * 获取指定游戏的详细记录
 * @param recordId 游戏记录ID
 * @returns 游戏记录详情
 */
export async function getGameRecord(recordId: string): Promise<GameRecordItem> {
  return http.get<GameRecordItem>(`/game/record/${recordId}`);
} 
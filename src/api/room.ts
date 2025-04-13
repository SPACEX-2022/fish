import http from './index';

/**
 * 房间API模块
 * 
 * 提供房间相关操作的API，包括匹配玩家、取消匹配、准备等功能
 * 
 * @module api/room
 */

/**
 * 房间信息接口
 */
export interface RoomInfo {
  roomId: string;
  roomCode: string;
  players: PlayerInfo[];
  readyTimeout: number;
  status: string;
}

/**
 * 玩家信息接口
 */
export interface PlayerInfo {
  userId: string;
  nickname: string;
  avatarUrl: string;
  isReady?: boolean;
}

/**
 * 开始匹配玩家
 * 将当前玩家加入匹配队列
 * @returns 匹配请求结果
 */
export async function startMatching() {
  return http.post('/rooms/match');
}

/**
 * 取消匹配
 * 将当前玩家从匹配队列中移除
 * @returns 取消匹配结果
 */
export async function cancelMatching() {
  return http.post('/rooms/cancel-match');
}

/**
 * 玩家准备
 * 在匹配成功后，玩家准备开始游戏
 * @param roomId 房间ID
 * @returns 准备结果
 */
export async function playerReady(roomId: string) {
  return http.post(`/rooms/${roomId}/ready`);
}

/**
 * 获取房间信息
 * @param roomId 房间ID
 * @returns 房间信息
 */
export async function getRoomInfo(roomId: string): Promise<RoomInfo> {
  return http.get(`/rooms/${roomId}`);
}

/**
 * 加入指定房间
 * @param roomCode 房间代码
 * @returns 加入结果
 */
export async function joinRoom(roomCode: string) {
  return http.post('/rooms/join', { roomCode });
}

/**
 * 创建房间
 * @returns 创建结果
 */
export async function createRoom() {
  return http.post('/rooms/create');
}

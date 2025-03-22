import http from './index';
import { setStorage, getStorage, removeStorage } from '../util/storage';

/**
 * 用户API模块
 * 
 * 提供用户相关的API接口，包括用户信息获取、个人资料管理、统计信息查询等功能。
 * 
 * @module api/user
 */

// 用户信息接口
export interface UserInfo {
  id: string;
  openid: string;
  nickname: string;
  avatar: string;
  gender?: number;
  score: number;
  level: number;
  experience: number;
  createdAt: string;
  updatedAt: string;
}

// 用户资料接口
export interface UserProfile {
  id: string;
  nickname: string;
  avatar: string;
  gender?: number;
  bio?: string;
  level: number;
  score: number;
  experience: number;
  gamesPlayed: number;
  wins: number;
  createdAt: string;
  updatedAt: string;
}

// 用户统计信息接口
export interface UserStats {
  totalGames: number;
  wins: number;
  winRate: number;
  avgScore: number;
  bestScore: number;
  totalScore: number;
  level: number;
  experience: number;
  experienceToNextLevel: number;
}

// 更新个人资料参数
export interface UpdateProfileParams {
  nickname?: string;
  avatar?: string;
  gender?: number;
  bio?: string;
}

// 用户排行榜项目
export interface LeaderboardItem {
  userId: string;
  nickname: string;
  avatar: string;
  score: number;
  level: number;
  rank: number;
}

/**
 * 获取当前登录用户信息
 * @returns 用户信息
 */
export async function getMyInfo(): Promise<UserInfo> {
  return http.get<UserInfo>('/user/me');
}

/**
 * 获取用户个人资料
 * @param userId 用户ID（可选，默认为当前用户）
 * @returns 用户资料
 */
export async function getProfile(userId?: string): Promise<UserProfile> {
  const url = userId ? `/user/${userId}/profile` : '/user/profile';
  return http.get<UserProfile>(url);
}

/**
 * 更新用户个人资料
 * @param data 更新数据
 * @returns 更新后的用户资料
 */
export async function updateProfile(data: UpdateProfileParams): Promise<UserProfile> {
  return http.request<UserProfile>({
    url: '/user/profile',
    method: 'PATCH',
    data
  });
}

/**
 * 获取用户统计信息
 * @param userId 用户ID（可选，默认为当前用户）
 * @returns 用户统计信息
 */
export async function getUserStats(userId?: string): Promise<UserStats> {
  const url = userId ? `/user/${userId}/stats` : '/user/stats';
  return http.get<UserStats>(url);
}

/**
 * 获取全局排行榜
 * @param type 排行榜类型：'score'(总分) 或 'level'(等级)
 * @param limit 返回数量，默认10
 * @returns 排行榜数据
 */
export async function getLeaderboard(type: 'score' | 'level' = 'score', limit: number = 10): Promise<LeaderboardItem[]> {
  return http.get<LeaderboardItem[]>('/user/leaderboard', { params: { type, limit } });
}

/**
 * 缓存用户信息到本地
 * @param userInfo 用户信息
 */
export async function cacheUserInfo(userInfo: UserInfo): Promise<void> {
  await setStorage('userInfo', userInfo);
}

/**
 * 从本地获取缓存的用户信息
 * @returns 缓存的用户信息或null
 */
export async function getCachedUserInfo(): Promise<UserInfo | null> {
  try {
    return await getStorage<UserInfo>('userInfo');
  } catch (error) {
    console.error('获取缓存用户信息失败', error);
    return null;
  }
}

/**
 * 清除缓存的用户信息
 */
export async function clearCachedUserInfo(): Promise<void> {
  await removeStorage('userInfo');
}

/**
 * 上传用户头像
 * @param filePath 本地文件路径
 * @returns 上传后的头像URL
 */
export async function uploadAvatar(filePath: string): Promise<{ url: string }> {
  return new Promise((resolve, reject) => {
    const baseURL = http.getBaseURL ? http.getBaseURL() : '';
    const token = http.getToken ? http.getToken() : '';
    
    wx.uploadFile({
      url: `${baseURL}/user/avatar`,
      filePath,
      name: 'avatar',
      header: {
        'Authorization': `Bearer ${token}`
      },
      success: (res: any) => {
        try {
          // 微信小游戏uploadFile的返回数据是字符串
          const data = JSON.parse(res.data);
          resolve(data);
        } catch (error: any) {
          reject(new Error('解析响应数据失败'));
        }
      },
      fail: (error: any) => {
        reject(error);
      }
    });
  });
} 
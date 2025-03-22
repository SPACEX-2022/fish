import http from './index';
import { setStorage, removeStorage } from '../util/storage';

/**
 * 认证API模块
 * 
 * 提供与用户登录、认证相关的API接口，包括微信登录、退出登录、检查登录状态等功能。
 * 
 * @module api/auth
 */

// 登录参数接口
export interface WxLoginParams {
  code: string;
  nickname?: string;
  avatarUrl?: string;
}

// 用户信息接口
export interface UserInfo {
  id: string;
  nickname: string;
  avatarUrl: string;
}

// 登录响应接口
export interface LoginResponse {
  token: string;
  user: UserInfo;
  connectionStatus?: {
    isConnected: boolean;
    lastSeen: number;
  };
}

/**
 * 微信登录
 * @param params 登录参数
 * @returns 登录结果
 */
export async function wxLogin(params: WxLoginParams): Promise<LoginResponse> {
  const response = await http.post<LoginResponse>('/auth/wx-login', params);
  
  // 保存token到本地
  if (response && response.token) {
    await setStorage('token', response.token);
    await setStorage('userInfo', response.user);
  }
  
  return response;
}

/**
 * 退出登录
 */
export async function logout(): Promise<boolean> {
  try {
    // 只需要清除本地存储的token
    await removeStorage('token');
    await removeStorage('userInfo');
    return true;
  } catch (error) {
    console.error('退出登录失败', error);
    return false;
  }
}

/**
 * 检查登录状态
 * @returns 是否已登录
 */
export async function checkLogin(): Promise<boolean> {
  try {
    const token = await http.get<{ valid: boolean }>('/auth/check');
    return token.valid;
  } catch (error) {
    return false;
  }
} 
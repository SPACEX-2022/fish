import http from './index';

/**
 * 心跳API模块
 * 
 * 提供用户在线状态与心跳机制相关的API接口，包括发送心跳、检查在线状态、WebSocket连接管理等功能。
 * 
 * @module api/heartbeat
 */

// 心跳状态接口
export interface HeartbeatStatus {
  isOnline: boolean;
  lastSeen?: number;
  clientId?: string;
  timestamp: number;
}

// 在线用户数接口
export interface OnlineCountResponse {
  onlineCount: number;
  timestamp: number;
}

/**
 * 发送心跳信号
 * @param clientId 客户端ID（可选）
 * @returns 心跳响应
 */
export async function ping(clientId?: string): Promise<{ status: string; message: string; timestamp: number }> {
  const headers: Record<string, string> = {};
  if (clientId) {
    headers['x-client-id'] = clientId;
  }
  
  return http.post<{ status: string; message: string; timestamp: number }>(
    '/heartbeat/ping',
    {},
    { header: headers }
  );
}

/**
 * 获取当前用户的在线状态
 * @returns 在线状态
 */
export async function getStatus(): Promise<HeartbeatStatus> {
  return http.get<HeartbeatStatus>('/heartbeat/status');
}

/**
 * 获取当前在线用户数
 * @returns 在线用户数
 */
export async function getOnlineCount(): Promise<OnlineCountResponse> {
  return http.get<OnlineCountResponse>('/heartbeat/online-count');
}

// WebSocket心跳连接管理
export class HeartbeatConnection {
  private socket: WebSocket | null = null;
  private interval: number | null = null;
  private token: string;
  private serverUrl: string;
  private isConnected = false;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 2000;
  private heartbeatInterval = 15000; // 15秒
  private clientId: string = '';
  
  private onConnectCallbacks: Array<() => void> = [];
  private onDisconnectCallbacks: Array<(reason: string) => void> = [];
  private onErrorCallbacks: Array<(error: any) => void> = [];
  private onStatusChangeCallbacks: Array<(status: HeartbeatStatus) => void> = [];
  
  constructor(serverUrl: string, token: string) {
    this.serverUrl = serverUrl;
    this.token = token;
  }
  
  /**
   * 连接到心跳服务器
   */
  connect(): void {
    try {
      // 确保之前的连接已关闭
      this.disconnect();
      
      // 创建WebSocket连接
      const socketUrl = this.serverUrl;
      
      // 使用微信小游戏的socket API
      const socketTask = wx.connectSocket({
        url: socketUrl,
        header: {
          'Authorization': `Bearer ${this.token}`
        },
      });
      
      // 注册事件处理函数
      // 微信小游戏的接口要求不同的回调类型
      socketTask.onOpen(this.handleSocketOpen.bind(this));
      socketTask.onClose(this.handleSocketClose.bind(this));
      socketTask.onError(this.handleSocketError.bind(this));
      socketTask.onMessage(this.handleSocketMessage.bind(this));
      
      // 保存socketTask
      this.socket = socketTask as any;
      
    } catch (error: any) {
      this.handleError({ errMsg: error.message || '连接失败' });
    }
  }
  
  /**
   * 断开连接
   */
  disconnect(): void {
    if (this.socket) {
      try {
        (this.socket as any).close();
      } catch (e) {
        console.error('关闭WebSocket连接失败', e);
      }
      this.socket = null;
    }
    
    // 清除心跳定时器
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
    
    this.isConnected = false;
  }
  
  /**
   * 开始发送心跳
   */
  startHeartbeat(): void {
    // 清除可能存在的旧定时器
    if (this.interval !== null) {
      clearInterval(this.interval);
    }
    
    // 立即发送一次心跳
    this.sendHeartbeat();
    
    // 设置定时发送
    this.interval = setInterval(() => {
      this.sendHeartbeat();
    }, this.heartbeatInterval) as unknown as number;
  }
  
  /**
   * 停止发送心跳
   */
  stopHeartbeat(): void {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
  
  /**
   * 发送单次心跳
   */
  private sendHeartbeat(): void {
    if (this.socket && this.isConnected) {
      this.sendMessage('heartbeat');
    }
  }
  
  /**
   * 发送消息
   * @param type 消息类型
   * @param data 消息数据
   */
  private sendMessage(type: string, data: any = {}): void {
    if (!this.socket || !this.isConnected) {
      return;
    }
    
    try {
      (this.socket as any).send({
        data: JSON.stringify({ type, ...data }),
        fail: (err: any) => {
          console.error('发送消息失败', err);
        }
      });
    } catch (error) {
      console.error('发送消息异常', error);
    }
  }
  
  /**
   * 查询当前状态
   */
  queryStatus(): void {
    if (this.socket && this.isConnected) {
      this.sendMessage('status');
    }
  }
  
  // Socket事件处理器
  private handleSocketOpen(data: { header: Record<string, any>, profile: Record<string, any> }): void {
    this.handleOpen(data);
  }
  
  private handleSocketClose(data: { code: number, reason: string }): void {
    this.handleClose(data);
  }
  
  private handleSocketError(data: { errMsg: string }): void {
    this.handleError(data);
  }
  
  private handleSocketMessage(res: { data: string | ArrayBuffer }): void {
    this.handleMessage(res);
  }
  
  // 事件处理函数
  private handleOpen(res: any): void {
    console.log('心跳连接已建立', res);
    this.isConnected = true;
    this.reconnectAttempts = 0;
    
    // 启动心跳
    this.startHeartbeat();
    
    // 触发连接事件
    this.onConnectCallbacks.forEach(callback => callback());
  }
  
  private handleClose(res: any): void {
    console.log('心跳连接已关闭', res);
    this.isConnected = false;
    this.stopHeartbeat();
    
    // 触发断开连接事件
    this.onDisconnectCallbacks.forEach(callback => callback(res.reason || '连接关闭'));
    
    // 尝试重连
    this.attemptReconnect();
  }
  
  private handleError(error: any): void {
    console.error('心跳连接错误', error);
    
    // 触发错误事件
    this.onErrorCallbacks.forEach(callback => callback(error));
    
    // 如果连接已建立，尝试重连
    if (this.isConnected) {
      this.isConnected = false;
      this.stopHeartbeat();
      this.attemptReconnect();
    }
  }
  
  private handleMessage(event: any): void {
    try {
      const data = JSON.parse(event.data);
      
      // 处理不同类型的消息
      switch (data.type) {
        case 'connection':
          this.clientId = data.clientId;
          break;
        case 'heartbeat':
          // 心跳响应
          break;
        case 'status':
          // 状态变更
          this.onStatusChangeCallbacks.forEach(callback => callback(data));
          break;
        case 'error':
          console.error('服务器返回错误', data.message);
          break;
      }
    } catch (error: any) {
      console.error('处理消息失败', error, event);
    }
  }
  
  private attemptReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.log('重连次数已达上限，停止重连');
      return;
    }
    
    this.reconnectAttempts++;
    const delay = this.reconnectDelay * Math.pow(1.5, this.reconnectAttempts - 1);
    
    console.log(`将在 ${delay}ms 后尝试第 ${this.reconnectAttempts} 次重连`);
    
    setTimeout(() => {
      if (!this.isConnected) {
        this.connect();
      }
    }, delay);
  }
  
  // 事件监听器
  onConnect(callback: () => void): void {
    this.onConnectCallbacks.push(callback);
  }
  
  onDisconnect(callback: (reason: string) => void): void {
    this.onDisconnectCallbacks.push(callback);
  }
  
  onError(callback: (error: any) => void): void {
    this.onErrorCallbacks.push(callback);
  }
  
  onStatusChange(callback: (status: HeartbeatStatus) => void): void {
    this.onStatusChangeCallbacks.push(callback);
  }
  
  // 获取连接状态
  isConnectedToServer(): boolean {
    return this.isConnected;
  }
  
  // 获取客户端ID
  getClientId(): string {
    return this.clientId;
  }
} 
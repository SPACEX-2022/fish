/**
 * 服务器通信API模块
 * 
 * 提供与游戏服务器WebSocket通信的功能，包括连接管理、消息处理、心跳机制等。
 * 支持多种消息类型的发送与接收，事件监听，以及自动重连机制。
 * 
 * @module api/gameSocket
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

// 通用消息接口
export interface GameSocketMessage {
  event: string;
  data: any;
}

// 消息处理回调接口
export type MessageHandler = (data: any) => void;

// WebSocket连接管理
export class GameSocketConnection {
  private socket: WebSocket | null = null;
  private heartbeatInterval: number | null = null;
  private token: string;
  private serverUrl: string;
  private isConnected = false;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 2000;
  private heartbeatIntervalTime = 5000; // 5秒
  private clientId: string = '';
  
  // 事件回调
  private onConnectCallbacks: Array<() => void> = [];
  private onDisconnectCallbacks: Array<(reason: string) => void> = [];
  private onErrorCallbacks: Array<(error: any) => void> = [];
  private onStatusChangeCallbacks: Array<(status: HeartbeatStatus) => void> = [];
  
  // 消息处理器映射
  private messageHandlers: Map<string, Array<MessageHandler>> = new Map();
  
  // 网络延迟测量
  private lastPingSent: number = 0;
  private pingHistory: number[] = [];
  private pingHistoryMax: number = 10; // 保存最近10次测量结果
  private onPingUpdateCallbacks: Array<(ping: number) => void> = [];
  private currentPing: number = 0;

  // 全局单例实例
  private static instance: GameSocketConnection | null = null;

  /**
   * 获取全局单例实例
   * @param serverUrl 服务器URL (可选，仅首次创建时需要)
   * @param token 认证令牌 (可选，仅首次创建时需要)
   * @returns GameSocketConnection 实例
   */
  public static getInstance(serverUrl?: string, token?: string): GameSocketConnection | null {
    // 如果实例不存在且提供了必要参数，则创建新实例
    if (!GameSocketConnection.instance && serverUrl && token) {
      GameSocketConnection.instance = new GameSocketConnection(serverUrl, token);
    }
    
    return GameSocketConnection.instance;
  }

  /**
   * 重置全局实例 (主要用于登出或测试)
   */
  public static resetInstance(): void {
    if (GameSocketConnection.instance) {
      GameSocketConnection.instance.disconnect();
      GameSocketConnection.instance = null;
    }
  }

  constructor(serverUrl: string, token: string) {
    this.serverUrl = serverUrl;
    this.token = token;
  }
  
  /**
   * 连接到服务器
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
    if (this.heartbeatInterval !== null) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
    
    this.isConnected = false;
  }
  
  /**
   * 开始发送心跳
   */
  startHeartbeat(): void {
    // 清除可能存在的旧定时器
    if (this.heartbeatInterval !== null) {
      clearInterval(this.heartbeatInterval);
    }
    
    // 立即发送一次心跳
    this.sendHeartbeat();
    
    // 设置定时发送
    this.heartbeatInterval = setInterval(() => {
      this.sendHeartbeat();
    }, this.heartbeatIntervalTime) as unknown as number;
  }
  
  /**
   * 停止发送心跳
   */
  stopHeartbeat(): void {
    if (this.heartbeatInterval !== null) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }
  
  /**
   * 发送单次心跳
   */
  private sendHeartbeat(): void {
    if (this.socket && this.isConnected) {
      // 记录发送心跳的时间戳
      this.lastPingSent = Date.now();
      this.sendMessage('heartbeat', { timestamp: this.lastPingSent });
    }
  }
  
  /**
   * 发送消息
   * @param event 消息事件类型
   * @param data 消息数据
   */
  sendMessage(event: string, data: any = {}): void {
    if (!this.socket || !this.isConnected) {
      return;
    }
    
    try {
      (this.socket as any).send({
        data: JSON.stringify({ event, data }),
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
  
  /**
   * 注册消息处理器
   * @param event 事件类型
   * @param handler 处理函数
   */
  onMessage(event: string, handler: MessageHandler): void {
    if (!this.messageHandlers.has(event)) {
      this.messageHandlers.set(event, []);
    }
    
    this.messageHandlers.get(event)?.push(handler);
  }
  
  /**
   * 移除消息处理器
   * @param event 事件类型
   * @param handler 处理函数（可选，不提供则移除所有）
   */
  offMessage(event: string, handler?: MessageHandler): void {
    if (!handler) {
      this.messageHandlers.delete(event);
      return;
    }
    
    const handlers = this.messageHandlers.get(event);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
      
      if (handlers.length === 0) {
        this.messageHandlers.delete(event);
      }
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
    console.log('服务器连接已建立', res);
    this.isConnected = true;
    this.reconnectAttempts = 0;
    
    // 启动心跳
    this.startHeartbeat();
    
    // 触发连接事件
    this.onConnectCallbacks.forEach(callback => callback());
  }
  
  private handleClose(res: any): void {
    console.log('服务器连接已关闭', res);
    this.isConnected = false;
    this.stopHeartbeat();
    
    // 触发断开连接事件
    this.onDisconnectCallbacks.forEach(callback => callback(res.reason || '连接关闭'));
    
    // 尝试重连
    this.attemptReconnect();
  }
  
  private handleError(error: any): void {
    console.error('服务器连接错误', error);
    
    // 触发错误事件
    this.onErrorCallbacks.forEach(callback => callback(error));
    
    // 如果连接已建立，尝试重连
    if (this.isConnected) {
      this.isConnected = false;
      this.stopHeartbeat();
      this.attemptReconnect();
    }
  }
  
  private handleMessage(events: any): void {
    try {
      const { event, data } = JSON.parse(events.data);
      
      // 处理特定系统事件
      switch (event) {
        case 'connection':
          this.clientId = data.clientId;
          break;
        case 'heartbeat':
          // 心跳响应，计算ping值
          if (this.lastPingSent > 0) {
            const pingValue = Date.now() - this.lastPingSent;
            this.updatePingValue(pingValue);
          }
          break;
        case 'status':
          // 状态变更
          this.onStatusChangeCallbacks.forEach(callback => callback(data));
          break;
      }
      
      // 分发消息到对应的处理器
      const handlers = this.messageHandlers.get(event);
      if (handlers && handlers.length > 0) {
        handlers.forEach(handler => {
          try {
            handler(data);
          } catch (err) {
            console.error(`处理消息${event}时出错:`, err);
          }
        });
      }
      
    } catch (error: any) {
      console.error('处理消息失败', error, events);
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
  
  /**
   * 更新ping值
   * @param pingValue 新测量的ping值
   */
  private updatePingValue(pingValue: number): void {
    // 添加到历史记录
    this.pingHistory.push(pingValue);
    
    // 保持固定长度
    if (this.pingHistory.length > this.pingHistoryMax) {
      this.pingHistory.shift();
    }
    
    // 计算平均ping值
    const avgPing = Math.floor(
      this.pingHistory.reduce((sum, val) => sum + val, 0) / 
      this.pingHistory.length
    );
    
    this.currentPing = avgPing;
    
    // 触发ping更新事件
    this.onPingUpdateCallbacks.forEach(callback => callback(avgPing));
  }
  
  /**
   * 获取当前ping值
   * @returns 当前ping值(ms)
   */
  getCurrentPing(): number {
    return this.currentPing;
  }
  
  /**
   * 注册ping更新回调函数
   * @param callback ping值更新时调用的回调函数
   */
  onPingUpdate(callback: (ping: number) => void): void {
    this.onPingUpdateCallbacks.push(callback);
    
    // 如果已有ping值，立即触发一次回调
    if (this.currentPing > 0) {
      callback(this.currentPing);
    }
  }
} 
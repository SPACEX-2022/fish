import { getStorage, getStorageSync } from '../util/storage';

/**
 * API模块
 * 
 * 这个模块提供了与服务器通信的HTTP客户端和相关类型定义。
 * 它封装了微信小游戏的网络API，提供了更易用的接口，并支持拦截器模式。
 * 
 * @module api
 */

/**
 * 微信小游戏请求参数类型
 */
interface WxRequestOption {
  url: string;
  data?: string | object | ArrayBuffer;
  header?: Record<string, string>;
  timeout?: number;
  method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT' | 'PATCH';
  dataType?: string;
  responseType?: 'text' | 'arraybuffer';
  success?: (res: any) => void;
  fail?: (res: any) => void;
  complete?: (res: any) => void;
}

/**
 * 请求配置接口
 * 
 * 继承微信请求选项并添加额外的配置项
 */
export interface RequestConfig extends Omit<WxRequestOption, 'success' | 'fail' | 'complete'> {
  /** API基础URL */
  baseURL?: string;
  /** 是否显示加载提示 */
  showLoading?: boolean;
  /** 加载提示文本 */
  loadingText?: string;
  /** 请求失败时重试次数 */
  retry?: number;
  /** 重试间隔时间(ms) */
  retryDelay?: number;
}

/**
 * 拦截器接口
 */
export interface Interceptor<T> {
  /**
   * 使用拦截器
   * @param onFulfilled 成功回调
   * @param onRejected 失败回调
   * @returns 拦截器ID
   */
  use: (onFulfilled: (value: T) => T | Promise<T>, onRejected?: (error: any) => any) => number;
  
  /**
   * 移除拦截器
   * @param id 拦截器ID
   */
  eject: (id: number) => void;
}

/**
 * HTTP响应接口
 */
export interface Response<T = any> {
  /** 响应数据 */
  data: T;
  /** HTTP状态码 */
  statusCode: number;
  /** 响应头 */
  header: Record<string, string>;
  /** Cookies */
  cookies: string[];
}

interface ResponseResult<T> {
  code: number;
  message: string;
  result: T;
}

// 请求拦截器实现
class RequestInterceptor implements Interceptor<RequestConfig> {
  private handlers: Array<{
    fulfilled: (value: RequestConfig) => RequestConfig | Promise<RequestConfig>;
    rejected?: (error: any) => any;
  } | undefined> = [];

  use(onFulfilled: (value: RequestConfig) => RequestConfig | Promise<RequestConfig>, onRejected?: (error: any) => any): number {
    this.handlers.push({
      fulfilled: onFulfilled,
      rejected: onRejected,
    });
    return this.handlers.length - 1;
  }

  eject(id: number): void {
    if (this.handlers[id]) {
      this.handlers[id] = undefined;
    }
  }

  async process(config: RequestConfig): Promise<RequestConfig> {
    let processedConfig = { ...config };
    for (const handler of this.handlers) {
      if (handler) {
        try {
          processedConfig = await handler.fulfilled(processedConfig);
        } catch (error) {
          if (handler.rejected) {
            handler.rejected(error);
          }
          throw error;
        }
      }
    }
    return processedConfig;
  }
}

// 响应拦截器实现
class ResponseInterceptor implements Interceptor<Response> {
  private handlers: Array<{
    fulfilled: (value: Response) => Response | Promise<Response>;
    rejected?: (error: any) => any;
  } | undefined> = [];

  use(onFulfilled: (value: Response) => Response | Promise<Response>, onRejected?: (error: any) => any): number {
    this.handlers.push({
      fulfilled: onFulfilled,
      rejected: onRejected,
    });
    return this.handlers.length - 1;
  }

  eject(id: number): void {
    if (this.handlers[id]) {
      this.handlers[id] = undefined;
    }
  }

  async process(response: Response): Promise<Response> {
    let processedResponse = { ...response };
    for (const handler of this.handlers) {
      if (handler) {
        try {
          processedResponse = await handler.fulfilled(processedResponse);
        } catch (error) {
          if (handler.rejected) {
            await handler.rejected(error);
          }
          throw error;
        }
      }
    }
    return processedResponse;
  }
}

/**
 * HTTP客户端类
 * 
 * 提供基于Promise的HTTP请求方法，支持请求和响应拦截器。
 */
export class HttpClient {
  // 默认配置
  private defaultConfig: RequestConfig = {
    baseURL: '',
    header: {
      'content-type': 'application/json',
    },
    timeout: 10000,
    method: 'GET',
    showLoading: false,
    loadingText: '加载中...',
    retry: 0,
    retryDelay: 1000,
    url: '' // 这会在请求时被覆盖
  };
  
  // 公开的默认值访问属性
  public defaults = {
    baseURL: '',
    token: ''
  };

  // 拦截器
  public interceptors = {
    request: new RequestInterceptor(),
    response: new ResponseInterceptor(),
  };

  constructor(config: Partial<RequestConfig> = {}) {
    this.defaultConfig = { ...this.defaultConfig, ...config };
    
    // 设置默认baseURL到公开属性
    if (config.baseURL) {
      this.defaults.baseURL = config.baseURL;
    }

    // 添加默认的Token拦截器
    this.interceptors.request.use((config) => {
      try {
        const token = getStorageSync('token');
        if (token && config.header) {
          config.header = {
            ...config.header,
            'Authorization': `Bearer ${token}`
          };
          // 存储token到公开属性
          this.defaults.token = token;
        }
      } catch (err) {
        console.error('获取token失败', err);
      }
      return config;
    });

    // 添加默认的响应处理拦截器
    this.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.error('请求错误:', error);
        return Promise.reject(error);
      }
    );
  }
  
  // 获取baseURL
  getBaseURL(): string {
    return this.defaults.baseURL;
  }
  
  // 获取当前token
  getToken(): string {
    return this.defaults.token;
  }

  // 发送请求的核心方法
  async request<T = any>(config: RequestConfig): Promise<T> {
    try {
      // 应用请求拦截器
      const processedConfig = await this.interceptors.request.process({
        ...this.defaultConfig,
        ...config,
      });

      // 处理baseURL
      if (processedConfig.baseURL && !processedConfig.url.startsWith('http')) {
        processedConfig.url = `${processedConfig.baseURL}${processedConfig.url}`;
      }

      // 显示加载提示
      if (processedConfig.showLoading) {
        wx.showLoading({
          title: processedConfig.loadingText || '加载中...',
          mask: true
        });
      }

      return new Promise<T>((resolve, reject) => {
        const handleRequest = (retryCount = 0) => {
          // 移除非wx.request支持的属性
          const { baseURL, showLoading, loadingText, retry, retryDelay, ...wxRequestConfig } = processedConfig;
          
          wx.request({
            ...wxRequestConfig,
            success: async (res: any) => {
              if (processedConfig.showLoading) {
                wx.hideLoading();
              }
              
              try {
                // 应用响应拦截器
                const processedResponse = await this.interceptors.response.process(res as Response);
                
                // 检查状态码，2xx 表示成功
                if (processedResponse.statusCode >= 200 && processedResponse.statusCode < 300) {
                  resolve(processedResponse.data);
                } else {
                  // 失败的请求，考虑重试
                  if (retryCount < (processedConfig.retry || 0)) {
                    setTimeout(() => {
                      handleRequest(retryCount + 1);
                    }, processedConfig.retryDelay || 1000);
                  } else {
                    reject({
                      statusCode: processedResponse.statusCode,
                      message: `请求失败，状态码: ${processedResponse.statusCode}`,
                      data: processedResponse.data
                    });
                  }
                }
              } catch (error) {
                reject(error);
              }
            },
            fail: (error: any) => {
              if (processedConfig.showLoading) {
                wx.hideLoading();
              }
              
              // 网络错误，考虑重试
              if (retryCount < (processedConfig.retry || 0)) {
                setTimeout(() => {
                  handleRequest(retryCount + 1);
                }, processedConfig.retryDelay || 1000);
              } else {
                reject({
                  message: '网络请求失败',
                  error
                });
              }
            }
          });
        };

        handleRequest();
      });
    } catch (error) {
      if (config.showLoading) {
        wx.hideLoading();
      }
      return Promise.reject(error);
    }
  }

  // GET请求
  get<T = any>(url: string, params?: Record<string, any>, config?: Partial<RequestConfig>) {
    return this.request<ResponseResult<T>>({
      ...config,
      url,
      method: 'GET',
      data: params,
    });
  }

  // POST请求
  post<T = any>(url: string, data?: any, config?: Partial<RequestConfig>) {
    return this.request<ResponseResult<T>>({
      ...config,
      url,
      method: 'POST',
      data,
    });
  }

  // PUT请求
  put<T = any>(url: string, data?: any, config?: Partial<RequestConfig>) {
    return this.request<ResponseResult<T>>({
      ...config,
      url,
      method: 'PUT',
      data,
    });
  }

  // DELETE请求
  delete<T = any>(url: string, data?: any, config?: Partial<RequestConfig>) {
    return this.request<ResponseResult<T>>({
      ...config,
      url,
      method: 'DELETE',
      data,
    });
  }

  // PATCH请求
  patch<T = any>(url: string, data?: any, config?: Partial<RequestConfig>) {
    return this.request<ResponseResult<T>>({
      ...config,
      url,
      method: 'PATCH',
      data,
    });
  }
}

/**
 * 默认HTTP客户端实例
 */
const http = new HttpClient({
  baseURL: 'http://localhost:3000/api', // 本地环境
  // baseURL: 'https://www.joy-stream.asia/api', // 生产环境
  retry: 1,
  retryDelay: 1500
});

export default http;

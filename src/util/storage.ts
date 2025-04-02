/**
 * 存储工具模块
 * 封装微信小游戏的存储API
 */

/**
 * 设置缓存数据
 * @param key 键名
 * @param data 数据
 */
export function setStorageSync(key: string, data: any): void {
  try {
    // 微信小游戏中没有真正的同步存储API，使用异步API代替
    wx.setStorageSync(key, data);
  } catch (error) {
    console.error(`设置缓存失败: ${key}`, error);
  }
}

/**
 * 获取缓存数据
 * @param key 键名
 * @returns 缓存数据
 */
export function getStorageSync<T = any>(key: string): T | null {
  try {
    // 实际应用中应该使用异步API，这里为了简单处理返回null
    // 建议使用getStorage方法代替

    return wx.getStorageSync(key) as T | null;
  } catch (error) {
    console.error(`获取缓存失败: ${key}`, error);
    return null;
  }
}

/**
 * 删除缓存数据
 * @param key 键名
 */
export function removeStorageSync(key: string): void {
  try {
    wx.removeStorageSync(key);
  } catch (error) {
    console.error(`删除缓存失败: ${key}`, error);
  }
}

/**
 * 清除所有缓存数据
 */
export function clearStorageSync(): void {
  try {
    wx.clearStorageSync();
  } catch (error) {
    console.error('清除所有缓存失败', error);
  }
}

/**
 * 异步设置缓存数据
 * @param key 键名
 * @param data 数据
 * @returns Promise
 */
export function setStorage(key: string, data: any): Promise<void> {
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key,
      data,
      success: () => resolve(),
      fail: () => reject()
    });
  });
}

/**
 * 异步获取缓存数据
 * @param key 键名
 * @returns Promise<T>
 */
export function getStorage<T = any>(key: string): Promise<T> {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key,
      success: (res) => resolve(res.data as T),
      fail: () => reject()
    });
  });
}

/**
 * 异步删除缓存数据
 * @param key 键名
 * @returns Promise
 */
export function removeStorage(key: string): Promise<void> {
  return new Promise((resolve, reject) => {
    wx.removeStorage({
      key,
      success: () => resolve(),
      fail: () => reject()
    });
  });
}

/**
 * 异步清除所有缓存数据
 * @returns Promise
 */
export function clearStorage(): Promise<void> {
  return new Promise((resolve, reject) => {
    wx.clearStorage({
      success: () => resolve(),
      fail: () => reject()
    });
  });
} 
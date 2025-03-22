import * as PIXI from 'pixi.js';
import { stage, screen, ticker } from '~/core';
import BatterySystem from './BatterySystem';

class Player {
  /**
   * 创建一个玩家实例
   * @param {Object} options - 玩家配置选项
   */
  constructor(options = {}) {
    // 玩家默认位置，通常在底部中央
    this.position = {
      x: options.x || screen.width / 2,
      y: options.y || screen.height // 更靠近底部
    };
    
    // 玩家属性
    this.score = 0;
    this.coins = options.coins || 0;
    
    // 创建炮台系统
    this.batterySystem = new BatterySystem({
      x: this.position.x,
      y: this.position.y,
      cannonOptions: options.cannonOptions || {
        fireRate: 500,  // 每500毫秒可发射一次
        burstCount: 1,  // 默认单发
        burstSpacing: 100,  // 连发间隔
      },
      baseOptions: options.baseOptions || {},
      bulletOptions: options.bulletOptions || {
        speed: 10,
        power: 1,
        size: 1,
        explosionRadius: 20,
        explosionEffect: 'default'
      }
    });
  }
  
  /**
   * 初始化玩家
   * @param {PIXI.Container} container - 要添加玩家元素的容器
   */
  init(container) {
    if (!container) {
      console.error('初始化玩家失败：容器不存在');
      return;
    }
    
    // 初始化炮台系统
    this.batterySystem.init(container);
    
    console.log('玩家初始化完成，位置:', this.position.x, this.position.y);
  }
  
  /**
   * 处理射击事件
   * @param {number} targetX - 目标x坐标
   * @param {number} targetY - 目标y坐标
   * @param {PIXI.Container} container - 添加子弹的容器
   * @returns {Array} - 返回发射的子弹数组
   */
  shoot(targetX, targetY, container) {
    return this.batterySystem.fire(targetX, targetY, container);
  }
  
  /**
   * 更新玩家状态
   * @param {number} delta - 帧时间差
   * @param {PIXI.Container} container - 子弹所在的容器
   * @param {Array} fishes - 鱼对象数组，用于碰撞检测
   */
  update(delta, container, fishes) {
    // 更新子弹
    this.batterySystem.updateBullets(delta, container);
    
    // 检测碰撞
    if (fishes) {
      const hitResults = this.batterySystem.checkCollisions(fishes, container);
      
      // 处理击中结果
      this.processHitResults(hitResults);
    }
  }
  
  /**
   * 处理击中结果
   * @param {Array} hitResults - 击中结果数组
   */
  processHitResults(hitResults) {
    if (!hitResults || hitResults.length === 0) return;
    
    // 计算得分和金币
    for (const result of hitResults) {
      if (result.isDead) {
        // 鱼被击杀，加分和金币
        this.score += result.score;
        this.coins += Math.round(result.score / 2); // 示例：金币为分数的一半
        
        console.log(`鱼被击杀，获得分数: ${result.score}, 金币: ${Math.round(result.score / 2)}`);
      }
    }
  }
  
  /**
   * 升级炮台
   * @param {Object} upgradeOptions - 升级选项
   */
  upgradeCannon(upgradeOptions) {
    // 检查金币是否足够
    if (upgradeOptions.price && this.coins < upgradeOptions.price) {
      console.log('金币不足，无法升级');
      return false;
    }
    
    // 扣除金币
    if (upgradeOptions.price) {
      this.coins -= upgradeOptions.price;
    }
    
    // 升级炮台
    this.batterySystem.upgradeCannon(upgradeOptions);
    
    return true;
  }
  
  /**
   * 更换底座
   * @param {Object} newBaseOptions - 新底座选项
   * @param {PIXI.Container} container - 容器
   */
  changeBase(newBaseOptions, container) {
    // 检查金币是否足够
    if (newBaseOptions.price && this.coins < newBaseOptions.price) {
      console.log('金币不足，无法更换底座');
      return false;
    }
    
    // 扣除金币
    if (newBaseOptions.price) {
      this.coins -= newBaseOptions.price;
    }
    
    // 更换底座
    this.batterySystem.changeBase(newBaseOptions, container);
    
    return true;
  }
  
  /**
   * 获取玩家分数
   * @returns {number} - 玩家分数
   */
  getScore() {
    return this.score;
  }
  
  /**
   * 获取玩家金币
   * @returns {number} - 玩家金币
   */
  getCoins() {
    return this.coins;
  }
  
  /**
   * 增加玩家金币
   * @param {number} amount - 增加的金币数量
   */
  addCoins(amount) {
    this.coins += amount;
  }
}

export default Player; 
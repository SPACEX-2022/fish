import * as PIXI from 'pixi.js';
import { screen } from '~/core';
import CannonBase from './CannonBase';
import Cannon from './Cannon';
import Bullet from './Bullet';

/**
 * 炮台系统类
 * 负责管理炮台、底座和子弹的组合和更新
 */
class BatterySystem {
  /**
   * 创建一个炮台系统实例
   * @param {Object} options - 配置选项
   * @param {Object} options.cannonOptions - 炮台配置
   * @param {Object} options.baseOptions - 底座配置
   * @param {Object} options.bulletOptions - 子弹配置
   */
  constructor(options = {}) {
    // 默认位置，通常在底部中央
    this.position = {
      x: options.x || screen.width / 2,
      y: options.y || screen.height // 更靠近底部
    };
    
    // 创建底座
    this.base = new CannonBase({
      ...options.baseOptions,
      x: this.position.x,
      y: this.position.y
    });
    
    // 获取炮台安装位置
    const mountPosition = this.base.getCannonMountPosition();
    
    // 创建炮台
    this.cannon = new Cannon({
      ...options.cannonOptions,
      x: mountPosition.x,
      y: mountPosition.y
    });
    
    // 子弹配置
    this.bulletConfig = options.bulletOptions || {};
    
    // 子弹管理
    this.bullets = [];
    this.activeBullets = new Set(); // 使用Set管理活跃子弹
  }
  
  /**
   * 初始化炮台系统
   * @param {PIXI.Container} container - 要添加炮台系统的容器
   */
  init(container) {
    if (!container) {
      console.error('初始化炮台系统失败：容器不存在');
      return;
    }
    
    // 添加底座和炮台到容器
    this.base.addToContainer(container);
    this.cannon.addToContainer(container);
    
    // 更新子弹配置
    this.cannon.bulletConfig = this.bulletConfig;
    
    console.log('炮台系统初始化完成，位置:', this.position.x, this.position.y);
  }
  
  /**
   * 更新炮台系统位置
   * @param {number} x - x坐标
   * @param {number} y - y坐标
   */
  updatePosition(x, y) {
    this.position.x = x;
    this.position.y = y;
    
    // 更新底座位置
    this.base.updatePosition(x, y);
    
    // 获取炮台安装位置
    const mountPosition = this.base.getCannonMountPosition();
    
    // 更新炮台位置
    this.cannon.updatePosition(mountPosition.x, mountPosition.y);
  }
  
  /**
   * 旋转炮台朝向目标位置
   * @param {number} targetX - 目标x坐标
   * @param {number} targetY - 目标y坐标
   */
  rotateCannon(targetX, targetY) {
    this.cannon.rotateToTarget(targetX, targetY);
  }
  
  /**
   * 发射子弹
   * @param {number} targetX - 目标x坐标
   * @param {number} targetY - 目标y坐标
   * @param {PIXI.Container} container - 添加子弹的容器
   * @returns {Array} - 返回发射的子弹数组
   */
  fire(targetX, targetY, container) {
    if (!container) {
      console.error('发射子弹失败：容器不存在');
      return [];
    }
    
    console.log('子弹已发射');
    
    // 使用炮台发射子弹
    const newBullets = this.cannon.fire(targetX, targetY, container);
    
    // 添加到子弹管理
    newBullets.forEach(bullet => {
      this.bullets.push(bullet);
      this.activeBullets.add(bullet);
    });
    
    return newBullets;
  }
  
  /**
   * 更新所有子弹
   * @param {number} delta - 帧时间差
   * @param {PIXI.Container} container - 子弹所在的容器
   */
  updateBullets(delta, container) {
    if (!container) return;
    
    // 更新管理中的子弹
    this.activeBullets.forEach(bullet => {
      // 更新子弹位置，如果返回false表示子弹已失效
      if (!bullet.update(delta)) {
        // 移除失效子弹
        this.activeBullets.delete(bullet);
        
        // 如果子弹未爆炸但已失活（超出屏幕），需要从容器移除
        if (!bullet.hasExploded && !bullet.isExploding) {
          bullet.removeFromContainer();
        }
      }
    });
    
    // 定期清理bullets数组（可选，如果需要保留发射记录可以不清理）
    if (this.bullets.length > 100) {
      // 只保留最近的50个子弹记录
      this.bullets = this.bullets.slice(-50);
    }
  }
  
  /**
   * 检测子弹与鱼群的碰撞
   * @param {Array} fishes - 鱼对象数组
   * @param {PIXI.Container} container - 游戏容器，用于添加爆炸效果
   * @returns {Array} - 返回被击中的鱼数组
   */
  checkCollisions(fishes, container) {
    if (!fishes || !container) return [];
    
    const hitFishes = [];
    
    // 遍历所有活跃子弹
    this.activeBullets.forEach(bullet => {
      // 跳过已爆炸的子弹
      if (bullet.hasExploded || bullet.isExploding) return;
      
      // 检查碰撞
      let hasCollided = false;
      
      // 遍历所有鱼
      for (const fish of fishes) {
        // 跳过已经是击中状态、正在播放死亡动画或死亡的鱼
        if (fish.hit || fish.isDeathAnimating || fish.isDead) continue;
        
        // 简单的矩形碰撞检测
        const bulletBounds = bullet.getBounds();
        const fishBounds = fish.getBounds();
        
        if (bulletBounds.x < fishBounds.x + fishBounds.width &&
            bulletBounds.x + bulletBounds.width > fishBounds.x &&
            bulletBounds.y < fishBounds.y + fishBounds.height &&
            bulletBounds.y + bulletBounds.height > fishBounds.y) {
          
          console.log('碰撞检测：子弹与鱼');
          
          // 获取子弹当前位置和方向
          const bulletPosition = bullet.getPosition();
          
          // 触发子弹爆炸，传入子弹当前位置，并指示应使用子弹前端进行偏移计算
          const explosionInfo = bullet.explode(container, { x: bulletPosition.x, y: bulletPosition.y }, true);
          
          // 记录碰撞
          hasCollided = true;
          
          // 对鱼造成伤害
          const isDead = fish.takeDamage(bullet.power);
          
          // 添加到击中列表
          hitFishes.push({ fish, isDead, score: fish.getScore() });
          
          // 单个子弹可能会影响范围内的其他鱼（范围伤害）
          if (explosionInfo && bullet.explosionRadius > 0) {
            // 检查范围内的其他鱼
            for (const otherFish of fishes) {
              // 跳过当前鱼和已经处理过的鱼
              if (otherFish === fish || otherFish.hit || otherFish.isDeathAnimating || otherFish.isDead) continue;
              
              // 获取其他鱼的位置
              const otherFishPos = {
                x: otherFish.sprite.position.x,
                y: otherFish.sprite.position.y
              };
              
              // 检查是否在爆炸范围内
              if (bullet.isPointInExplosionRadius(otherFishPos.x, otherFishPos.y)) {
                // 对范围内的鱼造成伤害（可以设置为较小的伤害）
                const rangeIsDead = otherFish.takeDamage(bullet.power * 0.5);
                
                // 添加到击中列表
                hitFishes.push({ fish: otherFish, isDead: rangeIsDead, score: otherFish.getScore() });
              }
            }
          }
          
          // 移除子弹管理
          this.activeBullets.delete(bullet);
          
          // 一个子弹只能直接击中一条鱼（但可能有范围伤害）
          break;
        }
      }
      
      // 如果子弹已碰撞，处理完成后跳出
      if (hasCollided) return;
    });
    
    return hitFishes;
  }
  
  /**
   * 升级炮台
   * @param {Object} upgradeOptions - 升级选项
   */
  upgradeCannon(upgradeOptions) {
    if (!upgradeOptions) return;
    
    // 更新炮台属性
    this.cannon.updateProps(upgradeOptions);
    
    // 如果有更新子弹配置
    if (upgradeOptions.bulletConfig) {
      this.bulletConfig = {
        ...this.bulletConfig,
        ...upgradeOptions.bulletConfig
      };
      
      // 更新炮台中的子弹配置
      this.cannon.bulletConfig = this.bulletConfig;
    }
  }
  
  /**
   * 更换底座
   * @param {Object} newBaseOptions - 新底座选项
   * @param {PIXI.Container} container - 容器
   */
  changeBase(newBaseOptions, container) {
    if (!newBaseOptions || !container) return;
    
    // 移除旧底座
    this.base.removeFromContainer();
    
    // 创建新底座
    this.base = new CannonBase({
      ...newBaseOptions,
      x: this.position.x,
      y: this.position.y
    });
    
    // 添加新底座到容器
    this.base.addToContainer(container);
    
    // 更新炮台位置
    const mountPosition = this.base.getCannonMountPosition();
    this.cannon.updatePosition(mountPosition.x, mountPosition.y);
  }
  
  /**
   * 清理所有子弹
   */
  clearBullets() {
    // 移除所有子弹
    this.activeBullets.forEach(bullet => {
      bullet.removeFromContainer();
    });
    
    // 清空管理集合
    this.activeBullets.clear();
    this.bullets = [];
  }
}

export default BatterySystem; 
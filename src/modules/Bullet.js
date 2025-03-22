import * as PIXI from 'pixi.js';
import { screen, ticker } from '~/core';

/**
 * 子弹类
 * 负责子弹的移动、碰撞检测和爆炸效果
 */
class Bullet {
  /**
   * 创建一个子弹实例
   * @param {Object} options - 配置选项
   * @param {number} options.x - 子弹x坐标位置
   * @param {number} options.y - 子弹y坐标位置
   * @param {number} options.rotation - 子弹旋转角度
   * @param {string} options.texture - 子弹纹理路径
   * @param {number} options.speed - 子弹速度
   * @param {number} options.power - 子弹威力/伤害
   * @param {number} options.size - 子弹大小缩放比例
   * @param {number} options.explosionRadius - 爆炸半径
   * @param {string} options.explosionEffect - 爆炸效果类型
   * @param {string} options.type - 子弹类型，用于在商店中识别
   */
  constructor(options = {}) {
    // 默认值
    const {
      x = 0,
      y = 0,
      rotation = 0,
      texture = 'assets/images/bullet.png',
      speed = 10,
      power = 1,
      size = 1,
      explosionRadius = 20, // 默认爆炸半径
      explosionEffect = 'default',
      type = 'default'
    } = options;
    
    // 创建精灵
    this.sprite = PIXI.Sprite.from(texture);
    this.sprite.anchor.set(0.5); // 中心点作为锚点
    this.sprite.position.set(x, y);
    this.sprite.rotation = rotation;
    this.sprite.scale.set(size);
    
    // 计算实际方向（从炮口方向）
    const direction = rotation - Math.PI / 2; // 旋转角度转换为方向角度
    
    // 移动属性
    this.directionX = Math.cos(direction);
    this.directionY = Math.sin(direction);
    this.speed = speed;
    
    // 子弹属性
    this.power = power; // 威力/伤害
    this.size = size; // 大小
    this.explosionRadius = explosionRadius; // 爆炸半径（用于范围伤害）
    this.explosionEffect = explosionEffect; // 爆炸特效类型
    this.type = type; // 子弹类型
    
    // 状态属性
    this.isActive = true; // 子弹是否处于活跃状态
    this.hasExploded = false; // 子弹是否已爆炸
    this.isExploding = false; // 是否正在播放爆炸动画
    this.collisionPoint = null; // 碰撞位置，用于定位爆炸效果
    
    // 爆炸特效配置，可根据类型设置不同参数
    this.explosionConfig = {
      default: {
        texture: 'assets/images/boomEffect.png',
        duration: 500, // 持续时间，毫秒
        startScale: 0.5,
        endScale: 1.5,
        startAlpha: 1,
        endAlpha: 0
      },
      // 可以添加更多爆炸特效类型
      fire: {
        texture: 'assets/images/fireEffect.png',
        duration: 700,
        startScale: 0.3,
        endScale: 2,
        startAlpha: 1,
        endAlpha: 0
      },
      ice: {
        texture: 'assets/images/iceEffect.png',
        duration: 600,
        startScale: 0.4,
        endScale: 1.8,
        startAlpha: 0.8,
        endAlpha: 0
      }
    };
    
    // 初始化爆炸容器（用于存放爆炸特效）
    this.explosionContainer = null;
  }
  
  /**
   * 更新子弹位置
   * @param {number} delta - 帧时间差
   * @returns {boolean} - 返回子弹是否还在有效区域内
   */
  update(delta) {
    if (this.isExploding || this.hasExploded || !this.isActive) {
      return false;
    }
    
    // 移动子弹
    this.sprite.position.x += this.directionX * this.speed;
    this.sprite.position.y += this.directionY * this.speed;
    
    // 检查子弹是否超出屏幕
    if (
      this.sprite.position.x < -50 || 
      this.sprite.position.x > screen.width + 50 || 
      this.sprite.position.y < -50 || 
      this.sprite.position.y > screen.height + 50
    ) {
      this.isActive = false;
      return false;
    }
    
    return true;
  }
  
  /**
   * 设置碰撞点（用于爆炸位置）
   * @param {number} x - 碰撞点x坐标
   * @param {number} y - 碰撞点y坐标
   */
  setCollisionPoint(x, y) {
    this.collisionPoint = { x, y };
  }
  
  /**
   * 触发子弹爆炸效果
   * @param {PIXI.Container} container - 添加爆炸效果的容器
   * @param {Object} collisionPoint - 碰撞点坐标，优先使用
   * @returns {Object} - 返回爆炸信息，包含范围和伤害
   */
  explode(container, collisionPoint = null) {
    if (this.hasExploded || !container) {
      return null;
    }
    
    // 如果提供了碰撞点，则更新碰撞位置
    if (collisionPoint) {
      this.setCollisionPoint(collisionPoint.x, collisionPoint.y);
    }
    
    // 标记子弹状态
    this.isActive = false;
    this.hasExploded = true;
    this.isExploding = true;
    
    // 创建爆炸特效
    this.createExplosionEffect(container);
    
    // 返回爆炸信息，用于后续的范围伤害计算
    return {
      x: this.collisionPoint ? this.collisionPoint.x : this.sprite.position.x,
      y: this.collisionPoint ? this.collisionPoint.y : this.sprite.position.y,
      radius: this.explosionRadius,
      power: this.power,
      effectType: this.explosionEffect
    };
  }
  
  /**
   * 创建爆炸特效
   * @param {PIXI.Container} container - 添加爆炸特效的容器
   */
  createExplosionEffect(container) {
    // 获取爆炸配置
    const config = this.explosionConfig[this.explosionEffect] || this.explosionConfig.default;
    
    // 确定爆炸位置（优先使用碰撞点，如果没有则使用子弹当前位置）
    const explosionX = this.collisionPoint ? this.collisionPoint.x : this.sprite.position.x;
    const explosionY = this.collisionPoint ? this.collisionPoint.y : this.sprite.position.y;
    
    // 创建爆炸精灵
    const explosion = PIXI.Sprite.from(config.texture);
    explosion.anchor.set(0.5);
    explosion.position.set(0, 0); // 设置为本地坐标系原点
    explosion.scale.set(config.startScale * this.size); // 根据子弹大小缩放爆炸效果
    explosion.alpha = config.startAlpha;
    
    // 创建爆炸容器，并设置在碰撞位置
    this.explosionContainer = new PIXI.Container();
    this.explosionContainer.position.set(explosionX, explosionY);
    this.explosionContainer.addChild(explosion);
    
    // 添加到游戏容器
    container.addChild(this.explosionContainer);
    
    // 移除原子弹精灵
    if (this.sprite.parent) {
      this.sprite.parent.removeChild(this.sprite);
    }
    
    // 设置爆炸动画
    const startTime = Date.now();
    const duration = config.duration;
    
    // 使用ticker创建帧动画
    const explosionTicker = (delta) => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // 计算当前帧的缩放和透明度
      const scale = config.startScale + (config.endScale - config.startScale) * progress;
      const alpha = config.startAlpha + (config.endAlpha - config.startAlpha) * progress;
      
      // 更新爆炸特效
      explosion.scale.set(scale * this.size);
      explosion.alpha = alpha;
      
      // 动画结束
      if (progress >= 1) {
        // 移除爆炸特效
        if (this.explosionContainer && this.explosionContainer.parent) {
          this.explosionContainer.parent.removeChild(this.explosionContainer);
        }
        
        // 移除ticker
        ticker.remove(explosionTicker);
        
        // 标记爆炸完成
        this.isExploding = false;
      }
    };
    
    // 添加到ticker
    ticker.add(explosionTicker);
  }
  
  /**
   * 获取子弹的碰撞区域
   * @returns {PIXI.Rectangle} - 碰撞矩形
   */
  getBounds() {
    return this.sprite.getBounds();
  }
  
  /**
   * 获取子弹的当前位置
   * @returns {Object} - 包含x和y坐标的对象
   */
  getPosition() {
    return {
      x: this.sprite.position.x,
      y: this.sprite.position.y
    };
  }
  
  /**
   * 检查点是否在爆炸范围内
   * @param {number} x - 检查点的x坐标
   * @param {number} y - 检查点的y坐标
   * @returns {boolean} - 是否在爆炸范围内
   */
  isPointInExplosionRadius(x, y) {
    // 使用碰撞点或子弹位置作为爆炸中心
    const centerX = this.collisionPoint ? this.collisionPoint.x : this.sprite.position.x;
    const centerY = this.collisionPoint ? this.collisionPoint.y : this.sprite.position.y;
    
    const dx = x - centerX;
    const dy = y - centerY;
    const distanceSquared = dx * dx + dy * dy;
    
    return distanceSquared <= this.explosionRadius * this.explosionRadius;
  }
  
  /**
   * 将子弹添加到容器中
   * @param {PIXI.Container} container - 要添加到的容器
   */
  addToContainer(container) {
    if (container) {
      container.addChild(this.sprite);
    }
  }
  
  /**
   * 从容器中移除子弹
   */
  removeFromContainer() {
    // 移除子弹精灵
    if (this.sprite.parent) {
      this.sprite.parent.removeChild(this.sprite);
    }
    
    // 移除爆炸容器
    if (this.explosionContainer && this.explosionContainer.parent) {
      this.explosionContainer.parent.removeChild(this.explosionContainer);
    }
  }
}

export default Bullet; 
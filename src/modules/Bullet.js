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
   * @param {boolean} useChildBulletOffset - 是否使用子弹前端偏移计算
   */
  setCollisionPoint(x, y, useChildBulletOffset = false) {
    if (useChildBulletOffset) {
      // 计算子弹前端位置
      const bulletFrontOffset = this.sprite.width * 0.4; // 按子弹宽度的40%计算前端位置
      const frontX = x + this.directionX * bulletFrontOffset;
      const frontY = y + this.directionY * bulletFrontOffset;
      this.collisionPoint = { x: frontX, y: frontY };
    } else {
      this.collisionPoint = { x, y };
    }
  }
  
  /**
   * 触发子弹爆炸效果
   * @param {PIXI.Container} container - 添加爆炸效果的容器
   * @param {Object} collisionPoint - 碰撞点坐标，优先使用
   * @param {boolean} useBulletFront - 是否使用子弹前端位置
   * @returns {Object} - 返回爆炸信息，包含范围和伤害
   */
  explode(container, collisionPoint = null, useBulletFront = false) {
    if (this.hasExploded || !container) {
      return null;
    }
    
    // 如果提供了碰撞点，则更新碰撞位置
    if (collisionPoint) {
      this.setCollisionPoint(collisionPoint.x, collisionPoint.y, useBulletFront);
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
    
    // 创建爆炸容器，并设置在碰撞位置
    this.explosionContainer = new PIXI.Container();
    this.explosionContainer.position.set(explosionX, explosionY);
    
    // ---------- 撞击瞬间闪光效果 ----------
    // 创建一个亮色圆形作为撞击瞬间的闪光
    const flash = new PIXI.Graphics();
    flash.beginFill(0xFFFFFF, 0.8);
    flash.drawCircle(0, 0, this.size * 15);
    flash.endFill();
    flash.alpha = 0.7;
    flash.scale.set(0.1);
    this.explosionContainer.addChild(flash);
    
    // 闪光快速扩散然后消失的动画
    const flashDuration = 200; // 闪光持续时间，毫秒
    const flashStartTime = Date.now();
    
    const flashTicker = (delta) => {
      const elapsed = Date.now() - flashStartTime;
      const progress = Math.min(elapsed / flashDuration, 1);
      
      // 闪光迅速扩大然后迅速消失
      const scale = 0.1 + progress * 1.5;
      const alpha = 0.7 * (1 - progress * 1.2); // 先变亮一点然后变暗
      
      flash.scale.set(scale);
      flash.alpha = Math.max(0, alpha);
      
      // 动画结束时移除
      if (progress >= 1) {
        this.explosionContainer.removeChild(flash);
        ticker.remove(flashTicker);
      }
    };
    
    ticker.add(flashTicker);
    
    // ---------- 冲击波效果 ----------
    // 创建一个环形作为冲击波
    const shockwave = new PIXI.Graphics();
    shockwave.lineStyle(2, 0xFFFFFF, 0.7);
    shockwave.drawCircle(0, 0, this.size * 15);
    shockwave.alpha = 0.5;
    shockwave.scale.set(0.2);
    this.explosionContainer.addChild(shockwave);
    
    // 冲击波扩散动画
    const shockwaveDuration = 400; // 冲击波持续时间，毫秒
    const shockwaveStartTime = Date.now();
    
    const shockwaveTicker = (delta) => {
      const elapsed = Date.now() - shockwaveStartTime;
      const progress = Math.min(elapsed / shockwaveDuration, 1);
      
      // 冲击波逐渐扩大并淡出
      const scale = 0.2 + progress * 2.0;
      const alpha = 0.5 * (1 - progress);
      const lineWidth = Math.max(0.5, 2 * (1 - progress)); // 线条逐渐变细
      
      shockwave.scale.set(scale);
      shockwave.alpha = alpha;
      
      // 重新绘制线条以改变线宽
      if (progress < 0.9) { // 避免最后阶段频繁重绘
        shockwave.clear();
        shockwave.lineStyle(lineWidth, 0xFFFFFF, 0.7);
        shockwave.drawCircle(0, 0, this.size * 15);
      }
      
      // 动画结束时移除
      if (progress >= 1) {
        this.explosionContainer.removeChild(shockwave);
        ticker.remove(shockwaveTicker);
      }
    };
    
    ticker.add(shockwaveTicker);
    
    // ---------- 主爆炸效果 ----------
    // 创建爆炸精灵
    const explosion = PIXI.Sprite.from(config.texture);
    explosion.anchor.set(0.5);
    explosion.position.set(0, 0); // 设置为本地坐标系原点
    explosion.scale.set(config.startScale * this.size * 0.5); // 初始爆炸效果更小，便于过渡
    explosion.alpha = config.startAlpha * 0.7; // 初始透明度稍低
    this.explosionContainer.addChild(explosion);
    
    // 添加到游戏容器
    container.addChild(this.explosionContainer);
    
    // ---------- 子弹平滑过渡效果 ----------
    // 不立即移除子弹，而是将其移动到爆炸位置开始融合过渡
    if (this.sprite.parent) {
      // 添加子弹消失动画
      const bulletFadeDuration = config.duration * 0.3; // 子弹消失时间是爆炸总时间的30%
      const bulletStartTime = Date.now();
      
      // 计算子弹缩放方向 - 应该沿着子弹的飞行方向
      const scaleDirectionX = this.directionX;
      const scaleDirectionY = this.directionY;
      
      // 子弹消失的ticker
      const bulletFadeTicker = (delta) => {
        const elapsed = Date.now() - bulletStartTime;
        const progress = Math.min(elapsed / bulletFadeDuration, 1);
        
        // 子弹逐渐缩小并变透明，但保持原来的位置，只是缩小前端
        this.sprite.alpha = 1 - progress;
        
        // 计算缩放比例 - 使子弹看起来是从前端开始消失的
        const scaleFactor = 1 - progress * 0.8;
        
        // 当子弹完全淡出时移除
        if (progress >= 1) {
          if (this.sprite.parent) {
            this.sprite.parent.removeChild(this.sprite);
          }
          ticker.remove(bulletFadeTicker);
        }
      };
      
      // 添加到ticker
      ticker.add(bulletFadeTicker);
    }
    
    // ---------- 爆炸粒子效果 ----------
    // 根据子弹类型创建不同的粒子效果
    let particleColor;
    switch (this.explosionEffect) {
      case 'fire':
        particleColor = [0xFF4500, 0xFF8C00, 0xFFD700]; // 火焰色粒子
        break;
      case 'ice':
        particleColor = [0xADD8E6, 0x87CEEB, 0xB0E0E6]; // 冰蓝色粒子
        break;
      default:
        particleColor = [0xFFFFFF, 0xFFA500, 0xFFFF00]; // 默认白色/黄色粒子
    }
    
    // 创建6-10个粒子
    const particleCount = 6 + Math.floor(Math.random() * 5);
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = new PIXI.Graphics();
      const colorIndex = Math.floor(Math.random() * particleColor.length);
      particle.beginFill(particleColor[colorIndex], 0.8);
      
      // 随机粒子形状：圆形或小矩形
      if (Math.random() > 0.5) {
        particle.drawCircle(0, 0, 1 + Math.random() * 2);
      } else {
        const size = 1 + Math.random() * 3;
        particle.drawRect(-size/2, -size/2, size, size);
      }
      
      particle.endFill();
      
      // 随机初始位置（靠近中心点）
      particle.position.set(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5
      );
      
      // 随机速度和方向
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 2;
      particle.vx = Math.cos(angle) * speed;
      particle.vy = Math.sin(angle) * speed;
      
      // 随机旋转
      particle.rotation = Math.random() * Math.PI * 2;
      particle.rotationSpeed = (Math.random() - 0.5) * 0.2;
      
      // 存储粒子信息
      particles.push(particle);
      this.explosionContainer.addChild(particle);
    }
    
    // 粒子动画
    const particleDuration = config.duration * 0.8;
    const particleStartTime = Date.now();
    
    const particleTicker = (delta) => {
      const elapsed = Date.now() - particleStartTime;
      const progress = Math.min(elapsed / particleDuration, 1);
      
      // 更新所有粒子
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        // 移动粒子
        particle.position.x += particle.vx;
        particle.position.y += particle.vy;
        
        // 粒子受到重力影响，向下加速
        particle.vy += 0.05;
        
        // 添加旋转
        particle.rotation += particle.rotationSpeed;
        
        // 缩小粒子并降低透明度
        particle.scale.set(1 - progress * 0.8);
        particle.alpha = 1 - progress;
      }
      
      // 动画结束移除所有粒子
      if (progress >= 1) {
        for (let i = 0; i < particles.length; i++) {
          this.explosionContainer.removeChild(particles[i]);
        }
        ticker.remove(particleTicker);
      }
    };
    
    ticker.add(particleTicker);
    
    // 设置主爆炸动画
    const startTime = Date.now();
    const duration = config.duration;
    
    // 使用ticker创建帧动画
    const explosionTicker = (delta) => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // 爆炸效果延迟一点开始，使之与子弹融合效果错开
      const delayedProgress = Math.max(0, (progress - 0.1) / 0.9);
      if (delayedProgress <= 0) return;
      
      // 计算当前帧的缩放和透明度
      const scale = config.startScale + (config.endScale - config.startScale) * delayedProgress;
      const alpha = config.startAlpha + (config.endAlpha - config.startAlpha) * delayedProgress;
      
      // 更新爆炸特效
      explosion.scale.set(scale * this.size);
      explosion.alpha = alpha;
      
      // 爆炸特效在初期添加一些脉动效果
      if (delayedProgress < 0.3) {
        const pulse = 1 + Math.sin(delayedProgress * Math.PI * 5) * 0.1;
        explosion.scale.set(explosion.scale.x * pulse, explosion.scale.y * pulse);
      }
      
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
   * 获取子弹的边界盒，用于碰撞检测
   * @returns {PIXI.Rectangle} - 子弹的边界矩形
   */
  getBounds() {
    // 获取原始边界盒
    const originalBounds = this.sprite.getBounds();
    
    // 缩小碰撞检测范围，使游戏更有挑战性
    const reduction = 0.4; // 缩小40%
    const widthReduction = originalBounds.width * reduction;
    const heightReduction = originalBounds.height * reduction;
    
    return new PIXI.Rectangle(
      originalBounds.x + widthReduction / 2,
      originalBounds.y + heightReduction / 2,
      originalBounds.width - widthReduction,
      originalBounds.height - heightReduction
    );
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
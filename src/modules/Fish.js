import * as PIXI from 'pixi.js';
import { screen, ticker } from '~/core';
import { PixelateFilter, OutlineFilter } from 'pixi-filters';
const { random, PI, sin, cos, abs } = Math;

// 鱼的习性类型枚举
const FISH_BEHAVIORS = {
  NORMAL: 'normal',       // 正常游动，被击中后行为不变
  ESCAPE: 'escape',       // 被击中后会加速逃跑
  AGGRESSIVE: 'aggressive', // 被击中后会反向攻击
  ERRATIC: 'erratic'      // 被击中后会随机变向
};

class Fish {
  /**
   * 创建一个鱼类实例
   * @param {string} type - 鱼的类型/图片索引
   * @param {object} options - 鱼的配置选项
   */
  constructor(type, options = {}) {
    // 创建精灵
    this.sprite = PIXI.Sprite.from(`fish.${type}.png`);
    this.sprite.anchor.set(0.5);
    
    // 设置基础属性
    this.type = type;
    this.size = options.size || 0.5;
    this.sprite.scale.set(this.size);
    
    // 血量属性 - 将默认值和传入值都提升100%
    this.maxHealth = options.health ? options.health * 2 : 2; // 默认值从1提升到2，其他值翻倍
    this.health = this.maxHealth;
    
    // 移动属性
    this.baseSpeed = options.speed || (1 + random()) * 2;
    this.speed = this.baseSpeed;
    
    // 从边界生成的位置和方向
    if (options.spawnFromEdge === true) {
      const { position, direction } = this.getRandomEdgePosition();
      this.sprite.position.set(position.x, position.y);
      this.direction = direction;
    } else {
      // 使用传入的方向或随机方向
      this.direction = options.direction || random() * PIXI.PI_2;
      // 初始位置
      const x = options.x || random() * screen.width;
      const y = options.y || random() * screen.height;
      this.sprite.position.set(x, y);
    }
    
    this.targetDirection = this.direction; // 目标方向，用于平滑转向
    this.turnSpeed = options.turnSpeed || random() - 0.8;
    this.rotationSpeed = 0.01; // 正常旋转速度
    this.forcedRotationSpeed = 0.08; // 被击中时的快速旋转速度
    
    // 习性属性
    this.behavior = options.behavior || FISH_BEHAVIORS.NORMAL;
    
    // 状态属性
    this.hit = false;
    this.hitEffect = 0;
    this.isDead = false;
    this.isDeathAnimating = false; // 死亡动画播放中
    this.deathAnimProgress = 0; // 死亡动画进度
    this.pixelateFilter = new PixelateFilter(); // 像素化滤镜
    this.pixelateFilter.size = 1;
    
    // 创建轮廓滤镜，但初始不应用
    this.outlineFilter = new OutlineFilter(2, 0xFF0000, 0);
    // 满血状态下不应用轮廓滤镜
    this.sprite.filters = [];
  }
  
  /**
   * 从屏幕边界随机生成位置和方向
   * @returns {{position: {x: number, y: number}, direction: number}} - 位置和方向
   */
  getRandomEdgePosition() {
    // 边界偏移量，确保鱼完全在屏幕外
    const offset = 50;
    
    // 随机选择一个边界（0-上, 1-右, 2-下, 3-左）
    const edge = Math.floor(random() * 4);
    
    let x, y, direction;
    
    switch (edge) {
      case 0: // 上边界
        x = random() * screen.width;
        y = -offset;
        direction = (PI / 2) + (random() * PI / 4 - PI / 8); // 向下方向，有一定角度偏移
        break;
      case 1: // 右边界
        x = screen.width + offset;
        y = random() * screen.height;
        direction = PI + (random() * PI / 4 - PI / 8); // 向左方向，有一定角度偏移
        break;
      case 2: // 下边界
        x = random() * screen.width;
        y = screen.height + offset;
        direction = (PI * 3 / 2) + (random() * PI / 4 - PI / 8); // 向上方向，有一定角度偏移
        break;
      case 3: // 左边界
        x = -offset;
        y = random() * screen.height;
        direction = 0 + (random() * PI / 4 - PI / 8); // 向右方向，有一定角度偏移
        break;
    }
    
    return {
      position: { x, y },
      direction: direction
    };
  }
  
  /**
   * 更新鱼的位置和状态
   * @param {number} delta - 帧时间差
   * @param {object} bound - 屏幕边界
   */
  update(delta, bound) {
    // 如果正在播放死亡动画
    if (this.isDeathAnimating) {
      this.updateDeathAnimation();
      return;
    }
    
    if (this.isDead) return;
    
    // 处理被击中状态
    if (this.hit) {
      this.hitEffect += 1;
      
      // 闪烁效果
      this.sprite.alpha = this.hitEffect % 10 < 5 ? 0.5 : 1;
      
      // 根据习性调整行为
      this.handleHitBehavior();
      
      // 特效持续30帧后恢复正常
      if (this.hitEffect > 30) {
        this.hit = false;
        this.hitEffect = 0;
        this.sprite.alpha = 1;
        
        // 恢复正常速度（如果之前有加速）
        if (this.behavior === FISH_BEHAVIORS.ESCAPE) {
          this.speed = this.baseSpeed;
        }
      }
    }
    
    // 平滑旋转到目标方向
    this.smoothRotation();
    
    // 更新位置
    this.sprite.x -= cos(this.direction) * this.speed;
    this.sprite.y -= sin(this.direction) * this.speed;
    
    // 边界检查
    if (bound) {
      this.sprite.x < bound.left ? this.sprite.x = bound.right :
      this.sprite.x > bound.right ? this.sprite.x = bound.left : 0;

      this.sprite.y < bound.top ? this.sprite.y = bound.bottom :
      this.sprite.y > bound.bottom ? this.sprite.y = bound.top : 0;
    }
  }
  
  /**
   * 平滑旋转到目标方向
   */
  smoothRotation() {
    // 如果当前方向与目标方向相同，使用普通旋转
    if (this.direction === this.targetDirection) {
      this.direction += this.turnSpeed * this.rotationSpeed;
      this.direction %= PIXI.PI_2;
      this.sprite.rotation = this.direction;
      return;
    }
    
    // 计算最短角度差
    let angleDiff = this.targetDirection - this.direction;
    
    // 处理角度环绕情况
    if (angleDiff > PI) angleDiff -= PIXI.PI_2;
    if (angleDiff < -PI) angleDiff += PIXI.PI_2;
    
    // 平滑旋转
    const rotationAmount = angleDiff > 0 ? 
      Math.min(this.forcedRotationSpeed, angleDiff) : 
      Math.max(-this.forcedRotationSpeed, angleDiff);
    
    this.direction += rotationAmount;
    this.direction %= PIXI.PI_2;
    this.sprite.rotation = this.direction;
    
    // 如果接近目标方向，直接设为目标方向
    if (abs(angleDiff) < this.forcedRotationSpeed) {
      this.direction = this.targetDirection;
    }
  }
  
  /**
   * 处理被击中后的行为
   */
  handleHitBehavior() {
    switch (this.behavior) {
      case FISH_BEHAVIORS.ESCAPE:
        // 加速逃跑
        this.speed = this.baseSpeed * 2;
        break;
        
      case FISH_BEHAVIORS.AGGRESSIVE:
        // 反向攻击（转180度）
        if (this.hitEffect === 1) {
          this.targetDirection = (this.direction + PI) % PIXI.PI_2;
        }
        break;
        
      case FISH_BEHAVIORS.ERRATIC:
        // 随机变向
        if (this.hitEffect === 1) {
          this.targetDirection = random() * PIXI.PI_2;
          this.turnSpeed = (random() - 0.5) * 2;
        }
        break;
        
      case FISH_BEHAVIORS.NORMAL:
      default:
        // 正常行为，不做特殊处理
        break;
    }
  }
  
  /**
   * 处理鱼受到伤害
   * @param {number} damage - 伤害值
   * @returns {boolean} - 是否死亡
   */
  takeDamage(damage = 1) {
    this.health -= damage;
    this.hit = true;
    
    // 计算血量比例
    const healthRatio = 1 - this.health / this.maxHealth;
    
    // 更新轮廓滤镜
    this.outlineFilter.alpha = healthRatio;
    
    // 确保滤镜被应用
    if (healthRatio > 0 && !this.sprite.filters?.includes(this.outlineFilter)) {
      this.sprite.filters = [this.outlineFilter];
    }
    
    // 检查是否死亡
    if (this.health <= 0) {
      this.isDead = true;
      this.startDeathAnimation();
      return true;
    }
    
    return false;
  }
  
  /**
   * 开始死亡动画
   */
  startDeathAnimation() {
    this.isDeathAnimating = true;
    this.deathAnimProgress = 0;
    
    // 添加像素化滤镜
    this.sprite.filters = [this.pixelateFilter];
    
    // 创建粒子爆炸效果
    this.createDeathParticles();
  }
  
  /**
   * 创建死亡粒子效果
   */
  createDeathParticles() {
    // 创建粒子容器
    this.particles = [];
    this.particleContainer = new PIXI.Container();
    this.particleContainer.position.set(this.sprite.x, this.sprite.y);
    
    // 获取鱼的纹理
    const fishTexture = this.sprite.texture;
    
    // 创建粒子数量 (根据鱼的大小)
    const particleCount = Math.floor(20 * this.size);
    
    for (let i = 0; i < particleCount; i++) {
      // 在鱼的范围内创建粒子
      const particle = new PIXI.Sprite(fishTexture);
      particle.anchor.set(0.5);
      particle.scale.set(this.size * 0.2); // 粒子比鱼小
      
      // 随机初始位置 (相对于鱼的中心)
      const angle = random() * PIXI.PI_2;
      const distance = random() * this.sprite.width * 0.2;
      particle.x = cos(angle) * distance;
      particle.y = sin(angle) * distance;
      
      // 随机运动方向和速度
      particle.vx = (random() - 0.5) * 2;
      particle.vy = (random() - 0.5) * 2;
      particle.rotation = random() * PIXI.PI_2;
      particle.rotationSpeed = (random() - 0.5) * 0.2;
      particle.alpha = 1;
      particle.fadeSpeed = 0.01 + random() * 0.03;
      
      this.particles.push(particle);
      this.particleContainer.addChild(particle);
    }
    
    // 将粒子容器添加到当前容器上级
    if (this.sprite.parent) {
      this.sprite.parent.addChild(this.particleContainer);
    }
  }
  
  /**
   * 更新死亡动画
   */
  updateDeathAnimation() {
    if (!this.isDeathAnimating) return;
    
    this.deathAnimProgress += 0.02;
    
    // 更新像素化效果
    this.pixelateFilter.size = 1 + this.deathAnimProgress * 20;
    
    // 缩小并淡出
    this.sprite.scale.set(this.size * (1 - this.deathAnimProgress * 0.5));
    this.sprite.alpha = 1 - this.deathAnimProgress;
    
    // 移除轮廓滤镜，避免干扰死亡动画效果
    this.sprite.filters = [this.pixelateFilter];
    
    // 更新粒子效果
    if (this.particles) {
      for (const particle of this.particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.alpha -= particle.fadeSpeed;
        
        // 让粒子逐渐变小
        particle.scale.x *= 0.97;
        particle.scale.y *= 0.97;
      }
    }
    
    // 动画结束
    if (this.deathAnimProgress >= 1) {
      this.isDeathAnimating = false;
      this.sprite.alpha = 0;
      
      // 移除粒子容器
      if (this.particleContainer && this.particleContainer.parent) {
        this.particleContainer.parent.removeChild(this.particleContainer);
      }
      
      this.onDeathAnimationComplete();
    }
  }
  
  /**
   * 死亡动画完成后的回调
   */
  onDeathAnimationComplete() {
    // 这个方法会在游戏场景中被重写
    // 用于通知游戏场景动画已完成，可以移除鱼对象了
  }
  
  /**
   * 获取碰撞区域
   * @returns {PIXI.Rectangle} - 碰撞矩形
   */
  getBounds() {
    // 获取原始边界盒
    const originalBounds = this.sprite.getBounds();
    
    // 缩小碰撞检测范围，使游戏更有挑战性
    const reduction = 0.3; // 缩小30%
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
   * 获取分值（基于鱼的大小和血量）
   * @returns {number} - 分值
   */
  getScore() {
    return Math.round(this.size * 10 * this.maxHealth);
  }
}

// 导出鱼类和习性枚举
export { Fish, FISH_BEHAVIORS }; 
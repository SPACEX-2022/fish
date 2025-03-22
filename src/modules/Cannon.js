import * as PIXI from 'pixi.js';
import Bullet from './Bullet';

/**
 * 炮台类
 * 负责发射子弹和处理炮台相关逻辑
 */
class Cannon {
  /**
   * 创建一个炮台实例
   * @param {Object} options - 配置选项
   * @param {string} options.texture - 炮台纹理路径
   * @param {number} options.x - 炮台x坐标位置
   * @param {number} options.y - 炮台y坐标位置
   * @param {number} options.scale - 炮台缩放比例
   * @param {number} options.fireRate - 射速(发射间隔，越小射速越快)，单位：毫秒
   * @param {number} options.burstCount - 连发数量
   * @param {number} options.burstSpacing - 连发间隔，单位：毫秒
   * @param {string} options.bulletType - 子弹类型
   * @param {string} options.id - 炮台ID，用于在商店中识别
   */
  constructor(options = {}) {
    // 默认值
    const {
      texture = 'assets/images/battery.png',
      x = 0,
      y = 0,
      scale = 1,
      fireRate = 500, // 每500毫秒可发射一次
      burstCount = 1, // 默认单发
      burstSpacing = 100, // 连发间隔
      bulletType = 'default',
      id = 'default'
    } = options;
    
    // 创建精灵
    this.sprite = PIXI.Sprite.from(texture);
    this.sprite.anchor.set(0.5, 0.8); // 底部偏上作为锚点，便于旋转
    this.sprite.position.set(x, y);
    this.sprite.scale.set(scale);
    
    // 射击相关属性
    this.fireRate = fireRate;
    this.burstCount = burstCount;
    this.burstSpacing = burstSpacing;
    this.bulletType = bulletType;
    this.lastFireTime = 0;
    this.isFiring = false;
    this.currentBurst = 0;
    this.burstInterval = null;
    
    // 商店相关属性
    this.id = id;
    this.name = options.name || '标准炮台';
    this.price = options.price || 0;
    this.unlocked = options.unlocked || false;
    this.power = options.power || 1; // 火力/伤害倍数
    
    // 子弹配置
    this.bulletConfig = options.bulletConfig || {};
  }
  
  /**
   * 更新炮台位置
   * @param {number} x - x坐标
   * @param {number} y - y坐标
   */
  updatePosition(x, y) {
    this.sprite.position.set(x, y);
  }
  
  /**
   * 旋转炮台朝向目标位置
   * @param {number} targetX - 目标x坐标
   * @param {number} targetY - 目标y坐标
   */
  rotateToTarget(targetX, targetY) {
    // 计算点击位置与炮台位置的角度
    const dx = targetX - this.sprite.position.x;
    const dy = targetY - this.sprite.position.y;
    const angle = Math.atan2(dy, dx);
    
    // 设置炮台旋转角度（PixiJS中的旋转是顺时针的，所以需要正角度）
    this.sprite.rotation = angle + Math.PI / 2; // 加90度是因为炮台图片默认朝上
  }
  
  /**
   * 计算子弹发射位置（炮口位置）
   * @returns {Object} 包含x和y坐标的对象
   */
  getBulletStartPosition() {
    const rotation = this.sprite.rotation - Math.PI / 2; // 转回实际角度
    const bulletOffsetLength = this.sprite.height / 0.8; // 炮台顶端到炮台中心的距离
    
    return {
      x: this.sprite.position.x + Math.cos(rotation) * bulletOffsetLength,
      y: this.sprite.position.y + Math.sin(rotation) * bulletOffsetLength,
      rotation: this.sprite.rotation
    };
  }
  
  /**
   * 判断当前是否可以发射
   * @returns {boolean} 是否可以发射
   */
  canFire() {
    const now = Date.now();
    return now - this.lastFireTime >= this.fireRate && !this.isFiring;
  }
  
  /**
   * 发射子弹序列
   * @param {number} targetX - 目标x坐标
   * @param {number} targetY - 目标y坐标
   * @param {PIXI.Container} container - 添加子弹的容器
   * @returns {Array} - 返回创建的子弹数组
   */
  fire(targetX, targetY, container) {
    if (!this.canFire() || !container) {
      return [];
    }
    
    // 更新上次发射时间
    this.lastFireTime = Date.now();
    
    // 旋转炮台朝向目标
    this.rotateToTarget(targetX, targetY);
    
    // 标记正在发射中
    this.isFiring = true;
    this.currentBurst = 0;
    
    const bullets = [];
    
    // 发射第一发子弹
    const firstBullet = this.fireSingleBullet(container);
    if (firstBullet) bullets.push(firstBullet);
    this.currentBurst++;
    
    // 如果是连发，设置定时器
    if (this.burstCount > 1) {
      // 清除可能存在的旧定时器
      if (this.burstInterval) {
        clearInterval(this.burstInterval);
      }
      
      // 设置新的连发定时器
      this.burstInterval = setInterval(() => {
        // 发射下一发子弹
        const bullet = this.fireSingleBullet(container);
        if (bullet) bullets.push(bullet);
        
        this.currentBurst++;
        
        // 如果连发完成，清除定时器
        if (this.currentBurst >= this.burstCount) {
          clearInterval(this.burstInterval);
          this.burstInterval = null;
          this.isFiring = false;
        }
      }, this.burstSpacing);
    } else {
      // 单发模式，直接标记发射完成
      this.isFiring = false;
    }
    
    return bullets;
  }
  
  /**
   * 发射单个子弹
   * @param {PIXI.Container} container - 添加子弹的容器
   * @returns {Bullet} - 返回创建的子弹
   */
  fireSingleBullet(container) {
    // 获取炮口位置
    const bulletPos = this.getBulletStartPosition();
    
    // 设置子弹基础配置
    const bulletConfig = {
      x: bulletPos.x,
      y: bulletPos.y,
      rotation: bulletPos.rotation,
      type: this.bulletType,
      power: this.power
    };
    
    // 确保子弹配置中包含爆炸特效类型
    // 如果没有显式指定子弹爆炸特效，则根据子弹类型设置默认值
    if (this.bulletConfig) {
      Object.assign(bulletConfig, this.bulletConfig);
      
      // 确保子弹类型与爆炸特效类型匹配
      if (!bulletConfig.explosionEffect) {
        // 根据子弹类型设置对应的爆炸特效
        switch (this.bulletType) {
          case 'fire':
            bulletConfig.explosionEffect = 'fire';
            break;
          case 'ice':
            bulletConfig.explosionEffect = 'ice';
            break;
          default:
            bulletConfig.explosionEffect = 'default';
        }
      }
    }
    
    // 创建子弹
    const bullet = new Bullet(bulletConfig);
    
    // 添加到容器
    bullet.addToContainer(container);
    
    return bullet;
  }
  
  /**
   * 将炮台添加到容器中
   * @param {PIXI.Container} container - 要添加到的容器
   */
  addToContainer(container) {
    if (container) {
      container.addChild(this.sprite);
    }
  }
  
  /**
   * 从容器中移除炮台
   */
  removeFromContainer() {
    if (this.sprite.parent) {
      this.sprite.parent.removeChild(this.sprite);
    }
  }
  
  /**
   * 更新炮台属性
   * @param {Object} props - 要更新的属性
   */
  updateProps(props) {
    Object.assign(this, props);
    
    // 如果更新了纹理
    if (props.texture) {
      this.sprite.texture = PIXI.Texture.from(props.texture);
    }
    
    // 如果更新了缩放
    if (props.scale) {
      this.sprite.scale.set(props.scale);
    }
  }
}

export default Cannon; 
import * as PIXI from 'pixi.js';
import { stage, screen, ticker } from '~/core';

class Player {
  constructor(app) {
    this.app = app;
    this.bullets = [];
    
    // 玩家默认位置，通常在底部中央
    this.position = {
      x: screen.width / 2,
      y: screen.height - 100
    };
    
    // 初始化炮台和底座
    this.initBattery();
  }
  
  /**
   * 初始化炮台和底座
   */
  initBattery() {
    // 创建底座精灵
    this.batteryBase = PIXI.Sprite.from('assets/images/batteryBase.png');
    this.batteryBase.anchor.set(0.5, 0.5);
    this.batteryBase.position.set(this.position.x, this.position.y);
    
    // 创建炮台精灵
    this.battery = PIXI.Sprite.from('assets/images/battery.png');
    this.battery.anchor.set(0.5, 0.5);
    this.battery.position.set(this.position.x, this.position.y - 10); // 稍微上移一点，放在底座上方
    
    // 将炮台和底座添加到舞台
    stage.addChild(this.batteryBase);
    stage.addChild(this.battery);
  }
  
  /**
   * 旋转炮台朝向目标位置
   * @param {number} targetX - 目标x坐标
   * @param {number} targetY - 目标y坐标
   */
  rotateBattery(targetX, targetY) {
    // 计算点击位置与炮台位置的角度
    const dx = targetX - this.battery.position.x;
    const dy = targetY - this.battery.position.y;
    const angle = Math.atan2(dy, dx);
    
    // 设置炮台旋转角度（PixiJS中的旋转是顺时针的，所以需要正角度）
    this.battery.rotation = angle + Math.PI / 2; // 加90度是因为炮台图片默认朝上
  }

  /**
   * 发射子弹方法
   * @param {number} targetX - 目标x坐标
   * @param {number} targetY - 目标y坐标
   * @returns {PIXI.Sprite} - 返回创建的子弹精灵
   */
  shootBullet(targetX, targetY) {
    console.log('子弹已发射');
    
    try {
      // 旋转炮台朝向目标
      this.rotateBattery(targetX, targetY);
      
      // 计算子弹初始位置（炮台顶端）
      const rotation = this.battery.rotation - Math.PI / 2; // 转回实际角度
      const bulletOffsetLength = 40; // 炮台顶端到炮台中心的距离
      const bulletStartX = this.battery.position.x + Math.cos(rotation) * bulletOffsetLength;
      const bulletStartY = this.battery.position.y + Math.sin(rotation) * bulletOffsetLength;
      
      // 创建子弹精灵
      const bullet = PIXI.Sprite.from('assets/images/bullet.png');
      
      // 设置子弹锚点为中心点
      bullet.anchor.set(0.5);
      
      // 设置子弹初始位置
      bullet.position.set(bulletStartX, bulletStartY);
      
      // 设置子弹旋转角度与炮台一致
      bullet.rotation = this.battery.rotation;
      
      // 保存子弹移动方向
      bullet.directionX = Math.cos(rotation);
      bullet.directionY = Math.sin(rotation);
      bullet.speed = 10; // 子弹速度
      
      // 添加到舞台
      stage.addChild(bullet);
      
      // 添加到子弹数组，用于后续管理
      this.bullets.push(bullet);
      
      return bullet;
    } catch (error) {
      console.error('发射子弹时出错:', error);
      return null;
    }
  }
  
  /**
   * 显示爆炸特效
   * @param {number} x - 爆炸x坐标
   * @param {number} y - 爆炸y坐标
   */
  showExplosion(x, y) {
    const explosion = PIXI.Sprite.from('assets/images/boomEffect.png');
    explosion.anchor.set(0.5);
    explosion.position.set(x, y);
    
    // 添加到舞台
    stage.addChild(explosion);
    
    // 设置爆炸特效动画
    let alpha = 1;
    let scale = 0.5;
    
    // 使用ticker创建帧动画
    const explosionTicker = (delta) => {
      alpha -= 0.05;
      scale += 0.05;
      
      explosion.alpha = alpha;
      explosion.scale.set(scale);
      
      if (alpha <= 0) {
        stage.removeChild(explosion);
        ticker.remove(explosionTicker);
      }
    };
    
    ticker.add(explosionTicker);
  }
  
  /**
   * 更新子弹位置
   * @param {number} delta - 每帧时间差
   */
  updateBullets(delta) {
    // 更新所有子弹的位置
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      const bullet = this.bullets[i];
      
      // 移动子弹
      bullet.position.x += bullet.directionX * bullet.speed;
      bullet.position.y += bullet.directionY * bullet.speed;
      
      // 检查子弹是否超出屏幕
      if (
        bullet.position.x < -50 || 
        bullet.position.x > screen.width + 50 || 
        bullet.position.y < -50 || 
        bullet.position.y > screen.height + 50
      ) {
        // 移除子弹
        stage.removeChild(bullet);
        this.bullets.splice(i, 1);
      }
    }
  }
}

export default Player; 
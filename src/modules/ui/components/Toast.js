import * as PIXI from 'pixi.js';
import { screen, ticker } from '~/core';

/**
 * 通用Toast提示组件
 * 提供一个简单的弹出提示，支持自动消失和不同样式
 */
class Toast extends PIXI.Container {
  /**
   * Toast实例
   * @type {Toast}
   * @private
   */
  static _instance = null;
  
  /**
   * 获取Toast单例
   * @returns {Toast} Toast实例
   */
  static getInstance() {
    if (!Toast._instance) {
      Toast._instance = new Toast();
    }
    return Toast._instance;
  }
  
  /**
   * 显示一个Toast提示
   * @param {Object} options - 配置选项
   * @param {string} options.text - 提示文本
   * @param {string} [options.type='info'] - 提示类型，支持 'info', 'success', 'error', 'warning'
   * @param {number} [options.duration=2000] - 显示时长(毫秒)
   * @param {PIXI.Container} options.parent - 父容器
   */
  static show(options) {
    const toast = Toast.getInstance();
    toast.showToast(options);
    return toast;
  }
  
  /**
   * 创建一个Toast提示组件
   * @private
   */
  constructor() {
    super();
    this.visible = false;
    this.toastContainer = new PIXI.Container();
    this.addChild(this.toastContainer);
    
    // 颜色映射
    this.typeColors = {
      info: 0x3498db,
      success: 0x2ecc71,
      error: 0xe74c3c,
      warning: 0xf39c12
    };
    
    // 当前的动画ticker
    this.currentTicker = null;
  }
  
  /**
   * 显示Toast提示
   * @param {Object} options - 配置选项
   */
  showToast(options) {
    const {
      text = '',
      type = 'info',
      duration = 2000,
      parent
    } = options;
    
    // 清除可能存在的旧Toast
    this.clear();
    
    // 如果已经有父容器，先移除
    if (this.parent) {
      this.parent.removeChild(this);
    }
    
    // 添加到新的父容器
    if (parent) {
      parent.addChild(this);
      this.parent = parent;
    }
    
    // 创建背景
    const bgColor = this.typeColors[type] || this.typeColors.info;
    const bg = new PIXI.Graphics();
    bg.beginFill(bgColor, 0.9);
    bg.drawRoundedRect(0, 0, 10, 10, 5); // 先画一个小的，后面会调整大小
    bg.endFill();
    
    // 创建文本
    const textSprite = new PIXI.Text(text, {
      fontFamily: 'Microsoft YaHei, PingFang SC, sans-serif',
      fontSize: 20,
      fill: 0xFFFFFF,
      align: 'center',
      fontWeight: 'bold',
      wordWrap: true,
      wordWrapWidth: screen.width * 0.7
    });
    textSprite.anchor.set(0.5);
    
    // 调整背景大小以适应文本
    const padding = 20;
    const bgWidth = textSprite.width + padding * 2;
    const bgHeight = textSprite.height + padding * 2;
    
    bg.clear();
    bg.beginFill(bgColor, 0.9);
    bg.drawRoundedRect(-bgWidth / 2, -bgHeight / 2, bgWidth, bgHeight, 10);
    bg.endFill();
    
    // 添加到容器
    this.toastContainer.removeChildren();
    this.toastContainer.addChild(bg, textSprite);
    
    // 设置位置
    this.toastContainer.position.set(screen.width / 2, screen.height * 0.2);
    this.toastContainer.alpha = 0;
    this.toastContainer.scale.set(0.8);
    
    // 显示
    this.visible = true;
    
    // 创建动画
    this.animate(duration);
  }
  
  /**
   * 动画显示和隐藏
   * @param {number} duration - 显示时长
   * @private
   */
  animate(duration) {
    const fadeInTime = 200;
    const stayTime = duration - 400;
    const fadeOutTime = 200;
    
    let stage = 'fadeIn';
    let startTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      
      if (stage === 'fadeIn') {
        // 淡入阶段
        const progress = Math.min(elapsedTime / fadeInTime, 1);
        this.toastContainer.alpha = progress;
        this.toastContainer.scale.set(0.8 + progress * 0.2);
        
        if (progress >= 1) {
          stage = 'stay';
          startTime = now;
        }
      } else if (stage === 'stay') {
        // 停留阶段
        if (elapsedTime >= stayTime) {
          stage = 'fadeOut';
          startTime = now;
        }
      } else if (stage === 'fadeOut') {
        // 淡出阶段
        const progress = Math.min(elapsedTime / fadeOutTime, 1);
        this.toastContainer.alpha = 1 - progress;
        this.toastContainer.scale.set(1 - progress * 0.2);
        
        if (progress >= 1) {
          this.clear();
          return;
        }
      }
      
      this.currentTicker = requestAnimationFrame(animate);
    };
    
    // 开始动画
    this.currentTicker = requestAnimationFrame(animate);
  }
  
  /**
   * 清除当前Toast
   */
  clear() {
    if (this.currentTicker) {
      cancelAnimationFrame(this.currentTicker);
      this.currentTicker = null;
    }
    
    this.visible = false;
    this.toastContainer.alpha = 0;
    
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }
}

export default Toast; 
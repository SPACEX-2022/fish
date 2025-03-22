import * as PIXI from 'pixi.js';
import { screen, ticker } from '~/core';
import { Layout } from '../lib/ui/Layout';

/**
 * HUD(Heads-Up Display)类
 * 负责显示游戏中的用户界面元素，如分数、连击数等
 */
class HUD {
  /**
   * 创建一个HUD实例
   * @param {Object} options - 配置选项
   */
  constructor(options = {}) {
    // 创建主容器，并设置为可排序
    this.container = new PIXI.Container();
    this.container.sortableChildren = true;
    this.container.zIndex = 100; // 确保HUD显示在最上层
    
    // 跟踪显示的数据
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.comboTimer = 0;
    this.comboTimeout = options.comboTimeout || 3000; // 连击超时时间(毫秒)
    
    // 存储UI元素
    this.elements = {};
    
    // 初始化基本UI元素
    this.initScoreDisplay();
    this.initComboDisplay();
    
    // 可由外部调用的更新回调，可以在这里添加更多更新逻辑
    this.updateCallbacks = {};
    
    // 注册到ticker以便更新连击计时器
    ticker.add(this.update.bind(this));
  }
  
  /**
   * 初始化分数显示
   */
  initScoreDisplay() {
    // 创建分数标签
    const scoreLabel = new PIXI.Text('分数:', {
      fontFamily: 'Arial',
      fontSize: 24,
      fill: 0xFFFFFF,
      fontWeight: 'bold',
      stroke: 0x000000,
      strokeThickness: 4,
      dropShadow: true,
      dropShadowColor: 0x000000,
      dropShadowBlur: 4,
      dropShadowDistance: 2
    });
    
    // 设置标签位置
    scoreLabel.position.set(20, 20);
    this.container.addChild(scoreLabel);
    this.elements.scoreLabel = scoreLabel;
    
    // 创建分数值容器
    const scoreValueContainer = new PIXI.Container();
    scoreValueContainer.position.set(120, 20);
    this.container.addChild(scoreValueContainer);
    this.elements.scoreValueContainer = scoreValueContainer;
    
    // 初始显示分数0
    this.updateScoreSprites(0);
  }
  
  /**
   * 使用精灵图更新分数显示
   * @param {number} score - 要显示的分数
   */
  updateScoreSprites(score) {
    const scoreValueContainer = this.elements.scoreValueContainer;
    if (!scoreValueContainer) return;
    
    // 清空当前数字精灵
    scoreValueContainer.removeChildren();
    
    // 将分数转换为字符串
    const scoreStr = score.toString();
    
    // 为每个数字创建精灵
    for (let i = 0; i < scoreStr.length; i++) {
      const digit = scoreStr[i];
      // 直接使用预加载的数字图片
      const digitSprite = PIXI.Sprite.from(`num${digit}.png`);
      
      // 设置数字位置
      digitSprite.position.x = i * (digitSprite.width + 2); // 数字之间留出2像素间距
      
      // 添加到容器
      scoreValueContainer.addChild(digitSprite);
    }
  }
  
  /**
   * 初始化连击显示
   */
  initComboDisplay() {
    // 创建连击容器 - 初始时隐藏
    const comboContainer = new PIXI.Container();
    comboContainer.visible = false;
    
    // 创建连击文本
    const comboText = new PIXI.Text('连击 x1', {
      fontFamily: 'Arial',
      fontSize: 28,
      fill: 0xFF8C00,
      fontWeight: 'bold',
      stroke: 0x000000,
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: 0x000000,
      dropShadowBlur: 5,
      dropShadowDistance: 2
    });
    
    // 设置位置 - 屏幕中央偏上
    comboText.anchor.set(0.5);
    comboText.position.set(screen.width / 2, 80);
    
    // 添加到连击容器
    comboContainer.addChild(comboText);
    
    // 添加到主容器
    this.container.addChild(comboContainer);
    
    // 保存引用
    this.elements.comboContainer = comboContainer;
    this.elements.comboText = comboText;
  }
  
  /**
   * 更新HUD
   * @param {number} delta - 帧时间差
   */
  update(delta) {
    // 更新连击计时器
    if (this.combo > 0) {
      this.comboTimer -= ticker.deltaMS;
      if (this.comboTimer <= 0) {
        // 连击超时，重置连击
        this.resetCombo();
      }
    }
    
    // 执行注册的更新回调
    Object.values(this.updateCallbacks).forEach(callback => {
      if (typeof callback === 'function') {
        callback(delta);
      }
    });
  }
  
  /**
   * 显示HUD
   * @param {PIXI.Container} container - 要添加HUD的容器
   */
  show(container) {
    if (container) {
      container.addChild(this.container);
    }
  }
  
  /**
   * 隐藏HUD
   */
  hide() {
    if (this.container.parent) {
      this.container.parent.removeChild(this.container);
    }
  }
  
  /**
   * 更新分数显示
   * @param {number} score - 新的分数
   * @param {boolean} animate - 是否以动画形式更新
   */
  updateScore(score, animate = true) {
    // 保存旧分数用于动画
    const oldScore = this.score;
    // 更新内部分数值
    this.score = score;
    
    if (animate) {
      // 创建一个一次性的ticker来动画显示分数变化
      let animationProgress = 0;
      const animationDuration = 500; // 毫秒
      const animationStartTime = Date.now();
      
      const scoreTicker = (delta) => {
        const elapsed = Date.now() - animationStartTime;
        animationProgress = Math.min(elapsed / animationDuration, 1);
        
        // 使用缓动函数使动画更平滑
        const easeOutProgress = 1 - Math.pow(1 - animationProgress, 3);
        
        // 计算当前应显示的分数
        const currentScore = Math.round(oldScore + (score - oldScore) * easeOutProgress);
        
        // 更新显示
        this.updateScoreSprites(currentScore);
        
        // 动画结束时移除ticker
        if (animationProgress >= 1) {
          ticker.remove(scoreTicker);
        }
      };
      
      // 添加到ticker
      ticker.add(scoreTicker);
    } else {
      // 直接更新不带动画
      this.updateScoreSprites(score);
    }
  }
  
  /**
   * 增加连击数
   */
  incrementCombo() {
    // 增加连击数
    this.combo++;
    
    // 更新最大连击记录
    if (this.combo > this.maxCombo) {
      this.maxCombo = this.combo;
    }
    
    // 重置连击计时器
    this.comboTimer = this.comboTimeout;
    
    // 更新显示
    if (this.elements.comboText) {
      this.elements.comboText.text = `连击 x${this.combo}`;
    }
    
    // 显示连击容器
    if (this.elements.comboContainer && !this.elements.comboContainer.visible) {
      this.elements.comboContainer.visible = true;
      
      // 添加一个缩放动画效果
      this.elements.comboText.scale.set(0.5);
      
      // 动画到正常大小
      const startTime = Date.now();
      const duration = 300; // 毫秒
      
      const comboAnimTicker = (delta) => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 弹性缩放效果
        const scale = 0.5 + 0.5 * (1 + Math.sin(progress * Math.PI - Math.PI/2));
        this.elements.comboText.scale.set(scale);
        
        // 动画结束
        if (progress >= 1) {
          this.elements.comboText.scale.set(1);
          ticker.remove(comboAnimTicker);
        }
      };
      
      ticker.add(comboAnimTicker);
    } else if (this.elements.comboContainer && this.combo > 1) {
      // 连击数增加时的动画效果
      const startScale = 1.2;
      this.elements.comboText.scale.set(startScale);
      
      const startTime = Date.now();
      const duration = 200; // 毫秒
      
      const pulseAnimTicker = (delta) => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 从大变小的动画
        const scale = startScale - (startScale - 1) * progress;
        this.elements.comboText.scale.set(scale);
        
        // 动画结束
        if (progress >= 1) {
          this.elements.comboText.scale.set(1);
          ticker.remove(pulseAnimTicker);
        }
      };
      
      ticker.add(pulseAnimTicker);
    }
  }
  
  /**
   * 重置连击数
   */
  resetCombo() {
    if (this.combo === 0) return;
    
    this.combo = 0;
    this.comboTimer = 0;
    
    // 隐藏连击显示
    if (this.elements.comboContainer) {
      // 淡出动画
      const startTime = Date.now();
      const duration = 500; // 毫秒
      
      const fadeOutTicker = (delta) => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 淡出透明度
        this.elements.comboContainer.alpha = 1 - progress;
        
        // 动画结束
        if (progress >= 1) {
          this.elements.comboContainer.visible = false;
          this.elements.comboContainer.alpha = 1; // 重置透明度
          ticker.remove(fadeOutTicker);
        }
      };
      
      ticker.add(fadeOutTicker);
    }
  }
  
  /**
   * 注册自定义更新回调
   * @param {string} key - 回调的唯一标识符
   * @param {Function} callback - 更新回调函数
   */
  registerUpdateCallback(key, callback) {
    if (typeof callback === 'function') {
      this.updateCallbacks[key] = callback;
    }
  }
  
  /**
   * 移除自定义更新回调
   * @param {string} key - 回调的唯一标识符
   */
  unregisterUpdateCallback(key) {
    delete this.updateCallbacks[key];
  }
  
  /**
   * 添加自定义UI元素
   * @param {string} key - 元素的唯一标识符
   * @param {PIXI.DisplayObject} element - 要添加的UI元素
   */
  addElement(key, element) {
    if (element instanceof PIXI.DisplayObject) {
      this.elements[key] = element;
      this.container.addChild(element);
    }
  }
  
  /**
   * 获取自定义UI元素
   * @param {string} key - 元素的唯一标识符
   * @returns {PIXI.DisplayObject|null} - UI元素或null
   */
  getElement(key) {
    return this.elements[key] || null;
  }
  
  /**
   * 移除自定义UI元素
   * @param {string} key - 元素的唯一标识符
   */
  removeElement(key) {
    if (this.elements[key]) {
      this.container.removeChild(this.elements[key]);
      delete this.elements[key];
    }
  }
  
  /**
   * 获取当前分数
   * @returns {number} - 当前分数
   */
  getScore() {
    return this.score;
  }
  
  /**
   * 获取当前连击数
   * @returns {number} - 当前连击数
   */
  getCombo() {
    return this.combo;
  }
  
  /**
   * 获取最高连击数
   * @returns {number} - 最高连击数
   */
  getMaxCombo() {
    return this.maxCombo;
  }
}

export default HUD; 
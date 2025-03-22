import * as PIXI from 'pixi.js';
import { animate } from 'popmotion';
import { Layout } from '../lib/ui/Layout';
import { screen, ticker } from '~/core';
import { KawaseBlurFilter } from 'pixi-filters';
/**
 * 游戏开始界面类
 * 负责显示游戏logo和按钮，以及处理相关交互
 */
class GameStartUI {
  /**
   * 创建一个游戏开始界面实例
   * @param {Object} options - 配置选项
   * @param {Function} options.onSinglePlayerStart - 单人模式开始的回调函数
   * @param {Function} options.onMultiPlayerStart - 多人模式开始的回调函数
   */
  constructor(options = {}) {
    // 回调函数
    this.onSinglePlayerStart = options.onSinglePlayerStart || (() => { console.log('未提供单人模式回调'); });
    this.onMultiPlayerStart = options.onMultiPlayerStart || (() => { console.log('未提供多人模式回调'); });
    
    console.log('GameStartUI初始化，单人模式回调类型:', typeof this.onSinglePlayerStart);
    
    // 创建容器
    this.container = new PIXI.Container();
    this.container.sortableChildren = true;
    
    // 创建logo
    this.logo = PIXI.Sprite.from('assets/images/gameLogo.png');
    this.logo.scale.set(1.2);
    this.logo.anchor.set(0.5);
    this.logo.zIndex = 10;
    
    // 创建按钮容器
    this.buttonsContainer = new PIXI.Container();
    this.buttonsContainer.zIndex = 10;
    
    // 创建单人模式按钮
    this.singlePlayerBtn = this.createButton('单人模式', () => {
      console.log('单人按钮点击 - 直接回调方式');
      this.onSinglePlayerClick();
    });
    // 设置按钮位置为左侧
    this.singlePlayerBtn.position.set(-120, 80);
    
    // 创建多人模式按钮
    this.multiPlayerBtn = this.createButton('多人模式', () => {
      console.log('多人按钮点击 - 直接回调方式');
      this.onMultiPlayerClick();
    });
    // 设置按钮位置为右侧
    this.multiPlayerBtn.position.set(120, 80);
    
    // 为确保触摸事件正常工作，直接将两个按钮设为可交互
    this.singlePlayerBtn.interactive = true;
    this.singlePlayerBtn.buttonMode = true;
    this.multiPlayerBtn.interactive = true;
    this.multiPlayerBtn.buttonMode = true;
    
    // 测试直接添加触摸事件到按钮
    this.singlePlayerBtn.on('touchend', () => {
      console.log('单人按钮touchend事件触发');
      this.onSinglePlayerClick();
    });
    
    this.multiPlayerBtn.on('touchend', () => {
      console.log('多人按钮touchend事件触发');
      this.onMultiPlayerClick();
    });
    
    // 添加按钮到按钮容器
    this.buttonsContainer.addChild(this.singlePlayerBtn, this.multiPlayerBtn);
    
    // 添加到主容器
    this.container.addChild(this.logo, this.buttonsContainer);
    
    // 设置模糊滤镜
    this.blurFilter = new KawaseBlurFilter(8, 10, true);
    
    // 状态标志
    this.isVisible = false;
  }
  
  /**
   * 创建按钮
   * @param {string} text - 按钮文本
   * @param {Function} onClick - 点击回调
   * @returns {PIXI.Container} - 按钮容器
   */
  createButton(text, onClick) {
    const buttonContainer = new PIXI.Container();
    
    // 按钮背景
    const bg = PIXI.Sprite.from('assets/images/btnBg.png');
    bg.anchor.set(0.5);
    bg.scale.set(0.7);

    // 按钮文本
    const buttonText = new PIXI.Text(text, {
      fontFamily: 'YouYuan, Microsoft YaHei, PingFang SC, sans-serif',
      fontSize: 24,
      fill: 0xFFFFFF,
      align: 'center',
      fontWeight: 'bold',
      stroke: 0x000000,
      strokeThickness: 4,
      dropShadow: false,
      letterSpacing: 1
    });
    buttonText.anchor.set(0.5);
    
    // 添加到按钮容器
    buttonContainer.addChild(bg, buttonText);
    
    // 设置交互区域
    buttonContainer.interactive = true;
    buttonContainer.buttonMode = true;
    buttonContainer.hitArea = new PIXI.Rectangle(
      -bg.width/2 * 0.7, 
      -bg.height/2 * 0.7, 
      bg.width * 0.7, 
      bg.height * 0.7
    );
    
    // 存储原始缩放和回调函数
    buttonContainer.originalScale = 0.7;
    buttonContainer.onClick = onClick;
    
    // 设置默认的点击效果（在微信环境中会被忽略）
    buttonContainer.on('pointerdown', () => {
      bg.scale.set(0.65); // 缩小效果
    });
    
    buttonContainer.on('pointerup', () => {
      bg.scale.set(0.7); // 恢复原始尺寸
      onClick();
    });
    
    buttonContainer.on('pointerupoutside', () => {
      bg.scale.set(0.7); // 恢复原始尺寸
    });
    
    return buttonContainer;
  }
  
  /**
   * 单人模式按钮点击处理
   */
  onSinglePlayerClick() {
    console.log('开始单人模式');
    
    // 保存回调引用，以防hide方法中移除容器导致引用丢失
    const callback = this.onSinglePlayerStart;
    
    // 先触发回调，确保游戏状态先被设置
    if (typeof callback === 'function') {
      console.log('执行单人模式回调');
      callback();
    } else {
      console.error('单人模式回调不是函数:', callback);
    }
    
    // 然后隐藏UI
    this.hide(true);
  }
  
  /**
   * 多人模式按钮点击处理
   */
  onMultiPlayerClick() {
    console.log('多人模式开发中');
    // 显示"开发中"提示
    const noticeContainer = new PIXI.Container();
    
    // 通知文本
    const noticeText = new PIXI.Text('正在开发中，敬请期待!', {
      fontFamily: 'YouYuan, Microsoft YaHei, PingFang SC, sans-serif',
      fontSize: 24,
      fill: 0xFFFFFF,
      align: 'center',
      fontWeight: 'bold',
      stroke: 0x000000,
      strokeThickness: 4,
      dropShadow: false,
      letterSpacing: 1
    });
    noticeText.anchor.set(0.5);
    noticeText.position.set(screen.width / 2, screen.height / 2 - 100);
    noticeText.alpha = 0;
    
    this.container.parent.addChild(noticeText);
    
    // 动画显示和隐藏提示
    animate({
      from: 0,
      to: 1,
      duration: 300,
      onUpdate: value => {
        noticeText.alpha = value;
      },
      onComplete: () => {
        setTimeout(() => {
          animate({
            from: 1,
            to: 0,
            duration: 300,
            onUpdate: value => {
              noticeText.alpha = value;
            },
            onComplete: () => {
              this.container.parent.removeChild(noticeText);
            }
          });
        }, 2000);
      }
    });
  }
  
  /**
   * 添加到容器并显示
   * @param {PIXI.Container} container - 父容器
   */
  show(container) {
    if (!container) return;
    
    // 添加到容器
    container.addChild(this.container);
    this.isVisible = true;
    
    // 设置位置 - 添加到容器后再设置位置
    this.updatePosition();
    
    // 添加窗口大小变化监听
    window.addEventListener('resize', this.updatePosition.bind(this));
  }
  
  /**
   * 隐藏界面
   * @param {boolean} animate - 是否使用动画过渡
   */
  hide(animate = false) {
    if (!this.isVisible) return;
    
    if (animate) {
      // 使用动画隐藏界面
      const fadeOut = (alpha) => {
        this.container.alpha = alpha;
        if (alpha <= 0) {
          if (this.container.parent) {
            this.container.parent.removeChild(this.container);
          }
          this.isVisible = false;
          return;
        }
        requestAnimationFrame(() => fadeOut(alpha - 0.05));
      };
      
      fadeOut(1.0);
    } else {
      // 直接移除
      if (this.container.parent) {
        this.container.parent.removeChild(this.container);
      }
      this.isVisible = false;
    }
    
    // 移除窗口大小变化监听
    window.removeEventListener('resize', this.updatePosition.bind(this));
  }
  
  /**
   * 更新界面元素位置
   */
  updatePosition() {
    if (!this.isVisible) return;
    
    // 确保调用时console.log显示执行了此方法
    console.log('GameStartUI: 更新位置');
    
    // 设置主容器位置（居中）
    this.container.position.set(screen.width / 2, screen.height / 2);
    
    // 设置logo位置（相对于容器中心向上偏移）
    this.logo.position.set(0, -screen.height * 0.2);
    
    // 设置按钮容器位置（相对于容器中心）
    this.buttonsContainer.position.set(0, screen.height * 0.05);
  }
  
  /**
   * 应用模糊滤镜到目标
   * @param {PIXI.DisplayObject} target - 应用滤镜的目标
   */
  applyBlurFilter(target) {
    if (!target) return;
    
    target.filters = [this.blurFilter];
  }
  
  /**
   * 淡出模糊滤镜
   * @param {PIXI.DisplayObject} target - 应用滤镜的目标
   * @param {number} duration - 过渡时间，毫秒
   */
  fadeOutBlurFilter(target, duration = 1000) {
    if (!target || !target.filters || !target.filters.includes(this.blurFilter)) return;
    
    const startTime = Date.now();
    const startBlur = this.blurFilter.blur;
    
    const blurTicker = (delta) => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // 更新模糊值
      this.blurFilter.blur = startBlur * (1 - progress);
      
      // 结束动画
      if (progress >= 1) {
        target.filters = null;
        ticker.remove(blurTicker);
      }
    };
    
    ticker.add(blurTicker);
  }
  
  /**
   * 将全局坐标转换为本地坐标
   * @param {number} x - 全局X坐标
   * @param {number} y - 全局Y坐标
   * @returns {PIXI.Point} - 本地坐标
   */
  globalToLocal(x, y) {
    // 创建一个全局坐标点
    const globalPoint = new PIXI.Point(x, y);
    
    // 使用PIXI的toLocal方法转换为容器的本地坐标
    try {
      // 如果容器没有被添加到舞台，无法正确转换坐标
      if (!this.container.parent) {
        console.error('容器未添加到舞台，无法转换坐标');
        return globalPoint;
      }
      
      // 把全局坐标转换为相对于容器的本地坐标
      const localPoint = this.container.toLocal(globalPoint);
      console.log(`坐标转换: 全局(${x}, ${y}) -> 本地(${localPoint.x}, ${localPoint.y})`);
      return localPoint;
    } catch (error) {
      console.error('坐标转换出错:', error);
      return globalPoint;
    }
  }
  
  /**
   * 触摸检测 - 简单直接的方法
   * @param {number} x - 全局触摸X坐标
   * @param {number} y - 全局触摸Y坐标
   * @returns {string|null} - 点击的按钮类型或null
   */
  checkTouchHit(x, y) {
    // 获取按钮的全局边界
    const singleBtnBounds = this.singlePlayerBtn.getBounds();
    const multiBtnBounds = this.multiPlayerBtn.getBounds();
    
    // 给边界扩展一些，使按钮更容易点击
    singleBtnBounds.x -= 30;
    singleBtnBounds.y -= 30;
    singleBtnBounds.width += 60;
    singleBtnBounds.height += 60;
    
    multiBtnBounds.x -= 30;
    multiBtnBounds.y -= 30;
    multiBtnBounds.width += 60;
    multiBtnBounds.height += 60;
    
    // 输出调试信息
    console.log(`触摸点: (${x}, ${y})`);
    console.log(`单人按钮: x=${singleBtnBounds.x}, y=${singleBtnBounds.y}, w=${singleBtnBounds.width}, h=${singleBtnBounds.height}`);
    console.log(`多人按钮: x=${multiBtnBounds.x}, y=${multiBtnBounds.y}, w=${multiBtnBounds.width}, h=${multiBtnBounds.height}`);
    
    // 检查是否点击了按钮
    if (singleBtnBounds.contains(x, y)) {
      console.log('命中单人按钮');
      return 'single';
    } else if (multiBtnBounds.contains(x, y)) {
      console.log('命中多人按钮');
      return 'multi';
    }
    
    console.log('未命中任何按钮');
    return null;
  }
  
  /**
   * 处理触摸事件
   * @param {number} x - 触摸点x坐标
   * @param {number} y - 触摸点y坐标
   * @param {boolean} isStart - 是否为触摸开始事件
   */
  handleTouch(x, y, isStart) {
    if (!this.isVisible) {
      console.log('UI不可见，忽略触摸事件');
      return;
    }
    
    console.log(`触摸事件处理: x=${x}, y=${y}, isStart=${isStart}`);
    
    // 使用直接的边界检测方法
    const hitButton = this.checkTouchHit(x, y);
    
    if (hitButton === 'single') {
      if (isStart) {
        // 触摸开始 - 缩小按钮
        this.singlePlayerBtn.getChildAt(0).scale.set(0.65);
      } else {
        // 触摸结束 - 恢复尺寸并触发点击
        this.singlePlayerBtn.getChildAt(0).scale.set(0.7);
        console.log('调用单人模式开始回调');
        this.onSinglePlayerClick();
      }
    } else if (hitButton === 'multi') {
      if (isStart) {
        // 触摸开始 - 缩小按钮
        this.multiPlayerBtn.getChildAt(0).scale.set(0.65);
      } else {
        // 触摸结束 - 恢复尺寸并触发点击
        this.multiPlayerBtn.getChildAt(0).scale.set(0.7);
        this.onMultiPlayerClick();
      }
    } else if (!isStart) {
      // 触摸结束但没有命中按钮，恢复所有按钮状态
      this.singlePlayerBtn.getChildAt(0).scale.set(0.7);
      this.multiPlayerBtn.getChildAt(0).scale.set(0.7);
    }
  }
}

export default GameStartUI; 
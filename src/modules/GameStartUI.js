import * as PIXI from 'pixi.js';
import { screen } from '~/core';
import { animate } from 'popmotion';
import { Button } from './ui';
import { showToast } from './ui';

/**
 * 游戏开始界面
 * 提供游戏开始前的UI界面，包括标题、按钮等
 */
class GameStartUI {
  /**
   * 创建游戏开始界面
   * @param {Object} options - 配置选项
   * @param {Function} options.onSinglePlayerStart - 单人模式开始回调
   * @param {Function} options.onMultiPlayerStart - 多人模式开始回调
   */
  constructor(options = {}) {
    this.options = options;
    
    // 创建主容器
    this.container = new PIXI.Container();
    this.container.zIndex = 100;
    
    // 设置主容器位置（居中）
    this.container.position.set(screen.width / 2, screen.height / 2);
    
    // 创建LOGO
    this.logo = PIXI.Sprite.from('assets/images/gameLogo.png');
    this.logo.scale.set(1.2);
    this.logo.anchor.set(0.5);
    this.logo.zIndex = 10;
    
    // 创建按钮容器
    this.buttonsContainer = new PIXI.Container();
    this.buttonsContainer.zIndex = 10;
    
    // 创建单人游戏按钮
    this.singlePlayerBtn = new Button({
      text: '单人模式',
      scale: 0.7,
      onClick: () => {
        console.log('单人按钮点击 - 直接回调方式');
        this.onSinglePlayerClick();
      }
    });
    this.singlePlayerBtn.position.set(-120, 80);
    
    // 创建多人游戏按钮
    this.multiPlayerBtn = new Button({
      text: '多人模式',
      scale: 0.7,
      onClick: () => {
        console.log('多人按钮点击 - 直接回调方式');
        this.onMultiPlayerClick();
      }
    });
    this.multiPlayerBtn.position.set(120, 80);
    
    // 添加到容器
    this.buttonsContainer.addChild(this.singlePlayerBtn, this.multiPlayerBtn);
    this.container.addChild(this.logo, this.buttonsContainer);
    
    // 创建模糊滤镜
    this.blurFilter = new PIXI.filters.BlurFilter(8, 10, true);
    
    // 状态标志
    this.isVisible = false;
  }
  
  /**
   * 单人模式按钮点击处理
   */
  onSinglePlayerClick() {
    console.log('开始单人模式');
    if (typeof this.options.onSinglePlayerStart === 'function') {
      this.hide();
      this.options.onSinglePlayerStart();
    }
  }
  
  /**
   * 多人模式按钮点击处理
   */
  onMultiPlayerClick() {
    console.log('多人模式开发中');
    
    // 使用Toast组件显示提示
    if (this.container.parent) {
      showToast({
        text: '正在开发中，敬请期待!',
        type: 'info',
        duration: 2000,
        parent: this.container.parent
      });
    }
    
    // 如果有回调，在最后才调用
    if (typeof this.options.onMultiPlayerStart === 'function') {
      // 注意：不隐藏UI，因为这只是一个提示
      // this.hide();
      this.options.onMultiPlayerStart();
    }
  }
  
  /**
   * 显示游戏开始界面
   * @param {PIXI.Container} parent - 父容器
   */
  show(parent) {
    if (this.isVisible) return;
    
    parent.addChild(this.container);
    this.isVisible = true;
    this._updatePosition();
  }
  
  /**
   * 隐藏游戏开始界面
   */
  hide() {
    if (!this.isVisible) return;
    
    if (this.container.parent) {
      this.container.parent.removeChild(this.container);
    }
    
    this.isVisible = false;
  }
  
  /**
   * 更新UI位置，使其自适应屏幕
   * @private
   */
  _updatePosition() {
    // 设置LOGO位置在屏幕上方
    this.logo.position.set(0, -screen.height * 0.2);
    
    // 设置按钮位置在中间偏下
    this.buttonsContainer.position.set(0, screen.height * 0.05);
  }
  
  /**
   * 应用模糊滤镜
   * @param {PIXI.Container} target - 目标容器
   */
  applyBlurFilter(target) {
    if (target) {
      target.filters = [this.blurFilter];
    }
  }
  
  /**
   * 淡出模糊滤镜
   * @param {PIXI.Container} target - 目标容器
   * @param {number} duration - 动画时长(毫秒)
   */
  fadeOutBlurFilter(target, duration = 1000) {
    if (!target || !target.filters || !target.filters.includes(this.blurFilter)) {
      return;
    }
    
    const initialBlur = this.blurFilter.blur;
    
    animate({
      from: initialBlur,
      to: 0,
      duration: duration,
      onUpdate: (value) => {
        this.blurFilter.blur = value;
      },
      onComplete: () => {
        target.filters = null;
      }
    });
  }
  
  /**
   * 处理触摸事件
   * @param {number} x - 触摸X坐标
   * @param {number} y - 触摸Y坐标
   * @param {boolean} isDown - 是否按下
   */
  handleTouch(x, y, isDown) {
    console.log('GameStartUI处理触摸：', x, y, isDown ? 'down' : 'up');
    
    // 只有在界面可见时才处理
    if (!this.isVisible) return;
    
    // 检查是否点击了按钮
    const hitButton = this._checkTouchHit(x, y);
    
    if (hitButton === 'single') {
      if (isDown) {
        this.singlePlayerBtn._onPointerDown();
      } else {
        this.singlePlayerBtn._onPointerUp();
      }
    } else if (hitButton === 'multi') {
      if (isDown) {
        this.multiPlayerBtn._onPointerDown();
      } else {
        this.multiPlayerBtn._onPointerUp();
      }
    }
  }
  
  /**
   * 检查触摸是否命中按钮
   * @param {number} x - 触摸X坐标
   * @param {number} y - 触摸Y坐标
   * @returns {string|null} 命中的按钮类型，'single'或'multi'，未命中则为null
   * @private
   */
  _checkTouchHit(x, y) {
    // 将全局坐标转换为按钮的本地坐标
    const buttonContainerPos = {
      x: screen.width / 2 + this.buttonsContainer.position.x,
      y: screen.height / 2 + this.buttonsContainer.position.y
    };
    
    // 计算单人按钮的位置和点击区域
    const singleBtnPos = {
      x: buttonContainerPos.x + this.singlePlayerBtn.position.x,
      y: buttonContainerPos.y + this.singlePlayerBtn.position.y
    };
    
    // 计算多人按钮的位置和点击区域
    const multiBtnPos = {
      x: buttonContainerPos.x + this.multiPlayerBtn.position.x,
      y: buttonContainerPos.y + this.multiPlayerBtn.position.y
    };
    
    // 获取按钮的点击区域大小(从hitArea)
    const singleBtnHitArea = this.singlePlayerBtn.hitArea;
    const multiBtnHitArea = this.multiPlayerBtn.hitArea;
    
    // 检查是否点击了单人按钮
    if (
      x >= singleBtnPos.x + singleBtnHitArea.x &&
      x <= singleBtnPos.x + singleBtnHitArea.x + singleBtnHitArea.width &&
      y >= singleBtnPos.y + singleBtnHitArea.y &&
      y <= singleBtnPos.y + singleBtnHitArea.y + singleBtnHitArea.height
    ) {
      return 'single';
    }
    
    // 检查是否点击了多人按钮
    if (
      x >= multiBtnPos.x + multiBtnHitArea.x &&
      x <= multiBtnPos.x + multiBtnHitArea.x + multiBtnHitArea.width &&
      y >= multiBtnPos.y + multiBtnHitArea.y &&
      y <= multiBtnPos.y + multiBtnHitArea.y + multiBtnHitArea.height
    ) {
      return 'multi';
    }
    
    return null;
  }
}

export default GameStartUI; 
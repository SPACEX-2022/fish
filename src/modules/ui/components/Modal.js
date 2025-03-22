import * as PIXI from 'pixi.js';
import Button from './Button';
import { screen } from '~/core';

/**
 * 通用模态对话框组件
 * 提供一个可自定义的模态对话框，支持标题、内容、按钮等
 */
class Modal extends PIXI.Container {
  /**
   * 创建一个模态对话框
   * @param {Object} options - 配置选项
   * @param {string} [options.title=''] - 对话框标题
   * @param {string} [options.content=''] - 对话框内容
   * @param {string} [options.bgImage='assets/images/modalBg.png'] - 对话框背景图片
   * @param {number} [options.width=400] - 对话框宽度
   * @param {number} [options.height=300] - 对话框高度
   * @param {boolean} [options.showClose=true] - 是否显示关闭按钮
   * @param {Array} [options.buttons=[]] - 按钮配置，例如 [{text: '确定', onClick: () => {}}]
   * @param {Object} [options.titleStyle] - 标题文本样式
   * @param {Object} [options.contentStyle] - 内容文本样式
   * @param {Function} [options.onClose] - 关闭回调
   */
  constructor(options) {
    super();
    this.options = Object.assign({
      title: '',
      content: '',
      bgImage: 'assets/images/modalBg.png',
      width: 400,
      height: 300,
      showClose: true,
      buttons: [],
      titleStyle: {
        fontFamily: 'YouYuan, Microsoft YaHei, PingFang SC, sans-serif',
        fontSize: 26,
        fill: 0xFFFFFF,
        align: 'center',
        fontWeight: 'bold',
        stroke: 0x000000,
        strokeThickness: 5,
        letterSpacing: 1
      },
      contentStyle: {
        fontFamily: 'Microsoft YaHei, PingFang SC, sans-serif',
        fontSize: 20,
        fill: 0xFFFFFF,
        align: 'center',
        wordWrap: true,
        wordWrapWidth: 350,
        letterSpacing: 1
      },
      onClose: null
    }, options);
    
    // 初始化对话框
    this._init();
  }
  
  /**
   * 初始化对话框
   * @private
   */
  _init() {
    // 创建半透明背景遮罩
    this.bgMask = new PIXI.Graphics();
    this.bgMask.beginFill(0x000000, 0.6);
    this.bgMask.drawRect(0, 0, screen.width, screen.height);
    this.bgMask.endFill();
    this.addChild(this.bgMask);
    
    // 创建对话框容器
    this.modalContainer = new PIXI.Container();
    this.modalContainer.position.set(screen.width / 2, screen.height / 2);
    this.addChild(this.modalContainer);
    
    // 创建对话框背景
    this.bg = PIXI.Sprite.from(this.options.bgImage);
    this.bg.anchor.set(0.5);
    
    // 设置背景尺寸
    const scaleX = this.options.width / this.bg.width;
    const scaleY = this.options.height / this.bg.height;
    this.bg.scale.set(scaleX, scaleY);
    
    this.modalContainer.addChild(this.bg);
    
    // 创建标题
    if (this.options.title) {
      this.title = new PIXI.Text(this.options.title, this.options.titleStyle);
      this.title.anchor.set(0.5, 0);
      this.title.position.set(0, -this.options.height / 2 + 20);
      this.modalContainer.addChild(this.title);
    }
    
    // 创建内容
    if (this.options.content) {
      this.content = new PIXI.Text(this.options.content, this.options.contentStyle);
      this.content.anchor.set(0.5);
      this.content.position.set(0, 0);
      this.modalContainer.addChild(this.content);
    }
    
    // 创建关闭按钮
    if (this.options.showClose) {
      this.closeButton = new PIXI.Text('×', {
        fontFamily: 'Arial',
        fontSize: 30,
        fill: 0xFFFFFF,
        fontWeight: 'bold'
      });
      this.closeButton.anchor.set(0.5);
      this.closeButton.position.set(this.options.width / 2 - 20, -this.options.height / 2 + 20);
      this.closeButton.interactive = true;
      this.closeButton.buttonMode = true;
      this.closeButton.on('pointerdown', this.close.bind(this));
      this.modalContainer.addChild(this.closeButton);
    }
    
    // 创建操作按钮
    if (this.options.buttons && this.options.buttons.length > 0) {
      this.buttonContainer = new PIXI.Container();
      this.buttonContainer.position.set(0, this.options.height / 2 - 50);
      this.modalContainer.addChild(this.buttonContainer);
      
      const buttonWidth = this.options.width / (this.options.buttons.length + 1);
      
      this.options.buttons.forEach((btnOpt, index) => {
        const button = new Button({
          text: btnOpt.text,
          scale: 0.6,
          onClick: () => {
            if (typeof btnOpt.onClick === 'function') {
              btnOpt.onClick();
            }
            if (btnOpt.closeOnClick !== false) {
              this.close();
            }
          }
        });
        
        const posX = (index - (this.options.buttons.length - 1) / 2) * buttonWidth;
        button.position.set(posX, 0);
        
        this.buttonContainer.addChild(button);
      });
    }
    
    // 设置交互
    this.bgMask.interactive = true;
    this.bgMask.on('pointerdown', (event) => {
      event.stopPropagation();
      if (this.options.closeOnMaskClick) {
        this.close();
      }
    });
    
    // 隐藏对话框（默认不显示）
    this.visible = false;
  }
  
  /**
   * 显示对话框
   * @param {PIXI.Container} parent - 父容器
   */
  show(parent) {
    this.parent = parent;
    parent.addChild(this);
    this.visible = true;
    
    // 添加动画效果
    this.modalContainer.scale.set(0.5);
    this.modalContainer.alpha = 0;
    
    // 简单的缓动动画
    const animateIn = () => {
      this.modalContainer.scale.x += (1 - this.modalContainer.scale.x) * 0.2;
      this.modalContainer.scale.y += (1 - this.modalContainer.scale.y) * 0.2;
      this.modalContainer.alpha += (1 - this.modalContainer.alpha) * 0.2;
      
      if (this.modalContainer.alpha > 0.99) {
        this.modalContainer.scale.set(1);
        this.modalContainer.alpha = 1;
        return;
      }
      
      requestAnimationFrame(animateIn);
    };
    
    animateIn();
  }
  
  /**
   * 关闭对话框
   */
  close() {
    if (typeof this.options.onClose === 'function') {
      this.options.onClose();
    }
    
    // 添加关闭动画
    const animateOut = () => {
      this.modalContainer.scale.x += (0.5 - this.modalContainer.scale.x) * 0.2;
      this.modalContainer.scale.y += (0.5 - this.modalContainer.scale.y) * 0.2;
      this.modalContainer.alpha -= this.modalContainer.alpha * 0.2;
      
      if (this.modalContainer.alpha < 0.01) {
        this.modalContainer.alpha = 0;
        if (this.parent) {
          this.parent.removeChild(this);
        }
        return;
      }
      
      requestAnimationFrame(animateOut);
    };
    
    animateOut();
  }
  
  /**
   * 更新对话框内容
   * @param {string} content - 新的内容
   */
  updateContent(content) {
    if (this.content) {
      this.content.text = content;
    }
  }
  
  /**
   * 更新对话框标题
   * @param {string} title - 新的标题
   */
  updateTitle(title) {
    if (this.title) {
      this.title.text = title;
    }
  }
}

export default Modal; 
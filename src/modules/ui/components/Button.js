import * as PIXI from 'pixi.js';

/**
 * 通用按钮组件
 * 封装了常见的按钮功能，支持不同的外观和交互效果
 */
class Button extends PIXI.Container {
  /**
   * 创建一个按钮
   * @param {Object} options - 按钮配置项
   * @param {string} options.text - 按钮文本
   * @param {string} [options.bgImage='assets/images/btnBg.png'] - 按钮背景图片
   * @param {number} [options.width] - 按钮宽度，不指定则使用背景图片宽度
   * @param {number} [options.height] - 按钮高度，不指定则使用背景图片高度
   * @param {number} [options.scale=0.7] - 按钮缩放
   * @param {Object} [options.textStyle] - 文本样式
   * @param {Function} [options.onClick] - 点击回调函数
   */
  constructor(options) {
    super();
    this.options = Object.assign({
      text: '',
      bgImage: 'assets/images/btnBg.png',
      scale: 0.7,
      textStyle: {
        fontFamily: 'YouYuan, Microsoft YaHei, PingFang SC, sans-serif',
        fontSize: 24,
        fill: 0xFFFFFF,
        align: 'center',
        fontWeight: 'bold',
        stroke: 0x000000,
        strokeThickness: 5,
        letterSpacing: 1
      }
    }, options);
    
    this._init();
  }
  
  /**
   * 初始化按钮
   * @private
   */
  _init() {
    // 创建背景
    this.bg = PIXI.Sprite.from(this.options.bgImage);
    this.bg.anchor.set(0.5);
    this.bg.scale.set(this.options.scale);
    
    // 创建文本
    this.text = new PIXI.Text(this.options.text, this.options.textStyle);
    this.text.anchor.set(0.5);
    
    // 添加到容器
    this.addChild(this.bg, this.text);
    
    // 设置尺寸
    if (this.options.width) this.width = this.options.width;
    if (this.options.height) this.height = this.options.height;
    
    // 设置交互
    this.interactive = true;
    this.buttonMode = true;
    
    // 设置点击区域
    this.hitArea = new PIXI.Rectangle(
      -this.bg.width/2 * this.options.scale, 
      -this.bg.height/2 * this.options.scale, 
      this.bg.width * this.options.scale, 
      this.bg.height * this.options.scale
    );
    
    // 添加事件监听
    this.on('pointerdown', this._onPointerDown.bind(this));
    this.on('pointerup', this._onPointerUp.bind(this));
    this.on('pointerupoutside', this._onPointerUpOutside.bind(this));
    this.on('touchstart', this._onPointerDown.bind(this));
    this.on('touchend', this._onPointerUp.bind(this));
    this.on('touchendoutside', this._onPointerUpOutside.bind(this));
  }
  
  /**
   * 指针按下事件处理
   * @private
   */
  _onPointerDown() {
    this.bg.scale.set(this.options.scale * 0.95); // 缩小效果
  }
  
  /**
   * 指针抬起事件处理
   * @private
   */
  _onPointerUp() {
    this.bg.scale.set(this.options.scale); // 恢复大小
    if (typeof this.options.onClick === 'function') {
      this.options.onClick();
    }
  }
  
  /**
   * 指针在外部抬起事件处理
   * @private
   */
  _onPointerUpOutside() {
    this.bg.scale.set(this.options.scale); // 恢复大小
  }
  
  /**
   * 设置按钮文本
   * @param {string} text - 新的按钮文本
   */
  setText(text) {
    this.options.text = text;
    this.text.text = text;
  }
  
  /**
   * 设置按钮启用/禁用状态
   * @param {boolean} enabled - 是否启用
   */
  setEnabled(enabled) {
    this.interactive = enabled;
    this.buttonMode = enabled;
    this.alpha = enabled ? 1 : 0.5;
  }
  
  /**
   * 设置点击回调
   * @param {Function} callback - 点击回调函数
   */
  setOnClick(callback) {
    this.options.onClick = callback;
  }
}

export default Button; 
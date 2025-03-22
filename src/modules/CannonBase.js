import * as PIXI from 'pixi.js';

/**
 * 炮台底座类
 * 负责炮台底座的外观和定位
 */
class CannonBase {
  /**
   * 创建一个炮台底座实例
   * @param {Object} options - 配置选项
   * @param {string} options.texture - 底座纹理路径
   * @param {number} options.x - 底座x坐标位置
   * @param {number} options.y - 底座y坐标位置
   * @param {number} options.scale - 底座缩放比例
   * @param {string} options.id - 底座ID，用于在商店中识别
   */
  constructor(options = {}) {
    // 默认值
    const {
      texture = 'assets/images/batteryBase.png',
      x = 0,
      y = 0,
      scale = 1,
      id = 'default'
    } = options;
    
    // 创建精灵
    this.sprite = PIXI.Sprite.from(texture);
    this.sprite.anchor.set(0.5, 1); // 底部中心作为锚点
    this.sprite.position.set(x, y);
    this.sprite.scale.set(scale);
    
    // 商店相关属性
    this.id = id;
    this.name = options.name || '标准底座';
    this.price = options.price || 0;
    this.unlocked = options.unlocked || false;
    
    // 自定义属性
    this.zOffset = options.zOffset || 0; // 调整炮台的高度偏移
    this.cannonPosition = { x, y: y + this.zOffset };
  }
  
  /**
   * 更新底座位置
   * @param {number} x - x坐标
   * @param {number} y - y坐标
   */
  updatePosition(x, y) {
    this.sprite.position.set(x, y);
    this.cannonPosition = { x, y: y + this.zOffset };
  }
  
  /**
   * 获取炮台应该放置的位置
   * @returns {Object} 包含x和y坐标的对象
   */
  getCannonMountPosition() {
    return this.cannonPosition;
  }
  
  /**
   * 将底座添加到容器中
   * @param {PIXI.Container} container - 要添加到的容器
   */
  addToContainer(container) {
    if (container) {
      container.addChild(this.sprite);
    }
  }
  
  /**
   * 从容器中移除底座
   */
  removeFromContainer() {
    if (this.sprite.parent) {
      this.sprite.parent.removeChild(this.sprite);
    }
  }
  
  /**
   * 更换底座纹理
   * @param {string} texturePath - 新纹理路径
   */
  changeTexture(texturePath) {
    this.sprite.texture = PIXI.Texture.from(texturePath);
  }
}

export default CannonBase; 
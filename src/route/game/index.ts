import * as PIXI from 'pixi.js'
import {animate} from 'popmotion'
import {stage, screen, ticker} from '~/core'
import Player from '../../modules/Player'
import { Fish, FISH_BEHAVIORS } from '../../modules/Fish'

let root: PIXI.Container
let fishes: Fish[] = []
let player: any

const bound = screen.clone().pad(100)
const {max, random, PI, sin, cos} = Math


function init() {
  root = new PIXI.Container()

  const bed = PIXI.Sprite.from('bkg.jpg')
  bed.zIndex = -1
  bed.scale.set(max(screen.width / bed.width, screen.height / bed.height))

  /* 水面 */
  const overlay = PIXI.TilingSprite.from('overlay.png', {width: screen.width, height: screen.height})
  overlay.zIndex = 1

  /* 创建不同种类的鱼 */
  createFishSchool();

  // 添加所有精灵到舞台
  const fishSprites = fishes.map(fish => fish.sprite);
  root.addChild(overlay, bed, ...fishSprites)
  
  // 初始化玩家
  player = new Player({})
  
  // 初始化玩家并添加到root容器
  player.init(root)
  
  // 添加触摸/点击事件
  setupTouchEvents()

  ticker.add((delta) => {
    // 更新玩家状态（包括子弹位置和碰撞检测）
    player.update(delta, root, fishes);
    
    // 更新所有鱼的位置和状态
    updateFishes(delta);

    overlay.tilePosition.x -= 1
    overlay.tilePosition.y -= 1

    overlay.tilePosition.x %= 512
    overlay.tilePosition.y %= 512
  })
}

/**
 * 创建不同种类的鱼群
 */
function createFishSchool() {
  fishes = [];
  
  // 创建普通鱼
  for (let i = 0; i < 8; i++) {
    const fishType = (i % 4 + 1).toString();
    const fish = new Fish(fishType, {
      size: 0.5,
      health: 1,
      behavior: FISH_BEHAVIORS.NORMAL
    });
    setupFishCallbacks(fish);
    fishes.push(fish);
  }
  
  // 创建会逃跑的鱼
  for (let i = 0; i < 4; i++) {
    const fishType = (i % 4 + 1).toString();
    const fish = new Fish(fishType, {
      size: 0.4,
      health: 1,
      speed: 3,
      behavior: FISH_BEHAVIORS.ESCAPE
    });
    setupFishCallbacks(fish);
    fishes.push(fish);
  }
  
  // 创建会反击的鱼
  for (let i = 0; i < 2; i++) {
    const fishType = (i % 4 + 1).toString();
    const fish = new Fish(fishType, {
      size: 0.7,
      health: 2,
      behavior: FISH_BEHAVIORS.AGGRESSIVE
    });
    setupFishCallbacks(fish);
    fishes.push(fish);
  }
  
  // 创建随机移动的鱼
  for (let i = 0; i < 2; i++) {
    const fishType = (i % 4 + 1).toString();
    const fish = new Fish(fishType, {
      size: 0.6,
      health: 1,
      behavior: FISH_BEHAVIORS.ERRATIC
    });
    setupFishCallbacks(fish);
    fishes.push(fish);
  }
}

/**
 * 设置鱼的回调函数
 * @param {Fish} fish - 要设置回调的鱼
 */
function setupFishCallbacks(fish: any) {
  // 重写鱼的死亡动画完成回调
  fish.onDeathAnimationComplete = function() {
    // 查找鱼在数组中的索引
    const index = fishes.indexOf(fish);
    if (index !== -1) {
      // 确保粒子和精灵都已被移除
      if (fish.particleContainer && fish.particleContainer.parent) {
        fish.particleContainer.parent.removeChild(fish.particleContainer);
      }
      if (fish.sprite.parent) {
        fish.sprite.parent.removeChild(fish.sprite);
      }
      
      // 创建一条新鱼替换死亡的鱼
      const fishType = (Math.floor(random() * 4) + 1).toString();
      const behaviors = Object.values(FISH_BEHAVIORS);
      const newBehavior = behaviors[Math.floor(random() * behaviors.length)];
      
      const newFish = new Fish(fishType, {
        size: 0.4 + random() * 0.3,
        health: Math.ceil(random() * 2),
        behavior: newBehavior
      });
      
      setupFishCallbacks(newFish);
      root.addChild(newFish.sprite);
      fishes[index] = newFish;
      
      console.log(`鱼被击杀并替换，新鱼类型: ${fishType}, 习性: ${newBehavior}`);
    }
  };
}

/**
 * 更新所有鱼的位置和状态
 * @param {number} delta - 帧时间差
 */
function updateFishes(delta: number) {
  for (let i = fishes.length - 1; i >= 0; i--) {
    const fish = fishes[i];
    
    // 更新鱼的位置和状态
    fish.update(delta, bound);
  }
}

/**
 * 设置触摸/点击事件
 */
function setupTouchEvents() {
  try {
    console.log('设置微信触摸事件')
    wx.onTouchStart((event: any) => {
      const touch = event.touches[0]
      console.log('触摸开始:', touch.clientX, touch.clientY)
      player.shoot(touch.clientX, touch.clientY, root)
    })
  } catch (error) {
    console.error('设置触摸/点击事件出错:', error)
  }
}

export function show() {
  if (!root) init()
  stage.addChild(root)
  root.alpha = 0
  animate({
    from: 0,
    to: 1,
    duration: 1e3,
    onUpdate: v => root.alpha = v
  })
}

export function hide() {
  stage.removeChild(root)
}

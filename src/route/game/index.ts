import * as PIXI from 'pixi.js'
import {animate} from 'popmotion'
import {stage, screen, ticker} from '~/core'
import Player from '../../modules/Player'
import { Fish, FISH_BEHAVIORS } from '../../modules/Fish'
import GameStartUI from '../../modules/GameStartUI'

let root: PIXI.Container
let fishes: Fish[] = []
let player: any
let gameStartUI: any
let fishContainer: PIXI.Container
let isGameStarted: boolean = false

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

  /* 鱼群容器 */
  fishContainer = new PIXI.Container()
  fishContainer.zIndex = 0

  /* 创建不同种类的鱼 */
  createFishSchool();

  // 添加所有精灵到舞台
  const fishSprites = fishes.map(fish => fish.sprite);
  fishContainer.addChild(...fishSprites)
  root.addChild(overlay, bed, fishContainer)
  
  // 创建游戏开始界面
  gameStartUI = new GameStartUI({
    onSinglePlayerStart: startSinglePlayerGame,
    onMultiPlayerStart: () => {
      console.log('多人模式暂未实现');
    }
  });
  
  // 显示游戏开始界面
  // 确保root已完全初始化后再显示UI
  setTimeout(() => {
    console.log('显示游戏开始界面');
    gameStartUI.show(root);
    // 应用模糊滤镜到鱼群
    gameStartUI.applyBlurFilter(fishContainer);
    console.log('游戏开始界面添加完成');
  }, 100);
  
  // 设置触摸/点击事件，但现在不会触发射击
  setupTouchEvents()

  ticker.add((delta) => {
    // 只有游戏开始后才更新玩家状态
    if (isGameStarted && player) {
      // 更新玩家状态（包括子弹位置和碰撞检测）
      player.update(delta, root, fishes);
    }
    
    // 更新所有鱼的位置和状态
    updateFishes(delta);

    overlay.tilePosition.x -= 1
    overlay.tilePosition.y -= 1

    overlay.tilePosition.x %= 512
    overlay.tilePosition.y %= 512
  })
}

/**
 * 开始单人游戏
 */
function startSinglePlayerGame() {
  console.log('开始单人游戏逻辑被调用');
  
  // 标记游戏已开始
  isGameStarted = true;
  console.log('游戏状态已设置为开始:', isGameStarted);
  
  // 淡出模糊滤镜
  if (gameStartUI && fishContainer) {
    console.log('应用淡出模糊滤镜');
    gameStartUI.fadeOutBlurFilter(fishContainer, 1500);
  } else {
    console.error('无法应用滤镜淡出效果:', gameStartUI, fishContainer);
  }
  
  try {
    // 初始化玩家
    console.log('初始化玩家');
    player = new Player({})
    
    // 初始化玩家并添加到root容器
    player.init(root)
    console.log('玩家初始化完成');
  } catch (error) {
    console.error('初始化玩家出错:', error);
  }
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
      fishContainer.addChild(newFish.sprite);
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
      console.log('触摸开始:', touch.clientX, touch.clientY);
      console.log('游戏状态:', isGameStarted ? '已开始' : '未开始');
      
      // 如果游戏未开始，则传递触摸事件给UI
      if (!isGameStarted && gameStartUI) {
        console.log('将触摸事件传递给UI')
        gameStartUI.handleTouch(touch.clientX, touch.clientY, true);
      }
      // 只有游戏开始后才能发射子弹
      else if (isGameStarted && player) {
        console.log('发射子弹')
        player.shoot(touch.clientX, touch.clientY, root)
      }
    })
    
    wx.onTouchEnd((event: any) => {
      // 触摸结束时，如果有触摸点，使用最后一个触摸点
      const touch = event.changedTouches ? event.changedTouches[0] : null;
      if (!touch) return;
      
      console.log('触摸结束:', touch.clientX, touch.clientY);
      console.log('游戏状态:', isGameStarted ? '已开始' : '未开始');
      
      // 如果游戏未开始，则传递触摸事件给UI
      if (!isGameStarted && gameStartUI) {
        console.log('将触摸结束事件传递给UI')
        gameStartUI.handleTouch(touch.clientX, touch.clientY, false);
      }
    })
  } catch (error) {
    console.error('设置触摸/点击事件出错:', error)
    
    // 在非微信环境下使用鼠标事件模拟
    try {
      window.addEventListener('mousedown', (event) => {
        if (!isGameStarted && gameStartUI) {
          gameStartUI.handleTouch(event.clientX, event.clientY, true);
        } else if (isGameStarted && player) {
          player.shoot(event.clientX, event.clientY, root);
        }
      });
      
      window.addEventListener('mouseup', (event) => {
        if (!isGameStarted && gameStartUI) {
          gameStartUI.handleTouch(event.clientX, event.clientY, false);
        }
      });
    } catch (e) {
      console.error('设置鼠标事件出错:', e);
    }
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
  
  // 重置游戏状态
  isGameStarted = false;
  
  // 清理资源
  if (player) {
    player = null;
  }
}

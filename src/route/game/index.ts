import * as PIXI from 'pixi.js'
import {animate} from 'popmotion'
import {stage, screen, ticker} from '~/core'
import Player from '../../modules/Player'
import { Fish, FISH_BEHAVIORS } from '../../modules/Fish'
import GameStartUI from '../../modules/GameStartUI'
import audioManager from '../../modules/AudioManager'
import HUD from '../../modules/HUD'

let root: PIXI.Container
let fishes: Fish[] = []
let player: any
let gameStartUI: any
let hud: any // HUD实例
let comboTimeout: number = 0 // 连击计时器
let fishContainer: PIXI.Container
let isGameStarted: boolean = false
let isBgmStarted: boolean = false

// 添加全局变量用于控制鱼的数量
const MAX_FISH_COUNT = 7; // 最大鱼的数量
const FISH_RESPAWN_DELAY = 1000; // 鱼重生延迟时间(毫秒)

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
  
  // 播放背景音乐
  playBackgroundMusic()
  
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
  
  // 初始化HUD但不显示，等游戏开始后再显示
  hud = new HUD({
    comboTimeout: 3000 // 3秒连击超时时间
  });
  
  // 设置触摸/点击事件，但现在不会触发射击
  setupTouchEvents()

  ticker.add((delta) => {
    // 只有游戏开始后才更新玩家状态
    if (isGameStarted && player) {
      // 更新玩家状态（包括子弹位置和碰撞检测）
      player.update(delta, root, fishes);
      
      // 同步HUD显示的分数
      if (hud && player.getScore() !== hud.getScore()) {
        hud.updateScore(player.getScore());
      }
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
 * 播放背景音乐
 */
function playBackgroundMusic() {
  if (isBgmStarted) return;
  
  try {
    console.log('开始播放背景音乐');
    audioManager.playBGM('assets/mp3/bgm_scene.mp3', true);
    isBgmStarted = true;
  } catch (error) {
    console.error('播放背景音乐失败:', error);
  }
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
    
    // 显示HUD
    if (hud) {
      hud.show(root);
      console.log('HUD显示完成');
      
      // 设置玩家击中鱼的回调
      player.setOnFishHitCallback((fish: any, isDead: boolean, score: number) => {
        console.log(`鱼被击中回调：isDead=${isDead}, score=${score}`);
        
        // 每次击中都增加连击数
        hud.incrementCombo();
        
        // 如果鱼死亡，可以添加额外效果
        if (isDead) {
          console.log(`鱼死亡，显示飘动分数: ${score}`);
          // 播放金币音效
          audioManager.playEffect('coin', 'assets/mp3/coin.mp3');
          
          // 确保fish.sprite存在，否则使用默认位置
          let posX = screen.width / 2; // 默认屏幕中心
          let posY = screen.height / 2;
          
          if (fish && fish.sprite) {
            posX = fish.sprite.x || fish.sprite.position.x;
            posY = fish.sprite.y || fish.sprite.position.y;
            console.log(`鱼位置: (${posX}, ${posY})`);
          } else {
            console.warn('鱼或鱼精灵不存在，使用默认位置');
          }
          
          // 在得分位置显示飘动的分数
          showFloatingScore(posX, posY, score);
        }
      });
      
      console.log('玩家击中鱼回调设置完成');
    }
  } catch (error) {
    console.error('初始化玩家出错:', error);
  }
}

/**
 * 显示飘动的分数
 * @param {number} x - x坐标
 * @param {number} y - y坐标
 * @param {number} score - 分数值
 */
function showFloatingScore(x: number, y: number, score: number) {
  console.log(`尝试显示飘动分数: +${score} 位置(${x}, ${y})`);
  
  // 创建一个容器来包含数字精灵
  const scoreContainer = new PIXI.Container();
  scoreContainer.position.set(x, y);
  scoreContainer.pivot.set(0, 0);
  scoreContainer.scale.set(0.8); // 稍微小一点的显示比例
  
  // 将分数转换为字符串
  const scoreStr = `+${score}`;
  
  // 计算总宽度，用于居中
  let totalWidth = 0;
  
  // 首先添加"+"号
  const plusText = new PIXI.Text('+', {
    fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
    fontSize: 24,
    fill: 0xFFFF00,
    fontWeight: 'bold',
    stroke: 0x000000,
    strokeThickness: 4,
    letterSpacing: 1
  });
  plusText.position.x = 0;
  scoreContainer.addChild(plusText);
  
  totalWidth += plusText.width + 2;
  
  try {
    // 为每个数字创建精灵
    for (let i = 1; i < scoreStr.length; i++) { // 从1开始跳过"+"号
      const digit = scoreStr[i];
      console.log(`尝试创建数字精灵: num${digit}.png`);
      
      // 直接使用预加载的数字图片
      const digitSprite = PIXI.Sprite.from(`num${digit}.png`);
      
      // 确保精灵有纹理
      if (!digitSprite.texture || digitSprite.texture.valid === false) {
        console.error(`数字精灵纹理无效: num${digit}.png`);
        // 使用文本作为备用
        const digitText = new PIXI.Text(digit, {
          fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
          fontSize: 24,
          fill: 0xFFFF00,
          fontWeight: 'bold',
          stroke: 0x000000,
          strokeThickness: 4,
          letterSpacing: 1
        });
        digitText.position.x = totalWidth;
        scoreContainer.addChild(digitText);
        totalWidth += digitText.width + 2;
      } else {
        // 设置数字位置
        digitSprite.position.x = totalWidth;
        scoreContainer.addChild(digitSprite);
        totalWidth += digitSprite.width + 2;
        console.log(`成功添加数字精灵: num${digit}.png`);
      }
    }
  } catch (error) {
    console.error('创建数字精灵时出错:', error);
    // 如果出错，直接使用文本作为备用
    const scoreText = new PIXI.Text(`+${score}`, {
      fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
      fontSize: 24,
      fill: 0xFFFF00,
      fontWeight: 'bold',
      stroke: 0x000000,
      strokeThickness: 4,
      letterSpacing: 1
    });
    scoreContainer.removeChildren();
    scoreContainer.addChild(scoreText);
  }
  
  // 居中整个分数显示
  for (let i = 0; i < scoreContainer.children.length; i++) {
    scoreContainer.children[i].position.x -= totalWidth / 2;
  }
  
  // 添加到舞台
  root.addChild(scoreContainer);
  console.log('飘动分数容器已添加到舞台');
  
  // 创建向上飘动并淡出的动画
  const startTime = Date.now();
  const duration = 1500; // 1.5秒
  
  const floatingScoreTicker = (delta: number) => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // 向上移动
    scoreContainer.position.y = y - progress * 80; // 向上移动80像素
    
    // 淡出效果
    scoreContainer.alpha = 1 - progress;
    
    // 稍微放大后缩小
    const scale = 0.8 + Math.sin(progress * Math.PI) * 0.3;
    scoreContainer.scale.set(scale);
    
    // 动画结束后移除
    if (progress >= 1) {
      if (scoreContainer.parent) {
        scoreContainer.parent.removeChild(scoreContainer);
      }
      ticker.remove(floatingScoreTicker);
    }
  };
  
  // 添加到ticker
  ticker.add(floatingScoreTicker);
}

/**
 * 创建不同种类的鱼群
 * @param {boolean} isRefill - 是否是补充模式（如果是则只添加到最大数量）
 */
function createFishSchool(isRefill = false) {
  // 如果是补充模式且当前鱼的数量已达到上限，则不再创建
  if (isRefill && fishes.length >= MAX_FISH_COUNT) return;
  
  // 如果不是补充模式，则重置鱼群
  if (!isRefill) {
    fishes = [];
  }
  
  // 计算需要创建的鱼的数量
  const targetCount = isRefill ? MAX_FISH_COUNT : Math.min(MAX_FISH_COUNT, 7); // 初始最多7条鱼
  const createCount = targetCount - fishes.length;
  
  if (createCount <= 0) return;
  
  console.log(`创建鱼群: 当前${fishes.length}条, 目标${targetCount}条, 将创建${createCount}条`);
  
  // 创建普通鱼 - 减少30%的数量
  const normalFishCount = Math.floor(createCount * 0.5); // 约50%是普通鱼
  for (let i = 0; i < normalFishCount; i++) {
    if (fishes.length >= targetCount) break;
    
    const fishType = (i % 4 + 1).toString();
    const fish = new Fish(fishType, {
      size: 0.5,
      health: 1,
      behavior: FISH_BEHAVIORS.NORMAL,
      spawnFromEdge: true // 从屏幕边界生成
    });
    setupFishCallbacks(fish);
    fishes.push(fish);
    if (fishContainer) fishContainer.addChild(fish.sprite);
  }
  
  // 创建会逃跑的鱼 - 减少30%的数量
  const escapeFishCount = Math.floor(createCount * 0.25); // 约25%是逃跑鱼
  for (let i = 0; i < escapeFishCount; i++) {
    if (fishes.length >= targetCount) break;
    
    const fishType = (i % 4 + 1).toString();
    const fish = new Fish(fishType, {
      size: 0.4,
      health: 1,
      speed: 3,
      behavior: FISH_BEHAVIORS.ESCAPE,
      spawnFromEdge: true // 从屏幕边界生成
    });
    setupFishCallbacks(fish);
    fishes.push(fish);
    if (fishContainer) fishContainer.addChild(fish.sprite);
  }
  
  // 创建会反击的鱼 - 减少30%的数量
  const aggressiveFishCount = Math.floor(createCount * 0.15); // 约15%是反击鱼
  for (let i = 0; i < aggressiveFishCount; i++) {
    if (fishes.length >= targetCount) break;
    
    const fishType = (i % 4 + 1).toString();
    const fish = new Fish(fishType, {
      size: 0.7,
      health: 2,
      behavior: FISH_BEHAVIORS.AGGRESSIVE,
      spawnFromEdge: true // 从屏幕边界生成
    });
    setupFishCallbacks(fish);
    fishes.push(fish);
    if (fishContainer) fishContainer.addChild(fish.sprite);
  }
  
  // 创建随机移动的鱼 - 减少30%的数量
  const erraticFishCount = Math.ceil(createCount * 0.1); // 约10%是随机移动鱼
  for (let i = 0; i < erraticFishCount; i++) {
    if (fishes.length >= targetCount) break;
    
    const fishType = (i % 4 + 1).toString();
    const fish = new Fish(fishType, {
      size: 0.6,
      health: 1,
      behavior: FISH_BEHAVIORS.ERRATIC,
      spawnFromEdge: true // 从屏幕边界生成
    });
    setupFishCallbacks(fish);
    fishes.push(fish);
    if (fishContainer) fishContainer.addChild(fish.sprite);
  }
  
  console.log(`鱼群创建完成，当前共有${fishes.length}条鱼`);
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
      
      // 从数组中移除该鱼
      fishes.splice(index, 1);
      
      console.log(`鱼被击杀并移除，当前剩余${fishes.length}条鱼`);
      
      // 延迟1秒后创建新鱼，只有当游戏处于开始状态时才创建
      if (isGameStarted) {
        setTimeout(() => {
          // 检查当前鱼的数量是否已达到上限
          if (fishes.length < MAX_FISH_COUNT) {
            // 创建一条新鱼
            const fishType = (Math.floor(random() * 4) + 1).toString();
            const behaviors = Object.values(FISH_BEHAVIORS);
            const newBehavior = behaviors[Math.floor(random() * behaviors.length)];
            
            const newFish = new Fish(fishType, {
              size: 0.4 + random() * 0.3,
              health: Math.ceil(random() * 2),
              behavior: newBehavior,
              spawnFromEdge: true // 从屏幕边界生成
            });
            
            setupFishCallbacks(newFish);
            fishContainer.addChild(newFish.sprite);
            fishes.push(newFish);
            
            console.log(`延迟1秒后创建新鱼，类型: ${fishType}, 习性: ${newBehavior}`);
          } else {
            console.log(`鱼的数量已达到上限(${MAX_FISH_COUNT})，不再创建新鱼`);
          }
        }, FISH_RESPAWN_DELAY);
      }
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
  
  // 确保背景音乐播放
  if (!isBgmStarted) {
    playBackgroundMusic();
  } else {
    audioManager.resumeBGM();
  }
}

export function hide() {
  stage.removeChild(root)
  
  // 暂停背景音乐
  audioManager.pauseBGM();
  
  // 重置游戏状态
  isGameStarted = false;
  
  // 清理资源
  if (player) {
    player = null;
  }
}

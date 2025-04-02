import * as PIXI from 'pixi.js'
import {animate} from 'popmotion'
import {stage, screen, ticker} from '~/core'
import Player from '../../modules/Player'
import { Fish, FISH_BEHAVIORS, FISH_CATEGORIES } from '../../modules/Fish'
import GameStartUI from '../../modules/GameStartUI'
import audioManager from '../../modules/AudioManager'
import HUD from '../../modules/HUD'
import { KawaseBlurFilter } from 'pixi-filters'
import { getStorageSync } from '../../util/storage'

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

// 添加全局变量用于墨水效果
let inkFilter: KawaseBlurFilter | null = null;
let inkOverlay: PIXI.Sprite | null = null; // 墨水颜色覆盖层
let isInkEffectActive = false;
let inkEffectTimeout: number | null = null;

const bound = screen.clone().pad(100)
const {max, random, PI, sin, cos} = Math


function init() {
  root = new PIXI.Container()
  root.sortableChildren = true // 确保子元素按zIndex排序

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
    comboTimeout: 3000, // 3秒连击超时时间
    gameTimeLimit: 10000, // 60秒游戏时间
    onGameTimeUp: handleGameTimeUp // 游戏时间结束回调
  });
  
  // 设置触摸/点击事件
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
      
      // 设置退出游戏回调
      hud.setOnExitGameCallback(() => {
        console.log('玩家点击退出游戏');
        exitGame();
      });
      
      // 设置重新开始游戏回调
      hud.setOnRestartGameCallback(() => {
        console.log('玩家点击重新开始游戏');
        restartGame();
      });
      
      // 设置返回主菜单回调
      hud.setOnReturnToMainMenuCallback(() => {
        console.log('玩家点击返回主菜单');
        exitGame();
      });
      
      // 启动游戏计时器
      hud.startGameTimer();
      
      // 设置玩家击中鱼的回调
      player.setOnFishHitCallback((fish: any, isDead: boolean, score: number) => {
        console.log(`鱼被击中回调：isDead=${isDead}, score=${score}`);
        
        // 每次击中都增加连击数
        hud.incrementCombo();
        
        // 如果鱼死亡，可以添加额外效果
        if (isDead) {
          console.log(`鱼死亡，显示飘动分数: ${score}`);
          
          // 检查是否是章鱼，如果是则触发墨水效果
          if (fish && fish.fishCategory === FISH_CATEGORIES.OCTOPUS) {
            console.log('章鱼被击杀，触发扣分效果');
            // 播放墨水音效
            audioManager.playEffect('ink', 'assets/mp3/sfx_ink.mp3');
            
            // 扣除分数，而不是应用墨水效果
            const penaltyScore = 50; // 惩罚分数
            player.score = Math.max(0, player.score - penaltyScore); // 确保分数不会变为负数
            hud.updateScore(player.score);
            
            // 显示扣分提示
            showFloatingScore(fish.sprite.x, fish.sprite.y, -penaltyScore);
            
            // 触发长振动
            try {
              wx.vibrateLong();
              console.log('触发长振动');
            } catch (error) {
              console.error('触发长振动失败:', error);
            }
            
            // 章鱼被击杀时已经扣除分数，所以不应该再显示加分动画
            return; // 直接返回，不执行后面显示得分的部分
          } else {
            // 普通鱼播放金币音效
            audioManager.playEffect('coin', 'assets/mp3/coin.mp3');
            // 触发短震动
            try {
              wx.vibrateShort({type: 'light'});
              console.log('触发短振动');
            } catch (error) {
              console.error('触发短振动失败:', error);
            }
          }
          
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
  const scoreStr = score > 0 ? `+${score}` : `${score}`;
  
  // 计算总宽度，用于居中
  let totalWidth = 0;
  
  // 首先添加"+"号
  const plusText = new PIXI.Text('+', {
    fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
    fontSize: 24,
    fill: 0xFFFF00,
    fontWeight: 'bold',
    stroke: 0x000000,
    strokeThickness: 5,
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
          strokeThickness: 5,
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
      strokeThickness: 5,
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
  // 设置root容器为可交互的
  root.interactive = true;
  root.interactiveChildren = true;
  
  // 监听点击/触摸事件
  root.on('pointerdown', (event) => {
    console.log('触摸开始:', event);
    console.log('游戏状态:', isGameStarted ? '已开始' : '未开始');

    // 只有游戏开始后才能发射子弹
    if (isGameStarted && player) {
      console.log('发射子弹')
      player.shoot(event.x, event.y, root)
    }
  });
}

/**
 * 应用墨水效果
 */
function applyInkEffect() {
  console.log('应用墨水滤镜效果');
  
  // 如果已有墨水效果正在进行，先清除
  if (isInkEffectActive) {
    if (inkEffectTimeout) {
      clearTimeout(inkEffectTimeout);
      inkEffectTimeout = null;
    }
  } else {
    // 创建新的墨水效果滤镜 - 使用 KawaseBlurFilter
    inkFilter = new KawaseBlurFilter(10, 8, true);
    
    // 创建墨水颜色覆盖层 - 深蓝黑色半透明
    inkOverlay = new PIXI.Sprite(PIXI.Texture.WHITE);
    inkOverlay.width = screen.width;
    inkOverlay.height = screen.height;
    inkOverlay.tint = 0x000033; // 深蓝黑色
    inkOverlay.alpha = 0.4; // 40%透明度
    inkOverlay.zIndex = 1000; // 确保在最上层
    
    // 应用滤镜到场景
    if (root.filters) {
      root.filters.push(inkFilter);
    } else {
      root.filters = [inkFilter];
    }
    
    // 添加覆盖层到场景
    root.addChild(inkOverlay);
    
    isInkEffectActive = true;
    console.log('墨水效果已应用到场景');
  }
  
  // 2秒后开始淡出墨水效果
  inkEffectTimeout = setTimeout(() => {
    fadeOutInkEffect();
  }, 2000);
}

/**
 * 淡出墨水效果
 */
function fadeOutInkEffect() {
  if ((!inkFilter && !inkOverlay) || !isInkEffectActive) return;
  
  console.log('开始淡出墨水效果');
  
  const startTime = Date.now();
  const duration = 1500; // 1.5秒淡出时间
  const initialBlur = inkFilter?.blur || 0;
  const initialQuality = inkFilter?.quality || 0;
  const initialAlpha = inkOverlay?.alpha || 0;
  
  const fadeOutTicker = (delta: number) => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // 逐渐减少模糊强度，产生墨水散开的效果
    if (inkFilter) {
      inkFilter.blur = initialBlur * (1 - progress);
      inkFilter.quality = Math.max(1, Math.floor(initialQuality * (1 - progress)));
    }
    
    // 逐渐减少覆盖层透明度
    if (inkOverlay) {
      inkOverlay.alpha = initialAlpha * (1 - progress);
    }
    
    // 淡出完成后移除滤镜和覆盖层
    if (progress >= 1) {
      ticker.remove(fadeOutTicker);
      
      // 移除滤镜
      if (root.filters && inkFilter) {
        const filterIndex = root.filters.indexOf(inkFilter);
        if (filterIndex > -1) {
          root.filters.splice(filterIndex, 1);
          if (root.filters.length === 0) {
            root.filters = null;
          }
        }
      }
      
      // 移除覆盖层
      if (inkOverlay && inkOverlay.parent) {
        inkOverlay.parent.removeChild(inkOverlay);
      }
      
      inkFilter = null;
      inkOverlay = null;
      isInkEffectActive = false;
      console.log('墨水效果已完全淡出并移除');
    }
  };
  
  // 添加到ticker
  ticker.add(fadeOutTicker);
}

/**
 * 处理游戏时间结束
 * @param {number} finalScore - 最终得分
 */
function handleGameTimeUp(finalScore: number) {
  console.log('游戏时间结束，最终得分:', finalScore);
  
  // 停止游戏
  isGameStarted = false;
  
  // 获取玩家信息
  let userProfile = null;
  try {
    const profileStr = getStorageSync('userProfile');
    if (profileStr) {
      userProfile = JSON.parse(profileStr);
      console.log('获取到用户信息:', userProfile);
    }
  } catch (error) {
    console.error('获取用户信息失败:', error);
  }
  
  // 单人模式只显示当前玩家
  const playerInfo = {
    nickname: userProfile?.nickName || '当前玩家',
    score: finalScore,
    avatar: userProfile?.avatarUrl || null
  };
  
  const rankings = [playerInfo];
  
  // 显示计分板
  if (hud) {
    hud.showScoreboard(finalScore, rankings);
  }
}

/**
 * 退出游戏，返回主菜单
 */
function exitGame() {
  console.log('退出游戏，返回主菜单');
  
  // 停止游戏
  isGameStarted = false;
  
  // 清理子弹和炮台（确保在设置player为null前处理）
  if (player) {
    // 如果存在炮台系统，确保完全清理
    if (player.batterySystem) {
      try {
        // 清除子弹
        player.batterySystem.clearBullets();
        
        // 显式移除炮台和底座
        player.batterySystem.removeFromContainer();
        
        // 强制移除炮台和底座的引用
        player.batterySystem = null;
      } catch (error) {
        console.error('清理炮台系统失败:', error);
      }
    }
    
    // 执行player的所有清理操作
    try {
      // 如果player有自己的destroy方法可以调用（当前代码中未实现）
      if (typeof player.destroy === 'function') {
        player.destroy();
      }
    } catch (error) {
      console.error('清理玩家对象失败:', error);
    }
  }
  
  // 清理HUD
  if (hud) {
    hud.hide();
  }
  
  // 清理玩家引用，确保垃圾回收
  player = null;
  
  // 先重置可能残留的滤镜
  if (fishContainer) {
    fishContainer.filters = null;
  }
  
  // 显示游戏开始界面
  if (gameStartUI) {
    gameStartUI.show(root);
    
    // 确保在下一帧应用模糊滤镜，避免可能的渲染问题
    setTimeout(() => {
      // 应用模糊滤镜到鱼群
      if (fishContainer) {
        console.log('重新应用鱼群模糊滤镜');
        gameStartUI.applyBlurFilter(fishContainer);
      }
    }, 50);
  }
}

/**
 * 重新开始游戏
 */
function restartGame() {
  console.log('重新开始游戏');
  
  // 停止当前游戏
  isGameStarted = false;
  
  // 清理子弹和炮台（确保在设置player为null前处理）
  if (player) {
    // 如果存在炮台系统，确保完全清理
    if (player.batterySystem) {
      try {
        // 清除子弹
        player.batterySystem.clearBullets();
        
        // 显式移除炮台和底座
        player.batterySystem.removeFromContainer();
        
        // 强制移除炮台和底座的引用
        player.batterySystem = null;
      } catch (error) {
        console.error('清理炮台系统失败:', error);
      }
    }
    
    // 执行player的所有清理操作
    try {
      // 如果player有自己的destroy方法可以调用（当前代码中未实现）
      if (typeof player.destroy === 'function') {
        player.destroy();
      }
    } catch (error) {
      console.error('清理玩家对象失败:', error);
    }
  }
  
  // 清理玩家引用，确保垃圾回收
  player = null;
  
  // 隐藏计分板
  if (hud) {
    hud.hideScoreboard();
  }
  
  // 延迟一点时间再开始新游戏，避免立即点击
  setTimeout(() => {
    startSinglePlayerGame();
  }, 500);
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

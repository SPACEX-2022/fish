import * as PIXI from 'pixi.js'
import {animate} from 'popmotion'
import {stage, screen, ticker} from '~/core'
import Player from '../../modules/Player'

let root: PIXI.Container
let fishes: Fish[] = []
let player: any

const bound = screen.clone().pad(100)
const {max, random, PI, sin, cos} = Math

interface Fish extends PIXI.Sprite {
  speed: number
  direction: number
  turnSpeed: number
  hit: boolean
  hitEffect: number
}


function init() {
  root = new PIXI.Container()

  const bed = PIXI.Sprite.from('bkg.jpg')
  bed.zIndex = -1
  bed.scale.set(max(screen.width / bed.width, screen.height / bed.height))

  /* 水面 */
  const overlay = PIXI.TilingSprite.from('overlay.png', {width: screen.width, height: screen.height})
  overlay.zIndex = 1

  /* 潭中鱼可百许头 */
  for (let i = 0; i < 16; i++) {
    const fish = PIXI.Sprite.from(`fish.${i % 4 + 1}.png`) as Fish
    fish.anchor.set(.5)
    fish.scale.set(.5)

    fish.speed = (1 + random()) * 2
    fish.direction = random() * PIXI.PI_2
    fish.turnSpeed = random() - .8

    fish.position.set(random() * screen.width, random() * screen.height)
    fish.anchor.set(.5)
    fish.hit = false // 是否被击中
    fish.hitEffect = 0 // 击中特效计数器

    fishes.push(fish)
  }

  root.addChild(overlay, bed, ...fishes)
  
  // 初始化玩家
  player = new Player(null)
  
  // 初始化炮台并添加到root容器
  player.initBattery(root)
  
  // 添加触摸/点击事件
  setupTouchEvents()

  ticker.add(() => {
    // 更新子弹位置
    player.updateBullets(null, root);
    
    // 检测子弹与鱼的碰撞
    checkCollisions();
    
    for (const fish of fishes) {
      // 处理鱼的击中特效
      if (fish.hit) {
        fish.hitEffect += 1;
        
        // 闪烁效果
        fish.alpha = fish.hitEffect % 10 < 5 ? 0.5 : 1;
        
        // 特效持续30帧后恢复正常
        if (fish.hitEffect > 30) {
          fish.hit = false;
          fish.hitEffect = 0;
          fish.alpha = 1;
        }
      }
      
      fish.direction += fish.turnSpeed * .01
      fish.direction %= PIXI.PI_2
      fish.rotation = fish.direction
      fish.x -= cos(fish.rotation) * fish.speed
      fish.y -= sin(fish.rotation) * fish.speed

      fish.x < bound.left ? fish.x = bound.right :
      fish.x > bound.right ? fish.x = bound.left : 0

      fish.y < bound.top ? fish.y = bound.bottom :
      fish.y > bound.bottom ? fish.y = bound.top : 0
    }


    overlay.tilePosition.x -= 1
    overlay.tilePosition.y -= 1

    overlay.tilePosition.x %= 512
    overlay.tilePosition.y %= 512
  })
}

/**
 * 检测子弹与鱼的碰撞
 */
function checkCollisions() {
  if (!player || !player.bullets) return;
  
  // 遍历所有子弹
  for (let i = player.bullets.length - 1; i >= 0; i--) {
    const bullet = player.bullets[i];
    
    // 遍历所有鱼
    for (const fish of fishes) {
      // 跳过已击中的鱼
      if (fish.hit) continue;
      
      // 简单的矩形碰撞检测
      const bulletBounds = bullet.getBounds();
      const fishBounds = fish.getBounds();
      
      if (bulletBounds.x < fishBounds.x + fishBounds.width &&
          bulletBounds.x + bulletBounds.width > fishBounds.x &&
          bulletBounds.y < fishBounds.y + fishBounds.height &&
          bulletBounds.y + bulletBounds.height > fishBounds.y) {
        
        console.log('碰撞检测：子弹与鱼');
        
        // 显示爆炸特效
        player.showExplosion(bullet.x, bullet.y, root);
        
        // 设置鱼的击中状态
        fish.hit = true;
        fish.hitEffect = 0;
        
        // 移除子弹
        root.removeChild(bullet);
        player.bullets.splice(i, 1);
        
        // 一个子弹只能击中一条鱼
        break;
      }
    }
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
      player.shootBullet(touch.clientX, touch.clientY, root)
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

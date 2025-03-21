import * as PIXI from 'pixi.js'
import {autorun, reaction, runInAction} from 'mobx'
import {animate, easeInOut} from 'popmotion'
import {loader, stage, store, screen, sound} from '~/core'
import {delay, download, error, ok, readFile, sync, toast} from '~/util'
import * as navigator from '~/navigator'
import {Layout} from '~/lib/ui'

let root: PIXI.Container
let acts = [] as Array<{stop: Function}>

async function init() {
  root = new PIXI.Container()

  const layout = new Layout({
    alignItem: 'center',
    areas: [
      [{w: 735 * .3, h: 409 * .3}],
    ],
    anchor: {x: .5, y: .5},
  })

  // 创建水平容器，用于放置logo和文字
  const container = new PIXI.Container()
  
  // 添加logo
  const pixi = PIXI.Sprite.from('dl-logo.png')
  pixi.scale.set(1.5)
  pixi.anchor.set(.5, .5)
  container.addChild(pixi)
  
  // 添加文字
  const text = "小游戏开发";
  const textStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontWeight: 'bold',
    fill: ['#ffffff'],
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
  });
  
  // 创建每个字的文本对象
  const textChars = [];
  let totalWidth = pixi.width + 180; // logo宽度加间距
  
  for (let i = 0; i < text.length; i++) {
    const char = new PIXI.Text(text[i], textStyle);
    char.anchor.set(0, 0.5);
    char.position.x = totalWidth;
    char.alpha = 0; // 初始透明
    
    totalWidth += char.width + 5; // 字符间距5
    textChars.push(char);
    container.addChild(char);
  }
  
  // 居中整个容器
  container.pivot.x = totalWidth / 2;
  layout.addChild(container);

  layout.scale.set(store.mem.screen.dr)
  layout.position.set(screen.width / 2, screen.height / 2)

  root.addChild(layout)

  stage.addChild(root)

  // Logo呼吸效果
  acts.push(animate({
    from: 1,
    to: .2,
    ease: easeInOut,
    duration: 2e3,
    repeat: Infinity,
    repeatType: 'mirror',
    onUpdate: v => pixi.alpha = v
  }))
  
  // 文字逐个跳动出现
  textChars.forEach((char, index) => {
    // 延迟显示每个字符
    setTimeout(() => {
      // 跳动动画
      acts.push(animate({
        from: { y: -30, alpha: 0 },
        to: { y: 0, alpha: 1 },
        duration: 500,
        ease: easeInOut,
        onUpdate: (v) => {
          char.position.y = v.y;
          char.alpha = v.alpha;
        },
        onComplete: () => {
          // 添加持续的小幅跳动效果
          acts.push(animate({
            from: 0,
            to: 1,
            duration: 1500,
            ease: easeInOut,
            repeat: Infinity,
            repeatType: 'mirror',
            onUpdate: (v) => {
              char.position.y = Math.sin(v * Math.PI) * 8;
            }
          }));
        }
      }));
    }, 300 * index); // 每个字符间隔300ms出现
  });

  await new Promise<any>(resolve => {
    loader
      .add('misc.json')
      .load(resolve)
  })

  // 模拟一些延时操作
  await Promise.all([
    delay(3),
  ])

  navigator
}

export async function show() {
  await init()
}

export function hide() {
  acts.forEach(act => act.stop())
  acts = []

  // 加载页不会再用到
  root.destroy({children: true})
}

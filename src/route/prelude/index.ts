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
  pixi.scale.set(2)
  pixi.anchor.set(.5, .5)
  container.addChild(pixi)
  
  // 添加文字
  const text = "游戏工作室";
  const textStyle = new PIXI.TextStyle({
    // 使用科技感字体
    fontFamily: 'YouYuan, Microsoft YaHei, PingFang SC, sans-serif',
    fontSize: 70,
    fontWeight: 'bold',
    // 使用蓝色科技感配色
    fill: ['#4FC3F7', '#03A9F4', '#0288D1'], // 浅蓝到深蓝渐变
    fillGradientType: 1,
    fillGradientStops: [0, 0.5, 1],
    // 精简描边效果
    stroke: '#01579B',
    strokeThickness: 4,
    // 适度阴影效果
    dropShadow: true,
    dropShadowColor: '#000033',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 4,
    // 适当间距
    letterSpacing: 4,
    // 清晰边缘
    lineJoin: 'round',
  });
  
  // 创建每个字的文本对象
  const textChars = [];
  let totalWidth = pixi.width + 230; // logo宽度加间距
  
  for (let i = 0; i < text.length; i++) {
    const char = new PIXI.Text(text[i], textStyle);
    char.anchor.set(0, 0.5);
    char.position.x = totalWidth;
    char.alpha = 0; // 初始透明
    
    totalWidth += char.width + 6; // 适当字符间距
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
  
  // 文字逐个跳动出现，保持灵动效果
  textChars.forEach((char, index) => {
    // 延迟显示每个字符
    setTimeout(() => {
      // 跳动动画
      acts.push(animate({
        from: { y: -20, alpha: 0 },
        to: { y: 0, alpha: 1 },
        duration: 400,
        ease: easeInOut,
        onUpdate: (v) => {
          char.position.y = v.y;
          char.alpha = v.alpha;
        },
        onComplete: () => {
          // 添加简洁的漂浮动画效果
          acts.push(animate({
            from: 0,
            to: 1,
            duration: 1800,
            ease: easeInOut,
            repeat: Infinity,
            repeatType: 'mirror',
            onUpdate: (v) => {
              // 轻微上下浮动
              char.position.y = Math.sin(v * Math.PI) * 5;
              // 轻微的科技感光晕效果
              // const blurFilter = new PIXI.filters.BlurFilter();
              // blurFilter.blur = Math.sin(v * Math.PI) * 2;
              // blurFilter.quality = 3;
              // char.filters = [blurFilter];
              // // 动态调整色彩亮度
              // char.tint = PIXI.utils.rgb2hex([
              //   0.3 + 0.7 * Math.sin(v * Math.PI * 0.5 + 0.5),
              //   0.6 + 0.4 * Math.sin(v * Math.PI * 0.5),
              //   0.8 + 0.2 * Math.sin(v * Math.PI * 0.5 + 0.2)
              // ]);
            }
          }));
        }
      }));
    }, 250 * index); // 较短间隔，更加流畅
  });

  await new Promise<any>(resolve => {
    loader
      .add('misc.json')
      .add('score.json')
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

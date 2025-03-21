# 捕鱼达人微信小游戏架构设计

## 整体架构

项目采用模块化设计，使用PixiJS v6.x作为游戏渲染引擎，主要分为以下几部分：

- **核心模块**：管理游戏循环、舞台、资源加载等基础功能
- **场景管理**：处理不同游戏场景的切换与显示
- **游戏对象**：包括玩家、鱼类、子弹等游戏元素
- **UI系统**：处理游戏界面元素的显示与交互

## 文件结构

### 核心文件

- `src/core/`: 包含游戏核心功能如舞台管理、ticker等
  - `stage.ts`: 管理游戏主舞台
  - `screen.ts`: 处理屏幕尺寸和适配
  - `ticker.ts`: 管理游戏循环和帧更新

### 路由与场景

- `src/route/`: 管理游戏的不同场景路由
  - `game/index.ts`: 主游戏场景，包含游戏主循环、鱼群管理和碰撞检测
  - `prelude/`: 游戏开始前的加载和引导场景

### 模块文件

- `src/modules/`: 包含游戏各功能模块
  - `Player.js`: 玩家类，管理炮台控制和子弹发射
  - (未来可能添加) `Fish.js`: 鱼类管理
  - (未来可能添加) `Score.js`: 得分系统

### 工具与类型

- `src/util/`: 通用工具函数
- `src/type.d.ts`: TypeScript类型定义

## 关键类与组件

### Player类

管理玩家相关的所有功能：

- 炮台的显示和旋转控制
- 子弹的发射和管理
- 爆炸特效的显示

```javascript
class Player {
  constructor()
  initBattery()
  rotateBattery(targetX, targetY)
  shootBullet(targetX, targetY)
  showExplosion(x, y)
  updateBullets(delta)
}
```

### 游戏场景（Game）

作为游戏的主要场景，负责：

- 初始化游戏环境和对象
- 管理玩家输入和触摸事件
- 处理碰撞检测和游戏逻辑
- 更新鱼群的位置和状态

```typescript
function init()
function checkCollisions()
function setupTouchEvents()
export function show()
export function hide()
```

## 数据流

1. 用户触摸屏幕 → `setupTouchEvents()` → `player.shootBullet()`
2. 游戏循环(ticker) → 更新子弹位置 → 检测碰撞 → 更新鱼的状态
3. 碰撞发生 → 显示爆炸效果 → 更新鱼的状态 → 更新分数(未实现)

## 未来拓展

1. 添加分数和金币系统
2. 实现不同类型的鱼和特殊效果
3. 增加炮台升级机制
4. 添加音效和背景音乐
5. 实现多人对战模式

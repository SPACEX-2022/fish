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
  - `Fish.js`: 鱼类，管理鱼的属性、行为和状态
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
  initBattery(container)
  rotateBattery(targetX, targetY)
  shootBullet(targetX, targetY, container)
  showExplosion(x, y, container)
  updateBullets(delta, container)
}
```

### Fish类

管理鱼的属性、行为和状态：

- 鱼的基础属性（类型、大小、血量）
- 游动行为（速度、方向、转向速度）
- 习性特征（正常、逃跑、反击、随机）
- 被击中状态管理

```javascript
class Fish {
  constructor(type, options)
  update(delta, bound)
  handleHitBehavior()
  takeDamage(damage)
  getBounds()
  getScore()
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
function createFishSchool()
function updateFishes(delta)
function checkCollisions()
function setupTouchEvents()
export function show()
export function hide()
```

## 数据流

1. 用户触摸屏幕 → `setupTouchEvents()` → `player.shootBullet()`
2. 游戏循环(ticker) → 更新子弹位置 → 检测碰撞 → 更新鱼的状态
3. 碰撞发生 → 显示爆炸效果 → 鱼接收伤害 → 根据习性改变行为
4. 鱼死亡 → 移除鱼精灵 → 生成新鱼 → 更新分数(未实现)

## 鱼类系统设计

游戏中鱼类系统采用了面向对象设计，具有以下特点：

1. **属性多样化**：
   - 血量(health)：决定鱼被击中几次后死亡
   - 体积大小(size)：影响视觉显示和碰撞检测范围
   - 速度(speed)：控制鱼游动的快慢

2. **行为多样化**：
   - 正常(NORMAL)：常规游动，被击中后行为不变
   - 逃跑(ESCAPE)：被击中后会加速逃离
   - 反击(AGGRESSIVE)：被击中后会掉头反向而行
   - 随机(ERRATIC)：被击中后会随机改变方向

3. **生命周期管理**：
   - 创建：在游戏初始化或旧鱼死亡时创建
   - 更新：每帧更新位置和状态
   - 受击：接收伤害并改变行为
   - 死亡：移除并在随机位置生成新鱼

4. **奖励系统**：
   - 根据鱼的大小和血量计算分值
   - 难度越高的鱼提供的分值越高

## 未来拓展

1. 添加分数和金币系统
2. 实现不同类型的鱼和特殊效果
3. 增加炮台升级机制
4. 添加音效和背景音乐
5. 实现多人对战模式

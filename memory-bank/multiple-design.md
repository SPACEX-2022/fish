# 捕鱼游戏多人模式实施文档

## 一、整体架构设计

### 网络架构
- 客户端与服务器采用 WebSocket 实时通信
- 复用现有心跳连接，扩展功能支持游戏数据传输
- 服务端作为权威节点，客户端作为表现层

### 主要功能划分
- **服务端**：游戏逻辑核心，负责碰撞检测、鱼群生成、玩家状态同步
- **客户端**：用户输入处理、游戏效果渲染、接收服务端指令

## 二、客户端改造

### 1. 网络层
- 扩展 HeartbeatConnection 类，增加游戏数据传输功能
- 设计多人游戏数据收发接口
- 添加断线重连机制

### 2. 游戏逻辑层
- 重构 Game 类，分离单人/多人模式
- 新增 MultiPlayerGame 类处理多人逻辑
- 修改碰撞检测和鱼群生成为接收服务端数据

### 3. 输入处理
- 捕获用户射击动作，转发至服务端
- 优化输入延迟，添加客户端预测

### 4. 界面调整
- 完善房间系统，显示其他玩家信息
- 添加多人游戏计分板
- 增加游戏结算界面
- **新增**：玩家布局调整为4个位置，分布在屏幕顶部和底部

## 三、服务端支持

### 1. 房间管理系统
- 创建/销毁房间
- 玩家加入/离开处理
- 游戏开始/结束流程
- **新增**：最多支持4个玩家，处理玩家位置分配

### 2. 游戏逻辑实现
- 鱼群生成算法
- 碰撞检测系统
- 分数计算与同步
- **新增**：鱼群行为系统，处理受攻击后的行为变化

### 3. 实时通信模块
- WebSocket 服务器实现
- 消息序列化/反序列化
- 心跳检测与会话维护

### 4. 数据存储
- 玩家战绩记录
- 游戏记录持久化
- 道具系统数据

## 四、通信协议设计

### 基础消息格式
```json
{
  "type": "消息类型",
  "roomId": "房间ID",
  "playerId": "玩家ID",
  "data": {
    // 具体数据
  },
  "timestamp": 1234567890
}
```

### 主要消息类型
1. **room**: 房间管理相关消息
2. **game**: 游戏状态同步
3. **action**: 玩家操作
4. **fish**: 鱼群数据
5. **score**: 得分信息
6. **player**: 玩家信息

### 详细消息格式

#### 玩家初始化
```json
{
  "type": "player",
  "roomId": "room123",
  "playerId": "player1",
  "data": {
    "action": "init",
    "position": {
      "x": 100,
      "y": 50
    },
    "orientation": "top", // "top" 或 "bottom"
    "nickname": "玩家昵称",
    "avatar": "头像URL",
    "weaponType": 1,
    "coin": 1000
  }
}
```

#### 玩家射击
```json
{
  "type": "action",
  "roomId": "room123",
  "playerId": "player1",
  "data": {
    "action": "shoot",
    "bulletId": "bullet123",
    "angle": 45,
    "power": 1,
    "weaponType": 1,
    "position": {
      "x": 100,
      "y": 50
    },
    "clientTime": 1234567890
  },
  "timestamp": 1234567890
}
```

#### 鱼群生成
```json
{
  "type": "fish",
  "roomId": "room123",
  "data": {
    "action": "spawn",
    "fishes": [
      {
        "id": "fish1",
        "type": 1,
        "path": [
          {"x": 0, "y": 100, "time": 0},
          {"x": 100, "y": 150, "time": 1000},
          {"x": 200, "y": 100, "time": 2000}
        ],
        "hp": 10,
        "speed": 1,
        "behavior": {
          "type": "normal",
          "params": {}
        }
      },
      {
        "id": "fish2",
        "type": 3,
        "path": [...],
        "hp": 30,
        "speed": 0.8,
        "behavior": {
          "type": "schooling",
          "params": {
            "leaderId": "fish1",
            "offset": {"x": 20, "y": 10}
          }
        }
      }
    ]
  },
  "timestamp": 1234567890
}
```

#### 鱼群更新行为
```json
{
  "type": "fish",
  "roomId": "room123",
  "data": {
    "action": "updateBehavior",
    "fishes": [
      {
        "id": "fish1",
        "behavior": {
          "type": "escape",
          "params": {
            "direction": 45,
            "speedMultiplier": 1.5,
            "duration": 2000
          }
        },
        "newPath": [
          {"x": 100, "y": 150, "time": 0},
          {"x": 150, "y": 200, "time": 1000},
          {"x": 200, "y": 250, "time": 2000}
        ]
      }
    ]
  },
  "timestamp": 1234567890
}
```

#### 碰撞结果
```json
{
  "type": "game",
  "roomId": "room123",
  "data": {
    "event": "collision",
    "collisions": [
      {
        "bulletId": "bullet1",
        "playerId": "player1",
        "fishId": "fish1",
        "position": {"x": 120, "y": 160},
        "damage": 10,
        "killed": true,
        "score": 100
      }
    ]
  },
  "timestamp": 1234567890
}
```

#### 子弹抵消
```json
{
  "type": "game",
  "roomId": "room123",
  "data": {
    "event": "bulletCollision",
    "bullets": [
      {
        "bulletId1": "bullet1",
        "bulletId2": "bullet2",
        "playerId1": "player1",
        "playerId2": "player2",
        "position": {"x": 150, "y": 150},
        "effect": "cancel" // 可选值: "cancel", "reflect", "explode"
      }
    ]
  },
  "timestamp": 1234567890
}
```

#### 游戏状态更新
```json
{
  "type": "game",
  "roomId": "room123",
  "data": {
    "event": "stateUpdate",
    "state": "playing", // "waiting", "playing", "paused", "ended"
    "timeRemaining": 180,
    "players": [
      {
        "id": "player1",
        "score": 1500,
        "coin": 2500,
        "weaponType": 2,
        "combo": 3
      },
      {
        "id": "player2",
        "score": 1200,
        "coin": 2000,
        "weaponType": 1,
        "combo": 0
      }
    ]
  },
  "timestamp": 1234567890
}
```

## 五、玩家布局设计

### 布局方案
- 4个玩家位置分布在屏幕顶部和底部
- 位置分配：
  - 玩家1：屏幕底部左侧
  - 玩家2：屏幕底部右侧
  - 玩家3：屏幕顶部左侧
  - 玩家4：屏幕顶部右侧

### 位置数据格式
```json
{
  "positions": [
    {
      "id": 1,
      "orientation": "bottom",
      "side": "left",
      "defaultX": 0.25, // 屏幕宽度的比例
      "defaultY": 0.95  // 屏幕高度的比例
    },
    {
      "id": 2,
      "orientation": "bottom",
      "side": "right",
      "defaultX": 0.75,
      "defaultY": 0.95
    },
    {
      "id": 3,
      "orientation": "top",
      "side": "left",
      "defaultX": 0.25,
      "defaultY": 0.05
    },
    {
      "id": 4,
      "orientation": "top",
      "side": "right",
      "defaultX": 0.75,
      "defaultY": 0.05
    }
  ]
}
```

## 六、鱼群行为系统

### 基础行为类型
1. **normal**: 正常路径移动
2. **schooling**: 成群结队，跟随领头鱼
3. **escape**: 受到攻击后逃跑
4. **aggressive**: 受到攻击后反击或加速
5. **zigzag**: 变速曲线游动

### 行为参数设计
```json
{
  "normal": {
    "speedMultiplier": 1.0
  },
  "schooling": {
    "leaderId": "鱼的ID",
    "offset": {"x": 0, "y": 0},
    "followDelay": 200
  },
  "escape": {
    "direction": 0-360,
    "speedMultiplier": 1.5,
    "duration": 2000,
    "turnRate": 0.5
  },
  "aggressive": {
    "speedMultiplier": 1.2,
    "targetPlayerId": "player1",
    "duration": 3000
  },
  "zigzag": {
    "amplitude": 30,
    "frequency": 0.5,
    "speedMultiplier": 0.9
  }
}
```

### 行为转换规则
1. 受到攻击但未击杀时
   - 普通鱼: 50%概率切换为escape行为
   - 大型鱼: 30%概率切换为aggressive行为
   - 特殊鱼: 根据鱼的特性定制行为

2. 领头鱼被击杀时
   - 群体中随机选择新领头鱼
   - 若无法选择，所有鱼切换为escape行为

## 七、子弹抵消系统

### 基本规则
1. 不同玩家的子弹相撞时触发判定
2. 判定结果取决于子弹类型、威力和角度

### 子弹属性
```json
{
  "bulletTypes": [
    {
      "id": 1,
      "name": "普通子弹",
      "power": 1,
      "radius": 5,
      "speed": 10,
      "collisionBehavior": "cancel"
    },
    {
      "id": 2,
      "name": "穿透子弹",
      "power": 2,
      "radius": 6,
      "speed": 12,
      "collisionBehavior": "continue"
    },
    {
      "id": 3,
      "name": "爆炸子弹",
      "power": 3,
      "radius": 8,
      "speed": 8,
      "collisionBehavior": "explode",
      "explosionRadius": 50
    }
  ]
}
```

### 抵消效果类型
1. **cancel**: 两颗子弹相互抵消
2. **continue**: 高威力子弹继续前进，低威力子弹消失
3. **reflect**: 子弹反弹，改变方向
4. **explode**: 触发爆炸效果，影响范围内鱼群

## 八、实施路径

### 第一阶段：基础架构
1. 服务端WebSocket通信框架搭建，复用心跳连接
2. 客户端多人模式UI界面实现
3. 房间系统基础功能实现

### 第二阶段：玩家系统
1. 实现玩家位置布局
2. 玩家状态同步机制
3. 玩家输入处理与服务端通信

### 第三阶段：鱼群系统
1. 服务端鱼群生成与路径计算
2. 鱼群行为系统实现
3. 鱼群状态同步到客户端

### 第四阶段：交互系统
1. 子弹碰撞检测
2. 子弹与鱼的碰撞系统
3. 子弹间抵消系统

### 第五阶段：优化完善
1. 网络延迟优化
2. 断线重连机制
3. 游戏平衡性调整
4. UI/UX优化

## 九、技术难点与解决方案

### 网络延迟处理
- 采用客户端预测 + 服务端验证模式
- 关键操作添加时间戳，服务端支持时间回溯验证
- 使用插值平滑处理位置更新

### 鱼群行为系统
- 服务端计算基础路径
- 动态行为变化在服务端处理后同步给客户端
- 客户端添加过渡动画平滑行为变化

### 多人游戏平衡性
- 玩家武器系统设计差异化但平衡
- 子弹抵消系统提供策略性玩法
- 动态调整鱼群生成难度根据玩家数量和得分情况

### 状态同步优化
- 增量更新减少数据传输
- 优先同步视野范围内实体
- 使用压缩算法减少数据包大小

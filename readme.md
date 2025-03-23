# 捕鱼达人微信小游戏

使用 PixiJS 开发的微信小游戏，玩法模仿游戏厅街机-捕鱼达人。本项目将 [pixi-filters](https://github.com/pixijs/pixi-filters) 搬运到微信小游戏环境，展示 PixiJS 在微信小游戏中的应用。

https://github.com/JetLua/fish/assets/6738986/c54c2890-a25b-493b-8a76-f6256cb9cb02

## 游戏特点

- 基于 PixiJS 引擎开发，性能流畅
- 精美的游戏界面和海洋生物动画效果
- 支持单人模式和多人模式（多人模式开发中）
- 完整的微信小游戏生命周期
- 符合微信小游戏隐私保护规范

## 开发

```bash
# clone 项目
git clone git@github.com:JetLua/fish.git

# 安装依赖
pnpm i

# 运行
pnpm dev

# 发布
pnpm build

# 微信开发者工具选择 dist 目录
```

## 用户隐私和授权

游戏实现了完整的微信小游戏隐私保护规范：

1. 首次进入游戏时，弹出隐私协议弹窗，用户需点击"同意并继续"
2. 使用 `wx.requirePrivacyAuthorize` 获取用户隐私授权
3. 获取用户头像和昵称信息，支持微信原生授权按钮
4. 用户信息仅用于游戏内显示

## 提示

1. `dist/project.config.json`里的`appid`按需设置
2. 上传时请开启微信开发者工具的"**将JS编译成ES5**"
3. 游戏使用了 WebSocket 进行心跳连接，需确保服务器支持

## 技术架构

- 前端框架：PixiJS
- 动画引擎：popmotion
- 网络通信：WebSocket
- 运行环境：微信小游戏

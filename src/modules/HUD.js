import * as PIXI from 'pixi.js';
import { screen, ticker } from '~/core';
import { Layout } from '../lib/ui/Layout';

/**
 * HUD(Heads-Up Display)类
 * 负责显示游戏中的用户界面元素，如分数、连击数等
 */
class HUD {
  /**
   * 创建一个HUD实例
   * @param {Object} options - 配置选项
   */
  constructor(options = {}) {
    // 创建主容器，并设置为可排序
    this.container = new PIXI.Container();
    this.container.sortableChildren = true;
    this.container.zIndex = 100; // 确保HUD显示在最上层
    
    // 跟踪显示的数据
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.comboTimer = 0;
    this.comboTimeout = options.comboTimeout || 3000; // 连击超时时间(毫秒)
    
    // 存储UI元素
    this.elements = {};
    
    // 初始化基本UI元素
    this.initScoreDisplay();
    this.initComboDisplay();
    this.initExitButton();  // 添加退出按钮
    
    // 可由外部调用的更新回调，可以在这里添加更多更新逻辑
    this.updateCallbacks = {};
    
    // 游戏时间相关
    this.gameTime = 0;
    this.gameTimeLimit = options.gameTimeLimit || 60000; // 默认60秒
    this.gameTimerActive = false;
    this.onGameTimeUp = options.onGameTimeUp || null;
    
    // 注册到ticker以便更新连击计时器
    ticker.add(this.update.bind(this));
  }
  
  /**
   * 初始化分数显示
   */
  initScoreDisplay() {
    // 创建分数标签
    const scoreLabel = new PIXI.Text('分数:', {
      fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
      fontSize: 30,
      fill: 0xFFFFFF,
      fontWeight: 'bold',
      stroke: 0x000000,
      strokeThickness: 5,
      dropShadow: false,
      letterSpacing: 1
    });
    
    // 设置标签位置
    scoreLabel.position.set(20, 20);
    this.container.addChild(scoreLabel);
    this.elements.scoreLabel = scoreLabel;
    
    // 创建分数值容器
    const scoreValueContainer = new PIXI.Container();
    scoreValueContainer.position.set(120, 20);
    this.container.addChild(scoreValueContainer);
    this.elements.scoreValueContainer = scoreValueContainer;
    
    // 初始显示分数0
    this.updateScoreSprites(0);
  }
  
  /**
   * 使用精灵图更新分数显示
   * @param {number} score - 要显示的分数
   */
  updateScoreSprites(score) {
    const scoreValueContainer = this.elements.scoreValueContainer;
    if (!scoreValueContainer) return;
    
    // 清空当前数字精灵
    scoreValueContainer.removeChildren();
    
    // 将分数转换为字符串
    const scoreStr = score.toString();
    
    // 为每个数字创建精灵
    for (let i = 0; i < scoreStr.length; i++) {
      const digit = scoreStr[i];
      // 直接使用预加载的数字图片
      const digitSprite = PIXI.Sprite.from(`num${digit}.png`);
      
      // 设置数字位置
      digitSprite.position.x = i * (digitSprite.width + 2); // 数字之间留出2像素间距
      
      // 添加到容器
      scoreValueContainer.addChild(digitSprite);
    }
  }
  
  /**
   * 初始化连击显示
   */
  initComboDisplay() {
    // 创建连击容器 - 初始时隐藏
    const comboContainer = new PIXI.Container();
    comboContainer.visible = false;
    
    // 创建连击文本
    const comboText = new PIXI.Text('连击 x1', {
      fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
      fontSize: 28,
      fill: 0xFF8C00,
      fontWeight: 'bold',
      stroke: 0x000000,
      strokeThickness: 6,
      dropShadow: false,
      letterSpacing: 1
    });
    
    // 设置位置 - 屏幕中央偏上
    comboText.anchor.set(0.5);
    comboText.position.set(screen.width / 2, 80);
    
    // 添加到连击容器
    comboContainer.addChild(comboText);
    
    // 添加到主容器
    this.container.addChild(comboContainer);
    
    // 保存引用
    this.elements.comboContainer = comboContainer;
    this.elements.comboText = comboText;
  }
  
  /**
   * 初始化退出按钮
   */
  initExitButton() {
    // 创建退出按钮
    const exitButton = new PIXI.Container();
    exitButton.position.set(screen.width - 60, 40);
    
    // 创建退出按钮背景
    const buttonBg = new PIXI.Graphics();
    buttonBg.beginFill(0xFF3333, 0.7);
    buttonBg.lineStyle(2, 0xFFFFFF);
    buttonBg.drawCircle(0, 0, 20);
    buttonBg.endFill();
    
    // 创建X图标
    const exitIcon = new PIXI.Graphics();
    exitIcon.lineStyle(3, 0xFFFFFF);
    exitIcon.moveTo(-8, -8);
    exitIcon.lineTo(8, 8);
    exitIcon.moveTo(8, -8);
    exitIcon.lineTo(-8, 8);
    
    // 添加到退出按钮容器
    exitButton.addChild(buttonBg, exitIcon);
    exitButton.interactive = true;
    exitButton.buttonMode = true;
    
    // 点击事件
    exitButton.on('pointerdown', this.onExitButtonClick.bind(this));
    
    // 添加到主容器
    this.container.addChild(exitButton);
    this.elements.exitButton = exitButton;
  }
  
  /**
   * 退出按钮点击处理
   */
  onExitButtonClick() {
    // 显示确认对话框
    this.showExitConfirmDialog();
  }
  
  /**
   * 显示退出确认对话框
   */
  showExitConfirmDialog() {
    // 如果已存在确认对话框，则不重复创建
    if (this.elements.exitConfirmDialog) {
      return;
    }
    
    // 创建对话框容器
    const dialogContainer = new PIXI.Container();
    dialogContainer.zIndex = 200;
    
    // 创建半透明背景
    const overlay = new PIXI.Graphics();
    overlay.beginFill(0x000000, 0.7);
    overlay.drawRect(0, 0, screen.width, screen.height);
    overlay.endFill();
    
    // 创建对话框面板
    const panel = new PIXI.Graphics();
    panel.beginFill(0xFFFFFF);
    panel.lineStyle(2, 0x999999);
    panel.drawRoundedRect(screen.width / 2 - 150, screen.height / 2 - 100, 300, 200, 10);
    panel.endFill();
    
    // 创建标题文本
    const titleText = new PIXI.Text('确认退出', {
      fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
      fontSize: 24,
      fill: 0x333333,
      fontWeight: 'bold'
    });
    titleText.anchor.set(0.5, 0);
    titleText.position.set(screen.width / 2, screen.height / 2 - 80);
    
    // 创建提示文本
    const messageText = new PIXI.Text('确定要退出游戏吗？\n当前游戏进度将不会保存。', {
      fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
      fontSize: 18,
      fill: 0x333333,
      align: 'center'
    });
    messageText.anchor.set(0.5, 0);
    messageText.position.set(screen.width / 2, screen.height / 2 - 30);
    
    // 创建确认按钮
    const confirmButton = new PIXI.Graphics();
    confirmButton.beginFill(0xFF3333);
    confirmButton.drawRoundedRect(0, 0, 120, 40, 5);
    confirmButton.endFill();
    confirmButton.position.set(screen.width / 2 - 130, screen.height / 2 + 30);
    confirmButton.interactive = true;
    confirmButton.buttonMode = true;
    
    const confirmText = new PIXI.Text('确认', {
      fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
      fontSize: 18,
      fill: 0xFFFFFF
    });
    confirmText.anchor.set(0.5);
    confirmText.position.set(60, 20);
    confirmButton.addChild(confirmText);
    
    // 创建取消按钮
    const cancelButton = new PIXI.Graphics();
    cancelButton.beginFill(0x999999);
    cancelButton.drawRoundedRect(0, 0, 120, 40, 5);
    cancelButton.endFill();
    cancelButton.position.set(screen.width / 2 + 10, screen.height / 2 + 30);
    cancelButton.interactive = true;
    cancelButton.buttonMode = true;
    
    const cancelText = new PIXI.Text('取消', {
      fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
      fontSize: 18,
      fill: 0xFFFFFF
    });
    cancelText.anchor.set(0.5);
    cancelText.position.set(60, 20);
    cancelButton.addChild(cancelText);
    
    // 添加点击事件
    confirmButton.on('pointerdown', () => {
      this.hideExitConfirmDialog();
      // 触发游戏退出回调
      if (typeof this.onExitGame === 'function') {
        this.onExitGame();
      }
    });
    
    cancelButton.on('pointerdown', () => {
      this.hideExitConfirmDialog();
    });
    
    // 添加所有元素到对话框容器
    dialogContainer.addChild(overlay, panel, titleText, messageText, confirmButton, cancelButton);
    
    // 添加到主容器
    this.container.addChild(dialogContainer);
    this.elements.exitConfirmDialog = dialogContainer;
  }
  
  /**
   * 隐藏退出确认对话框
   */
  hideExitConfirmDialog() {
    if (this.elements.exitConfirmDialog && this.elements.exitConfirmDialog.parent) {
      this.elements.exitConfirmDialog.parent.removeChild(this.elements.exitConfirmDialog);
      this.elements.exitConfirmDialog = null;
    }
  }
  
  /**
   * 设置游戏退出回调函数
   * @param {Function} callback - 退出游戏时的回调函数
   */
  setOnExitGameCallback(callback) {
    if (typeof callback === 'function') {
      this.onExitGame = callback;
    }
  }
  
  /**
   * 启动游戏计时器
   */
  startGameTimer() {
    this.gameTime = 0;
    this.gameTimerActive = true;
    this.initTimeDisplay();
  }
  
  /**
   * 初始化时间显示
   */
  initTimeDisplay() {
    // 如果已存在时间显示，则不重复创建
    if (this.elements.timeText) {
      return;
    }
    
    // 创建时间文本
    const timeText = new PIXI.Text('时间: 60', {
      fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
      fontSize: 24,
      fill: 0xFFFFFF,
      fontWeight: 'bold',
      stroke: 0x000000,
      strokeThickness: 5
    });
    
    // 将时间文本放在退出按钮左侧，避免重叠
    timeText.position.set(screen.width - 200, 20);
    this.container.addChild(timeText);
    this.elements.timeText = timeText;
  }
  
  /**
   * 更新HUD
   * @param {number} delta - 帧时间差
   */
  update(delta) {
    // 更新连击计时器
    if (this.combo > 0) {
      this.comboTimer -= ticker.deltaMS;
      if (this.comboTimer <= 0) {
        // 连击超时，重置连击
        this.resetCombo();
      }
    }
    
    // 更新游戏时间
    if (this.gameTimerActive) {
      this.gameTime += ticker.deltaMS;
      
      // 更新时间显示
      if (this.elements.timeText) {
        const remainingSeconds = Math.max(0, Math.ceil((this.gameTimeLimit - this.gameTime) / 1000));
        this.elements.timeText.text = `时间: ${remainingSeconds}`;
        
        // 时间临近结束时变红
        if (remainingSeconds <= 10) {
          this.elements.timeText.style.fill = 0xFF0000;
        }
      }
      
      // 检查游戏是否结束
      if (this.gameTime >= this.gameTimeLimit) {
        this.gameTimerActive = false;
        // 触发游戏结束回调
        if (typeof this.onGameTimeUp === 'function') {
          this.onGameTimeUp(this.score);
        }
      }
    }
    
    // 执行注册的更新回调
    Object.values(this.updateCallbacks).forEach(callback => {
      if (typeof callback === 'function') {
        callback(delta);
      }
    });
  }
  
  /**
   * 设置游戏时间到期回调函数
   * @param {Function} callback - 时间到期回调
   */
  setOnGameTimeUpCallback(callback) {
    if (typeof callback === 'function') {
      this.onGameTimeUp = callback;
    }
  }
  
  /**
   * 显示HUD
   * @param {PIXI.Container} container - 要添加HUD的容器
   */
  show(container) {
    if (container) {
      container.addChild(this.container);
    }
  }
  
  /**
   * 隐藏HUD
   */
  hide() {
    if (this.container.parent) {
      this.container.parent.removeChild(this.container);
    }
  }
  
  /**
   * 更新分数显示
   * @param {number} score - 新的分数
   * @param {boolean} animate - 是否以动画形式更新
   */
  updateScore(score, animate = true) {
    // 保存旧分数用于动画
    const oldScore = this.score;
    // 更新内部分数值
    this.score = score;
    
    if (animate) {
      // 创建一个一次性的ticker来动画显示分数变化
      let animationProgress = 0;
      const animationDuration = 500; // 毫秒
      const animationStartTime = Date.now();
      
      const scoreTicker = (delta) => {
        const elapsed = Date.now() - animationStartTime;
        animationProgress = Math.min(elapsed / animationDuration, 1);
        
        // 使用缓动函数使动画更平滑
        const easeOutProgress = 1 - Math.pow(1 - animationProgress, 3);
        
        // 计算当前应显示的分数
        const currentScore = Math.round(oldScore + (score - oldScore) * easeOutProgress);
        
        // 更新显示
        this.updateScoreSprites(currentScore);
        
        // 动画结束时移除ticker
        if (animationProgress >= 1) {
          ticker.remove(scoreTicker);
        }
      };
      
      // 添加到ticker
      ticker.add(scoreTicker);
    } else {
      // 直接更新不带动画
      this.updateScoreSprites(score);
    }
  }
  
  /**
   * 增加连击数
   */
  incrementCombo() {
    // 增加连击数
    this.combo++;
    
    // 更新最大连击记录
    if (this.combo > this.maxCombo) {
      this.maxCombo = this.combo;
    }
    
    // 重置连击计时器
    this.comboTimer = this.comboTimeout;
    
    // 更新显示
    if (this.elements.comboText) {
      this.elements.comboText.text = `连击 x${this.combo}`;
    }
    
    // 显示连击容器
    if (this.elements.comboContainer && !this.elements.comboContainer.visible) {
      this.elements.comboContainer.visible = true;
      
      // 添加一个缩放动画效果
      this.elements.comboText.scale.set(0.5);
      
      // 动画到正常大小
      const startTime = Date.now();
      const duration = 300; // 毫秒
      
      const comboAnimTicker = (delta) => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 弹性缩放效果
        const scale = 0.5 + 0.5 * (1 + Math.sin(progress * Math.PI - Math.PI/2));
        this.elements.comboText.scale.set(scale);
        
        // 动画结束
        if (progress >= 1) {
          this.elements.comboText.scale.set(1);
          ticker.remove(comboAnimTicker);
        }
      };
      
      ticker.add(comboAnimTicker);
    } else if (this.elements.comboContainer && this.combo > 1) {
      // 连击数增加时的动画效果
      const startScale = 1.2;
      this.elements.comboText.scale.set(startScale);
      
      const startTime = Date.now();
      const duration = 200; // 毫秒
      
      const pulseAnimTicker = (delta) => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 从大变小的动画
        const scale = startScale - (startScale - 1) * progress;
        this.elements.comboText.scale.set(scale);
        
        // 动画结束
        if (progress >= 1) {
          this.elements.comboText.scale.set(1);
          ticker.remove(pulseAnimTicker);
        }
      };
      
      ticker.add(pulseAnimTicker);
    }
  }
  
  /**
   * 显示游戏结束计分板
   * @param {number} score - 最终得分
   * @param {Array} rankings - 排名数据，格式为[{nickname, score, avatar}, ...]
   */
  showScoreboard(score, rankings = []) {
    // 如果已存在计分板，则不重复创建
    if (this.elements.scoreboard) {
      return;
    }
    
    // 创建计分板容器
    const scoreboardContainer = new PIXI.Container();
    scoreboardContainer.zIndex = 200;
    
    // 创建半透明背景
    const overlay = new PIXI.Graphics();
    overlay.beginFill(0x000000, 0.8);
    overlay.drawRect(0, 0, screen.width, screen.height);
    overlay.endFill();
    
    // 为了适应手机横屏显示，计算安全尺寸
    const safeHeight = screen.height * 0.85; // 保留15%的边距
    const safeWidth = screen.width * 0.9; // 保留10%的边距
    const panelHeight = Math.min(360, safeHeight); // 限制最大高度
    const panelWidth = Math.min(380, safeWidth); // 限制最大宽度
    
    // 创建内容容器 - 所有内容都在这个容器内，方便整体定位
    const contentContainer = new PIXI.Container();
    contentContainer.position.set(screen.width / 2, screen.height / 2);
    
    // 创建计分板面板 - 减小高度，确保不会溢出屏幕
    const panel = new PIXI.Graphics();
    panel.beginFill(0xFFFFFF);
    panel.lineStyle(2, 0x999999);
    panel.drawRoundedRect(-panelWidth/2, -panelHeight/2, panelWidth, panelHeight, 10);
    panel.endFill();
    contentContainer.addChild(panel);
    
    // 创建标题文本 - 减小字体大小
    const titleText = new PIXI.Text('游戏结束', {
      fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
      fontSize: 28, // 减小字体大小
      fill: 0x333333,
      fontWeight: 'bold'
    });
    titleText.anchor.set(0.5, 0);
    titleText.position.set(0, -panelHeight/2 + 20);
    
    // 创建分数文本 - 突出显示玩家的分数
    const scoreText = new PIXI.Text(`您的得分: ${score}`, {
      fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
      fontSize: 24, // 减小字体大小
      fill: 0xFF8C00,  // 使用橙色突出显示
      fontWeight: 'bold'
    });
    scoreText.anchor.set(0.5, 0);
    scoreText.position.set(0, -panelHeight/2 + 60);
    
    // 如果只有当前玩家一条数据，简化布局，不显示排行榜标题和表头
    if (rankings.length === 1) {
      // 显示玩家信息 - 更简洁的布局
      if (rankings[0]) {
        const player = rankings[0];
        
        // 创建玩家信息容器
        const playerContainer = new PIXI.Container();
        playerContainer.position.set(0, -panelHeight/2 + 120);
        
        // 创建头像背景
        const avatarBg = new PIXI.Graphics();
        avatarBg.beginFill(0xEEEEEE);
        avatarBg.drawCircle(0, 0, 30);
        avatarBg.endFill();
        avatarBg.position.set(0, 0);
        
        // 如果有头像，则加载头像
        if (player.avatar) {
          const avatar = PIXI.Sprite.from(player.avatar);
          avatar.width = avatar.height = 60;
          avatar.anchor.set(0.5);
          avatar.position.set(0, 0);
          playerContainer.addChild(avatarBg, avatar);
        } else {
          playerContainer.addChild(avatarBg);
        }
        
        // 创建昵称文本
        const nameText = new PIXI.Text(player.nickname || '玩家', {
          fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
          fontSize: 20,
          fill: 0x333333,
          fontWeight: 'bold'
        });
        nameText.anchor.set(0.5, 0);
        nameText.position.set(0, 40);
        
        playerContainer.addChild(nameText);
        contentContainer.addChild(playerContainer);
      }
    } else {
      // 多人游戏排行榜模式 - 如果有多条数据显示排行榜
      // 创建排行榜标题
      const rankingTitle = new PIXI.Text('排行榜', {
        fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
        fontSize: 20, // 减小字体大小
        fill: 0x333333,
        fontWeight: 'bold'
      });
      rankingTitle.anchor.set(0.5, 0);
      rankingTitle.position.set(0, -panelHeight/2 + 100);
      contentContainer.addChild(rankingTitle);
      
      // 创建排行榜容器 - 宽度适应面板
      const rankListWidth = panelWidth - 60;
      const rankListContainer = new PIXI.Container();
      rankListContainer.position.set(-rankListWidth/2, -panelHeight/2 + 130);
      
      // 添加排行榜表头
      const headerContainer = new PIXI.Container();
      const headerBg = new PIXI.Graphics();
      headerBg.beginFill(0xEEEEEE);
      headerBg.drawRect(0, 0, rankListWidth, 25); // 减小高度
      headerBg.endFill();
      
      const rankHeader = new PIXI.Text('排名', {
        fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
        fontSize: 14, // 减小字体大小
        fill: 0x333333
      });
      rankHeader.position.set(15, 4); // 调整位置
      
      const nameHeader = new PIXI.Text('玩家', {
        fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
        fontSize: 14, // 减小字体大小
        fill: 0x333333
      });
      nameHeader.position.set(80, 4); // 调整位置
      
      const scoreHeader = new PIXI.Text('分数', {
        fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
        fontSize: 14, // 减小字体大小
        fill: 0x333333
      });
      scoreHeader.position.set(rankListWidth - 50, 4); // 调整位置
      
      headerContainer.addChild(headerBg, rankHeader, nameHeader, scoreHeader);
      rankListContainer.addChild(headerContainer);
      
      // 添加排行榜数据 - 最多显示3条数据
      const maxRows = Math.min(rankings.length, 3);
      const rowHeight = 30; // 减小行高
      
      for (let i = 0; i < maxRows; i++) {
        const rowContainer = new PIXI.Container();
        rowContainer.position.set(0, 30 + i * rowHeight); // 调整行间距
        
        // 检查当前行是否是当前玩家（分数相同）
        const isCurrentPlayer = rankings[i].score === score;
        
        // 设置背景色，当前玩家使用高亮颜色
        const rowBg = new PIXI.Graphics();
        rowBg.beginFill(isCurrentPlayer ? 0xFFE0B2 : (i % 2 === 0 ? 0xFFFFFF : 0xF5F5F5));
        rowBg.drawRect(0, 0, rankListWidth, rowHeight);
        rowBg.endFill();
        
        const rankText = new PIXI.Text(`${i + 1}`, {
          fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
          fontSize: 14, // 减小字体大小
          fill: isCurrentPlayer ? 0xFF8C00 : 0x333333,
          fontWeight: isCurrentPlayer ? 'bold' : 'normal'
        });
        rankText.position.set(15, 8); // 调整位置
        
        // 创建头像背景 - 减小尺寸
        const avatarBg = new PIXI.Graphics();
        avatarBg.beginFill(0xDDDDDD);
        avatarBg.drawCircle(55, 15, 12); // 减小半径
        avatarBg.endFill();
        
        // 如果有头像，则加载头像 - 减小尺寸
        let avatar;
        if (rankings[i].avatar) {
          avatar = PIXI.Sprite.from(rankings[i].avatar);
          avatar.width = avatar.height = 24; // 减小尺寸
          avatar.anchor.set(0.5);
          avatar.position.set(55, 15);
        }
        
        // 创建昵称，减少长度以防止溢出
        let nickname = rankings[i].nickname || `玩家${i+1}`;
        if (nickname.length > 8) {
          nickname = nickname.substring(0, 8) + '...';
        }
        
        const nameText = new PIXI.Text(nickname, {
          fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
          fontSize: 14, // 减小字体大小
          fill: isCurrentPlayer ? 0xFF8C00 : 0x333333,
          fontWeight: isCurrentPlayer ? 'bold' : 'normal'
        });
        nameText.position.set(80, 8); // 调整位置
        
        const scoreText = new PIXI.Text(`${rankings[i].score}`, {
          fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
          fontSize: 14, // 减小字体大小
          fill: isCurrentPlayer ? 0xFF8C00 : 0x333333,
          fontWeight: isCurrentPlayer ? 'bold' : 'normal'
        });
        scoreText.position.set(rankListWidth - 50, 8); // 调整位置
        
        // 如果是当前玩家，添加"(您)"标记 - 短一点以节省空间
        if (isCurrentPlayer) {
          const currentPlayerMark = new PIXI.Text("(您)", {
            fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
            fontSize: 12, // 减小字体大小
            fill: 0xFF8C00,
            fontWeight: 'bold'
          });
          // 将标记放在名字旁边，避免重叠
          currentPlayerMark.position.set(Math.min(nameText.width + nameText.x + 5, rankListWidth - 100), 10);
          rowContainer.addChild(currentPlayerMark);
        }
        
        rowContainer.addChild(rowBg, rankText, avatarBg);
        if (avatar) rowContainer.addChild(avatar);
        rowContainer.addChild(nameText, scoreText);
        
        rankListContainer.addChild(rowContainer);
      }
      
      contentContainer.addChild(rankListContainer);
    }
    
    // 创建"主菜单"按钮 - 减小尺寸，调整位置
    const mainMenuButton = new PIXI.Graphics();
    mainMenuButton.beginFill(0x4CAF50);
    mainMenuButton.drawRoundedRect(0, 0, 110, 40, 5);
    mainMenuButton.endFill();
    mainMenuButton.position.set(-115, panelHeight/2 - 60); // 调整位置到面板底部
    mainMenuButton.interactive = true;
    mainMenuButton.buttonMode = true;
    
    const mainMenuText = new PIXI.Text('主菜单', {
      fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
      fontSize: 16, // 减小字体大小
      fill: 0xFFFFFF
    });
    mainMenuText.anchor.set(0.5);
    mainMenuText.position.set(55, 20);
    mainMenuButton.addChild(mainMenuText);
    
    // 创建"再来一局"按钮 - 减小尺寸，调整位置
    const restartButton = new PIXI.Graphics();
    restartButton.beginFill(0x2196F3);
    restartButton.drawRoundedRect(0, 0, 110, 40, 5);
    restartButton.endFill();
    restartButton.position.set(5, panelHeight/2 - 60); // 调整位置到面板底部
    restartButton.interactive = true;
    restartButton.buttonMode = true;
    
    const restartText = new PIXI.Text('再来一局', {
      fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Chalkboard SE', 'MarkerFelt-Thin', 'Comic Sans MS', 'Roboto Rounded', 'Noto Sans SC', '华文圆体', 'Microsoft YaHei', sans-serif",
      fontSize: 16, // 减小字体大小
      fill: 0xFFFFFF
    });
    restartText.anchor.set(0.5);
    restartText.position.set(55, 20);
    restartButton.addChild(restartText);
    
    // 添加点击事件
    mainMenuButton.on('pointerdown', () => {
      this.hideScoreboard();
      // 触发回到主菜单回调
      if (typeof this.onReturnToMainMenu === 'function') {
        this.onReturnToMainMenu();
      }
    });
    
    restartButton.on('pointerdown', () => {
      this.hideScoreboard();
      // 触发重新开始游戏回调
      if (typeof this.onRestartGame === 'function') {
        this.onRestartGame();
      }
    });
    
    // 添加所有元素到计分板容器
    contentContainer.addChild(titleText, scoreText, mainMenuButton, restartButton);
    
    // 添加背景和内容容器到计分板容器
    scoreboardContainer.addChild(overlay);
    scoreboardContainer.addChild(contentContainer);
    
    // 添加到主容器
    this.container.addChild(scoreboardContainer);
    this.elements.scoreboard = scoreboardContainer;
  }
  
  /**
   * 隐藏计分板
   */
  hideScoreboard() {
    if (this.elements.scoreboard && this.elements.scoreboard.parent) {
      this.elements.scoreboard.parent.removeChild(this.elements.scoreboard);
      this.elements.scoreboard = null;
    }
  }
  
  /**
   * 设置返回主菜单回调函数
   * @param {Function} callback - 返回主菜单回调
   */
  setOnReturnToMainMenuCallback(callback) {
    if (typeof callback === 'function') {
      this.onReturnToMainMenu = callback;
    }
  }
  
  /**
   * 设置重新开始游戏回调函数
   * @param {Function} callback - 重新开始游戏回调
   */
  setOnRestartGameCallback(callback) {
    if (typeof callback === 'function') {
      this.onRestartGame = callback;
    }
  }
  
  /**
   * 重置连击数
   */
  resetCombo() {
    if (this.combo === 0) return;
    
    this.combo = 0;
    this.comboTimer = 0;
    
    // 隐藏连击显示
    if (this.elements.comboContainer) {
      // 淡出动画
      const startTime = Date.now();
      const duration = 500; // 毫秒
      
      const fadeOutTicker = (delta) => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 淡出透明度
        this.elements.comboContainer.alpha = 1 - progress;
        
        // 动画结束
        if (progress >= 1) {
          this.elements.comboContainer.visible = false;
          this.elements.comboContainer.alpha = 1; // 重置透明度
          ticker.remove(fadeOutTicker);
        }
      };
      
      ticker.add(fadeOutTicker);
    }
  }
  
  /**
   * 注册自定义更新回调
   * @param {string} key - 回调的唯一标识符
   * @param {Function} callback - 更新回调函数
   */
  registerUpdateCallback(key, callback) {
    if (typeof callback === 'function') {
      this.updateCallbacks[key] = callback;
    }
  }
  
  /**
   * 移除自定义更新回调
   * @param {string} key - 回调的唯一标识符
   */
  unregisterUpdateCallback(key) {
    delete this.updateCallbacks[key];
  }
  
  /**
   * 添加自定义UI元素
   * @param {string} key - 元素的唯一标识符
   * @param {PIXI.DisplayObject} element - 要添加的UI元素
   */
  addElement(key, element) {
    if (element instanceof PIXI.DisplayObject) {
      this.elements[key] = element;
      this.container.addChild(element);
    }
  }
  
  /**
   * 获取自定义UI元素
   * @param {string} key - 元素的唯一标识符
   * @returns {PIXI.DisplayObject|null} - UI元素或null
   */
  getElement(key) {
    return this.elements[key] || null;
  }
  
  /**
   * 移除自定义UI元素
   * @param {string} key - 元素的唯一标识符
   */
  removeElement(key) {
    if (this.elements[key]) {
      this.container.removeChild(this.elements[key]);
      delete this.elements[key];
    }
  }
  
  /**
   * 获取当前分数
   * @returns {number} - 当前分数
   */
  getScore() {
    return this.score;
  }
  
  /**
   * 获取当前连击数
   * @returns {number} - 当前连击数
   */
  getCombo() {
    return this.combo;
  }
  
  /**
   * 获取最高连击数
   * @returns {number} - 最高连击数
   */
  getMaxCombo() {
    return this.maxCombo;
  }
}

export default HUD; 
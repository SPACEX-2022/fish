import * as PIXI from 'pixi.js';
import { screen } from '~/core';
import { animate } from 'popmotion';
import { Button } from './ui';
import { showToast } from './ui';
import { wxLogin } from '../api/auth'; // 导入登录API
import { HeartbeatConnection } from '../api/heartbeat'; // 导入心跳连接API
import http from '../api/index'; // 导入HTTP客户端
import { defaultFontFamily } from '../util/constants';
/**
 * 游戏开始界面
 * 提供游戏开始前的UI界面，包括标题、按钮等
 */
class GameStartUI {
  /**
   * 创建游戏开始界面
   * @param {Object} options - 配置选项
   * @param {Function} options.onSinglePlayerStart - 单人模式开始回调
   * @param {Function} options.onMultiPlayerStart - 多人模式开始回调
   */
  constructor(options = {}) {
    this.options = options;
    
    // 创建主容器
    this.container = new PIXI.Container();
    this.container.zIndex = 100;
    
    // 设置主容器位置（居中）
    this.container.position.set(screen.width / 2, screen.height / 2);
    
    // 创建LOGO
    this.logo = PIXI.Sprite.from('assets/images/gameLogo.png');
    this.logo.scale.set(1.2);
    this.logo.anchor.set(0.5);
    this.logo.zIndex = 10;
    
    // 创建按钮容器
    this.buttonsContainer = new PIXI.Container();
    this.buttonsContainer.zIndex = 10;
    
    // 创建单人游戏按钮
    this.singlePlayerBtn = new Button({
      text: '单人模式',
      scale: 0.7,
      onClick: () => {
        console.log('单人按钮点击 - 直接回调方式');
        this.onSinglePlayerClick();
      }
    });
    this.singlePlayerBtn.position.set(-120, 80);
    
    // 创建多人游戏按钮
    this.multiPlayerBtn = new Button({
      text: '多人模式',
      scale: 0.7,
      onClick: () => {
        console.log('多人按钮点击 - 直接回调方式');
        this.onMultiPlayerClick();
      }
    });
    this.multiPlayerBtn.position.set(120, 80);
    
    // 添加到容器
    this.buttonsContainer.addChild(this.singlePlayerBtn, this.multiPlayerBtn);
    this.container.addChild(this.logo, this.buttonsContainer);
    
    // 创建模糊滤镜
    this.blurFilter = new PIXI.filters.BlurFilter(8, 10, true);
    
    // 状态标志
    this.isVisible = false;
    this.isLoggedIn = false;
    this.heartbeatConnection = null;
    this.privacyAuthorized = false; // 添加隐私授权状态
    this.userProfile = null; // 添加用户信息保存
    
    // 创建连接状态UI（右上角）
    this.createConnectionStatusUI();

    // 在构造完成后自动开始登录流程
    this.autoLogin = true;

    wx.getPrivacySetting({
      success: res => {
        console.log('隐私设置', res);
        if (res.needAuthorization) {
          // 创建隐私协议弹窗
          this.createPrivacyDialog();
        } else {
          this.privacyAuthorized = true;
          wx.getSetting({
            success: res => {
              if (res.authSetting['scope.userInfo']) {
                this.getUserProfileInfo();
              } else {
                this.showUserProfileButton();
              }
            }
          });
        }
      }
    });
  }
  
  /**
   * 创建连接状态UI显示
   */
  createConnectionStatusUI() {
    // 创建连接状态容器（右下角）
    this.connectionStatusUI = new PIXI.Container();
    this.connectionStatusUI.position.set(screen.width - 60, screen.height - 30);
    
    // 状态指示圆点
    this.statusIndicator = new PIXI.Graphics();
    this.statusIndicator.beginFill(0xFF0000); // 默认红色（离线）
    this.statusIndicator.drawCircle(0, 0, 6);
    this.statusIndicator.endFill();
    this.statusIndicator.position.set(0, 6); // 向下偏移6像素使其垂直居中
    
    // 状态文本
    this.statusText = new PIXI.Text("离线", {
      fontFamily: defaultFontFamily,
      fontSize: 12,
      fill: 0xFFFFFF
    });
    this.statusText.anchor.set(0, 0.5);
    this.statusText.position.set(10, 6); // 向下偏移6像素使其垂直居中
    
    // 添加到状态容器
    this.connectionStatusUI.addChild(this.statusIndicator, this.statusText);
    this.connectionStatusUI.visible = false; // 默认隐藏，登录后显示
  }
  
  /**
   * 创建隐私协议弹窗
   */
  createPrivacyDialog() {
    // 创建隐私弹窗容器
    this.privacyDialog = new PIXI.Container();
    this.privacyDialog.zIndex = 200;
    
    // 创建半透明背景
    const background = new PIXI.Graphics();
    background.beginFill(0x000000, 0.7);
    background.drawRect(-screen.width/2, -screen.height/2, screen.width, screen.height);
    background.endFill();
    
    // 创建弹窗面板 - 优化高度和宽度
    const panel = new PIXI.Graphics();
    panel.beginFill(0xFFFFFF);
    panel.lineStyle(2, 0x999999);
    panel.drawRoundedRect(-240, -170, 480, 340, 10);
    panel.endFill();
    
    // 创建标题文本
    const title = new PIXI.Text("用户隐私协议", {
      fontFamily: "Arial",
      fontSize: 20,
      fontWeight: "bold",
      fill: 0x333333
    });
    title.anchor.set(0.5, 0);
    title.position.set(0, -140);
    
    // 创建协议内容文本 - 简化内容，确保在弹窗范围内
    const content = new PIXI.Text(
      "为提供更好的游戏体验，根据相关法律规定，我们需要获取您的部分信息：\n\n1. 游戏必要的数据，用于体验优化\n2. 头像和昵称，仅用于游戏内显示\n\n点击下方按钮表示您同意我们的《隐私协议》和《用户协议》", 
      {
        fontFamily: defaultFontFamily,
        fontSize: 14,
        fill: 0x333333,
        wordWrap: true,
        wordWrapWidth: 360,
        lineHeight: 20
      }
    );
    content.anchor.set(0.5, 0);
    content.position.set(0, -80);
    
    // 创建同意按钮 - 调整位置
    this.agreeBtn = new Button({
      text: '同意并继续',
      scale: 0.7,
      onClick: () => {
        this.onPrivacyAgree();
      }
    });
    this.agreeBtn.position.set(0, 110);
    
    // 添加到隐私弹窗容器
    this.privacyDialog.addChild(background, panel, title, content, this.agreeBtn);
    
    // 默认隐藏
    this.privacyDialog.visible = false;
  }
  
  /**
   * 隐藏隐私协议弹窗
   */
  hidePrivacyDialog() {
    this.privacyDialog.visible = false;
  }
  
  /**
   * 隐私协议同意按钮点击处理
   */
  onPrivacyAgree() {
    console.log('用户同意隐私协议');
    
    // 调用微信隐私授权API
    wx.requirePrivacyAuthorize({
      success: res => {
        console.log('隐私授权成功', res);
        this.privacyAuthorized = true;
        this.hidePrivacyDialog();
        
        // 隐私授权成功后获取用户信息
        this.getUserProfileInfo();
      },
      fail: err => {
        console.error('隐私授权失败', err);
        // 可以选择显示错误提示或重试
        if (this.container.parent) {
          showToast({
            text: '隐私授权失败，请重试',
            type: 'error',
            duration: 2000,
            parent: this.container.parent
          });
        }
      },
      complete: () => {
        console.log('隐私授权流程完成');
      }
    });
  }
  
  /**
   * 获取用户头像和昵称信息
   */
  getUserProfileInfo() {
    // 显示加载提示
    wx.showLoading({
      title: "正在获取信息...",
      mask: true
    });
    
    // 通过 wx.getSetting 查询用户是否已授权头像昵称信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: profileRes => {
              console.log('获取用户信息成功', profileRes.userInfo);
              this.userProfile = profileRes.userInfo; // 保存用户信息
              wx.hideLoading();
              
              // 获取用户信息后继续登录流程
              if (this.autoLogin && !this.isLoggedIn) {
                this.login();
              }
            },
            fail: err => {
              console.error('获取用户信息失败', err);
              wx.hideLoading();
              this.showUserProfileButton();
            }
          });
        } else {
          // 用户未授权，显示授权按钮
          wx.hideLoading();
          this.showUserProfileButton();
        }
      },
      fail: err => {
        console.error('获取授权状态失败', err);
        wx.hideLoading();
        this.showUserProfileButton();
      }
    });
  }
  
  /**
   * 显示获取用户信息按钮
   */
  showUserProfileButton() {
    // 创建用户信息授权弹窗
    this.createUserProfileDialog();
    
    if (this.container.parent) {
      this.showUserProfileDialog(this.container.parent);
    }
  }
  
  /**
   * 创建用户信息授权弹窗
   */
  createUserProfileDialog() {
    // 如果已经创建过，不重复创建
    if (this.userProfileDialog) return;
    
    // 创建弹窗容器
    this.userProfileDialog = new PIXI.Container();
    this.userProfileDialog.zIndex = 200;
    
    // 创建半透明背景
    const background = new PIXI.Graphics();
    background.beginFill(0x000000, 0.7);
    background.drawRect(-screen.width/2, -screen.height/2, screen.width, screen.height);
    background.endFill();
    
    // 创建弹窗面板
    const panel = new PIXI.Graphics();
    panel.beginFill(0xFFFFFF);
    panel.lineStyle(2, 0x999999);
    panel.drawRoundedRect(-200, -150, 400, 300, 10);
    panel.endFill();
    
    // 创建标题文本
    const title = new PIXI.Text("获取用户信息", {
      fontFamily: defaultFontFamily,
      fontSize: 20,
      fontWeight: "bold",
      fill: 0x333333
    });
    title.anchor.set(0.5, 0);
    title.position.set(0, -120);
    
    // 创建提示文本
    const content = new PIXI.Text(
      "为了提供个性化体验，游戏需要获取您的头像\n和昵称信息。点击下方按钮授权并继续游戏。", 
      {
        fontFamily: defaultFontFamily,
        fontSize: 14,
        fill: 0x333333,
        wordWrap: true,
        wordWrapWidth: 360,
        lineHeight: 20
      }
    );
    content.anchor.set(0.5, 0);
    content.position.set(0, -60);
    
    // 添加到弹窗容器
    this.userProfileDialog.addChild(background, panel, title, content);
    
    // 使用微信原生按钮
    this.createWxUserInfoButton();
    
    // 默认隐藏
    this.userProfileDialog.visible = false;
  }
  
  /**
   * 创建微信原生用户信息按钮
   */
  createWxUserInfoButton() {
    // 计算按钮位置（全局坐标）
    const centerX = screen.width / 2;
    const centerY = screen.height / 2;
    const buttonX = centerX - 100; // 按钮宽度200，居中
    const buttonY = centerY + 20; // 按钮在弹窗中间偏下位置
    
    // 创建微信原生按钮
    this.wxUserInfoButton = wx.createUserInfoButton({
      type: 'text',
      text: '授权头像和昵称',
      style: {
        left: buttonX,
        top: buttonY,
        width: 200,
        height: 50,
        lineHeight: 50,
        backgroundColor: '#1aad19',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
      }
    });
    
    // 监听按钮点击
    this.wxUserInfoButton.onTap(res => {
      if (res.userInfo) {
        // 用户同意授权
        console.log('获取用户信息成功', res.userInfo);
        this.userProfile = res.userInfo; // 保存用户信息
        
        // 隐藏弹窗并销毁按钮
        this.hideUserProfileDialog();
        
        // 继续登录流程
        if (this.autoLogin && !this.isLoggedIn) {
          this.login();
        }
      } else {
        // 用户拒绝授权
        console.log('用户拒绝授权头像昵称');
        if (this.container.parent) {
          showToast({
            text: '需要授权才能继续游戏',
            type: 'warning',
            duration: 2000,
            parent: this.container.parent
          });
        }
      }
    });
  }
  
  /**
   * 显示用户信息授权弹窗
   */
  showUserProfileDialog(parent) {
    if (!this.userProfileDialog.parent && parent) {
      parent.addChild(this.userProfileDialog);
    }
    
    // 设置位置
    this.userProfileDialog.position.set(screen.width / 2, screen.height / 2);
    this.userProfileDialog.visible = true;
    
    // 确保按钮可见
    this.wxUserInfoButton && (this.wxUserInfoButton.show());
  }
  
  /**
   * 隐藏用户信息授权弹窗
   */
  hideUserProfileDialog() {
    if (!this.userProfileDialog) return;
    
    this.userProfileDialog.visible = false;
    
    // 隐藏微信原生按钮
    this.wxUserInfoButton && (this.wxUserInfoButton.hide());
  }
  
  /**
   * 登录流程
   */
  async login() {
    try {
      console.log('开始登录');
      // 显示登录提示
      wx.showLoading({
        title: "正在登录中...",
        mask: true
      });
      
      // 调用微信登录获取code
      const loginResult = await wx.login();
      
      if (loginResult && loginResult.code) {
        // 调用服务器登录接口，同时传递用户信息
        const loginResponse = await wxLogin({
          code: loginResult.code,
          nickname: this.userProfile.nickName,
          avatarUrl: this.userProfile.avatarUrl,
        });
        
        console.log('登录成功', loginResponse);
        this.isLoggedIn = true;
        
        // 登录成功后建立心跳连接
        this.setupHeartbeatConnection();
        
        // 登录成功提示
        wx.showToast({
          title: "登录成功",
          icon: "success",
          duration: 1500
        });
      } else {
        throw new Error("获取微信登录code失败");
      }
    } catch (error) {
      console.error("登录失败", error);
      wx.showToast({
        title: "登录失败，请重试",
        icon: "none",
        duration: 2000
      });
    } finally {
      // 关闭登录提示
      wx.hideLoading();
    }
  }
  
  /**
   * 设置心跳连接
   */
  setupHeartbeatConnection() {
    // 获取API基础URL和令牌
    const serverUrl = http.getBaseURL ? http.getBaseURL() : 'https://api.example.com/api';
    const token = http.getToken ? http.getToken() : '';
    
    if (!token) {
      console.error('建立心跳连接失败：未获取到token');
      return;
    }
    
    // 创建心跳连接实例
    this.heartbeatConnection = new HeartbeatConnection(serverUrl, token);
    
    // 注册事件处理函数
    this.heartbeatConnection.onConnect(() => {
      this.updateConnectionStatus(true);
    });
    
    this.heartbeatConnection.onDisconnect(() => {
      this.updateConnectionStatus(false);
    });
    
    this.heartbeatConnection.onError((error) => {
      console.error('心跳连接错误', error);
      this.updateConnectionStatus(false);
    });
    
    // 开始连接
    this.heartbeatConnection.connect();
    
    // 显示连接状态UI
    this.connectionStatusUI.visible = true;
    this.updateConnectionStatus(false); // 初始状态为离线
  }
  
  /**
   * 更新连接状态UI
   * @param {boolean} isConnected - 是否已连接
   */
  updateConnectionStatus(isConnected) {
    // 更新状态指示圆点颜色
    this.statusIndicator.clear();
    
    if (isConnected) {
      // 在线状态 - 绿色
      this.statusIndicator.beginFill(0x00FF00);
      this.statusText.text = "在线";
    } else {
      // 离线状态 - 红色
      this.statusIndicator.beginFill(0xFF0000);
      this.statusText.text = "离线";
    }
    
    this.statusIndicator.drawCircle(0, 0, 6);
    this.statusIndicator.endFill();
  }
  
  /**
   * 隐藏游戏开始界面
   */
  hide() {
    if (!this.isVisible) return;
    
    if (this.container.parent) {
      this.container.parent.removeChild(this.container);
    }
    
    this.isVisible = false;
    
    // 注意：不要移除连接状态UI，它应该一直显示
  }
  
  /**
   * 销毁组件，清理资源
   */
  destroy() {
    // 断开心跳连接
    if (this.heartbeatConnection) {
      this.heartbeatConnection.disconnect();
      this.heartbeatConnection = null;
    }
    
    // 移除连接状态UI
    if (this.connectionStatusUI.parent) {
      this.connectionStatusUI.parent.removeChild(this.connectionStatusUI);
    }
    
    // 移除隐私弹窗
    if (this.privacyDialog.parent) {
      this.privacyDialog.parent.removeChild(this.privacyDialog);
    }
    
    // 移除用户信息弹窗
    if (this.userProfileDialog && this.userProfileDialog.parent) {
      this.userProfileDialog.parent.removeChild(this.userProfileDialog);
    }
    
    // 销毁微信原生按钮
    if (this.wxUserInfoButton) {
      this.wxUserInfoButton.destroy();
      this.wxUserInfoButton = null;
    }
    
    // 移除主容器
    if (this.container.parent) {
      this.container.parent.removeChild(this.container);
    }
    
    // 标记为不可见
    this.isVisible = false;
  }
  
  /**
   * 单人模式按钮点击处理
   */
  onSinglePlayerClick() {
    console.log('开始单人模式');
    
    // 确保已登录
    if (!this.isLoggedIn) {
      this.login();
      return;
    }
    
    if (typeof this.options.onSinglePlayerStart === 'function') {
      this.hide();
      this.options.onSinglePlayerStart();
    }
  }
  
  /**
   * 多人模式按钮点击处理
   */
  onMultiPlayerClick() {
    console.log('多人模式开发中');
    
    // 确保已登录
    if (!this.isLoggedIn) {
      this.login();
      return;
    }
    
    // 使用Toast组件显示提示
    if (this.container.parent) {
      showToast({
        text: '正在开发中，敬请期待!',
        type: 'info',
        duration: 2000,
        parent: this.container.parent
      });
    }
    
    if (typeof this.options.onMultiPlayerStart === 'function') {
      this.options.onMultiPlayerStart();
    }
  }
  
  /**
   * 更新UI位置，使其自适应屏幕
   * @private
   */
  _updatePosition() {
    // 设置LOGO位置在屏幕上方
    this.logo.position.set(0, -screen.height * 0.2);
    
    // 设置按钮位置在中间偏下
    this.buttonsContainer.position.set(0, screen.height * 0.05);
  }
  
  /**
   * 应用模糊滤镜
   * @param {PIXI.Container} target - 目标容器
   */
  applyBlurFilter(target) {
    if (target) {
      target.filters = [this.blurFilter];
    }
  }
  
  /**
   * 淡出模糊滤镜
   * @param {PIXI.Container} target - 目标容器
   * @param {number} duration - 动画时长(毫秒)
   */
  fadeOutBlurFilter(target, duration = 1000) {
    if (!target || !target.filters || !target.filters.includes(this.blurFilter)) {
      return;
    }
    
    const initialBlur = this.blurFilter.blur;
    
    animate({
      from: initialBlur,
      to: 0,
      duration: duration,
      onUpdate: (value) => {
        this.blurFilter.blur = value;
      },
      onComplete: () => {
        target.filters = null;
      }
    });
  }
  
  /**
   * 处理触摸事件
   * @param {number} x - 触摸X坐标
   * @param {number} y - 触摸Y坐标
   * @param {boolean} isDown - 是否按下
   */
  handleTouch(x, y, isDown) {
    console.log('GameStartUI处理触摸：', x, y, isDown ? 'down' : 'up');
    
    // 只有在界面可见时才处理
    if (!this.isVisible) return;
    
    // 如果隐私弹窗可见，只处理隐私弹窗的点击
    if (this.privacyDialog.visible) {
      // 检查是否点击了同意按钮
      if (this._checkPrivacyAgreeButtonHit(x, y)) {
        if (isDown) {
          this.agreeBtn._onPointerDown();
        } else {
          this.agreeBtn._onPointerUp();
        }
      }
      return;
    }
    
    // 检查是否点击了按钮
    const hitButton = this._checkTouchHit(x, y);
    
    if (hitButton === 'single') {
      if (isDown) {
        this.singlePlayerBtn._onPointerDown();
      } else {
        this.singlePlayerBtn._onPointerUp();
      }
    } else if (hitButton === 'multi') {
      if (isDown) {
        this.multiPlayerBtn._onPointerDown();
      } else {
        this.multiPlayerBtn._onPointerUp();
      }
    }
  }
  
  /**
   * 检查触摸是否命中按钮
   * @param {number} x - 触摸X坐标
   * @param {number} y - 触摸Y坐标
   * @returns {string|null} 命中的按钮类型，'single'或'multi'，未命中则为null
   * @private
   */
  _checkTouchHit(x, y) {
    // 将全局坐标转换为按钮的本地坐标
    const buttonContainerPos = {
      x: screen.width / 2 + this.buttonsContainer.position.x,
      y: screen.height / 2 + this.buttonsContainer.position.y
    };
    
    // 计算单人按钮的位置和点击区域
    const singleBtnPos = {
      x: buttonContainerPos.x + this.singlePlayerBtn.position.x,
      y: buttonContainerPos.y + this.singlePlayerBtn.position.y
    };
    
    // 计算多人按钮的位置和点击区域
    const multiBtnPos = {
      x: buttonContainerPos.x + this.multiPlayerBtn.position.x,
      y: buttonContainerPos.y + this.multiPlayerBtn.position.y
    };
    
    // 获取按钮的点击区域大小(从hitArea)
    const singleBtnHitArea = this.singlePlayerBtn.hitArea;
    const multiBtnHitArea = this.multiPlayerBtn.hitArea;
    
    // 检查是否点击了单人按钮
    if (
      x >= singleBtnPos.x + singleBtnHitArea.x &&
      x <= singleBtnPos.x + singleBtnHitArea.x + singleBtnHitArea.width &&
      y >= singleBtnPos.y + singleBtnHitArea.y &&
      y <= singleBtnPos.y + singleBtnHitArea.y + singleBtnHitArea.height
    ) {
      return 'single';
    }
    
    // 检查是否点击了多人按钮
    if (
      x >= multiBtnPos.x + multiBtnHitArea.x &&
      x <= multiBtnPos.x + multiBtnHitArea.x + multiBtnHitArea.width &&
      y >= multiBtnPos.y + multiBtnHitArea.y &&
      y <= multiBtnPos.y + multiBtnHitArea.y + multiBtnHitArea.height
    ) {
      return 'multi';
    }
    
    return null;
  }
  
  /**
   * 检查隐私协议同意按钮是否被点击
   * @param {number} x - 触摸X坐标
   * @param {number} y - 触摸Y坐标
   * @returns {boolean} 是否命中
   * @private
   */
  _checkPrivacyAgreeButtonHit(x, y) {
    // 计算按钮全局位置
    const dialogPos = {
      x: screen.width / 2 + this.privacyDialog.position.x,
      y: screen.height / 2 + this.privacyDialog.position.y
    };
    
    const btnPos = {
      x: dialogPos.x + this.agreeBtn.position.x,
      y: dialogPos.y + this.agreeBtn.position.y
    };
    
    // 获取按钮的点击区域
    const btnHitArea = this.agreeBtn.hitArea;
    
    // 检查是否点击了按钮
    return (
      x >= btnPos.x + btnHitArea.x &&
      x <= btnPos.x + btnHitArea.x + btnHitArea.width &&
      y >= btnPos.y + btnHitArea.y &&
      y <= btnPos.y + btnHitArea.y + btnHitArea.height
    );
  }
  
  /**
   * 显示游戏开始界面
   * @param {PIXI.Container} parent - 父容器
   */
  show(parent) {
    if (this.isVisible) return;
    
    parent.addChild(this.container);
    
    // 添加连接状态UI到父容器（不受GameStartUI隐藏影响）
    if (!this.connectionStatusUI.parent) {
      parent.addChild(this.connectionStatusUI);
    }
    
    this.isVisible = true;
    this._updatePosition();
  }
}

export default GameStartUI; 
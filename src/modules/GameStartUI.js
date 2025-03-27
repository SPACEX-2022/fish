import * as PIXI from 'pixi.js';
import { screen } from '~/core';
import { animate } from 'popmotion';
import { Button } from './ui';
import { showToast } from './ui';
import { wxLogin } from '../api/auth'; // 导入登录API
import { HeartbeatConnection } from '../api/heartbeat'; // 导入心跳连接API
import { getWsUrl } from '../api/index'; // 导入HTTP客户端
import { getStorageSync, setStorageSync } from '../util/storage';
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

    this.showLoginDialog();
    wx.getPrivacySetting({
      success: res => {
        console.log('隐私设置', res);
        if (res.needAuthorization) {
          this.hideLoginDialog();
          // 创建隐私协议弹窗
          this.createPrivacyDialog();
        } else {
          this.privacyAuthorized = true;
          wx.getSetting({
            success: res => {
              if (res.authSetting['scope.userInfo']) {
                this.getUserProfileInfo();
              } else {
                this.hideLoginDialog();
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
    
    // 默认先隐藏，等添加到容器后再显示并添加动画
    this.privacyDialog.visible = false;

    // 添加到主容器
    this.container.addChild(this.privacyDialog);
    
    // 显示并添加动画
    this.privacyDialog.visible = true;
    this.applyDialogAnimation(this.privacyDialog);
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
    
    // 通过 wx.getSetting 查询用户是否已授权头像昵称信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: profileRes => {
              console.log('获取用户信息成功', profileRes.userInfo);
              this.userProfile = profileRes.userInfo; // 保存用户信息
              setStorageSync('userProfile', JSON.stringify(this.userProfile));
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
    
    // 添加动画效果
    this.applyDialogAnimation(this.userProfileDialog);
    
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
      
      // 显示登录弹窗
      this.showLoginDialog();
      
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
        
        // 隐藏登录弹窗
        this.hideLoginDialog();
        
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
      
      // 隐藏登录弹窗
      this.hideLoginDialog();
      
      // 显示登录失败弹窗
      this.showLoginFailedDialog();
    }
  }
  
  /**
   * 创建登录失败弹窗
   */
  createLoginFailedDialog() {
    // 如果已经创建过，不重复创建
    if (this.loginFailedDialog) return;
    
    // 创建弹窗容器
    this.loginFailedDialog = new PIXI.Container();
    this.loginFailedDialog.zIndex = 200;
    
    // 创建半透明背景
    const background = new PIXI.Graphics();
    background.beginFill(0x000000, 0.7);
    background.drawRect(-screen.width/2, -screen.height/2, screen.width, screen.height);
    background.endFill();
    
    // 创建弹窗面板
    const panel = new PIXI.Graphics();
    panel.beginFill(0xFFFFFF);
    panel.lineStyle(2, 0x999999);
    panel.drawRoundedRect(-150, -100, 300, 200, 10);
    panel.endFill();
    
    // 创建标题文本
    const title = new PIXI.Text("登录失败", {
      fontFamily: defaultFontFamily,
      fontSize: 20,
      fontWeight: "bold",
      fill: 0xFF3333 // 红色标题
    });
    title.anchor.set(0.5, 0);
    title.position.set(0, -90);
    
    // 创建错误图标
    const errorIcon = new PIXI.Graphics();
    errorIcon.beginFill(0xFF3333);
    errorIcon.drawCircle(0, -30, 20);
    errorIcon.endFill();
    
    // 绘制X形状
    const cross = new PIXI.Graphics();
    cross.lineStyle(4, 0xFFFFFF);
    cross.moveTo(-10, -40);
    cross.lineTo(10, -20);
    cross.moveTo(10, -40);
    cross.lineTo(-10, -20);
    
    // 创建错误提示文本
    const errorText = new PIXI.Text("网络连接错误，请重试", {
      fontFamily: defaultFontFamily,
      fontSize: 16,
      fill: 0x333333,
      align: 'center'
    });
    errorText.anchor.set(0.5, 0);
    errorText.position.set(0, 10);
    
    // 创建重新登录按钮
    this.retryLoginBtn = new Button({
      text: '重新登录',
      scale: 0.7,
      onClick: () => {
        this.onRetryLoginClick();
      }
    });
    this.retryLoginBtn.position.set(0, 60);
    
    // 添加到弹窗容器
    this.loginFailedDialog.addChild(background, panel, title, errorIcon, cross, errorText, this.retryLoginBtn);
    
    // 默认隐藏
    this.loginFailedDialog.visible = false;
  }
  
  /**
   * 显示登录失败弹窗
   */
  showLoginFailedDialog() {
    // 创建弹窗(如果未创建)
    this.createLoginFailedDialog();
    
    if (!this.loginFailedDialog.parent && this.container.parent) {
      this.container.parent.addChild(this.loginFailedDialog);
    }
    
    // 设置位置
    this.loginFailedDialog.position.set(screen.width / 2, screen.height / 2);
    
    // 添加动画效果
    this.applyDialogAnimation(this.loginFailedDialog);
    
    this.loginFailedDialog.visible = true;
  }
  
  /**
   * 隐藏登录失败弹窗
   */
  hideLoginFailedDialog() {
    if (!this.loginFailedDialog) return;
    
    this.loginFailedDialog.visible = false;
  }
  
  /**
   * 重新登录按钮点击处理
   */
  onRetryLoginClick() {
    console.log('重新登录');
    
    // 隐藏登录失败弹窗
    this.hideLoginFailedDialog();
    
    // 重新调用登录流程
    this.login();
  }
  
  /**
   * 创建登录弹窗
   */
  createLoginDialog() {
    // 如果已经创建过，不重复创建
    if (this.loginDialog) return;
    
    // 创建弹窗容器
    this.loginDialog = new PIXI.Container();
    this.loginDialog.zIndex = 200;
    
    // 创建半透明背景
    const background = new PIXI.Graphics();
    background.beginFill(0x000000, 0.7);
    background.drawRect(-screen.width/2, -screen.height/2, screen.width, screen.height);
    background.endFill();
    
    // 创建弹窗面板
    const panel = new PIXI.Graphics();
    panel.beginFill(0xFFFFFF);
    panel.lineStyle(2, 0x999999);
    panel.drawRoundedRect(-150, -80, 300, 160, 10);
    panel.endFill();
    
    // 创建标题文本
    const title = new PIXI.Text("登录中", {
      fontFamily: defaultFontFamily,
      fontSize: 20,
      fontWeight: "bold",
      fill: 0x333333
    });
    title.anchor.set(0.5, 0);
    title.position.set(0, -60);
    
    // 创建加载动画
    this.loadingAnimation = new PIXI.Container();
    this.loadingAnimation.position.set(0, 0);
    
    // 创建加载动画圆圈
    const loadingCircle = new PIXI.Graphics();
    loadingCircle.lineStyle(3, 0x3399FF);
    loadingCircle.drawCircle(0, 0, 20);
    loadingCircle.endFill();
    
    // 创建加载动画指示器
    const loadingIndicator = new PIXI.Graphics();
    loadingIndicator.beginFill(0x3399FF);
    loadingIndicator.drawCircle(0, -20, 5);
    loadingIndicator.endFill();
    
    // 添加到加载动画容器
    this.loadingAnimation.addChild(loadingCircle, loadingIndicator);
    
    // 创建状态文本
    this.loginStatusText = new PIXI.Text("正在登录中...", {
      fontFamily: defaultFontFamily,
      fontSize: 16,
      fill: 0x333333
    });
    this.loginStatusText.anchor.set(0.5, 0);
    this.loginStatusText.position.set(0, 40);
    
    // 添加到弹窗容器
    this.loginDialog.addChild(background, panel, title, this.loadingAnimation, this.loginStatusText);
    
    // 默认隐藏
    this.loginDialog.visible = false;
  }
  
  /**
   * 显示登录弹窗
   */
  showLoginDialog() {
    // 创建弹窗(如果未创建)
    this.createLoginDialog();
    
    if (!this.loginDialog.parent && this.container.parent) {
      this.container.parent.addChild(this.loginDialog);
    }
    
    // 设置位置
    this.loginDialog.position.set(screen.width / 2, screen.height / 2);
    
    // 添加动画效果
    this.applyDialogAnimation(this.loginDialog);
    
    this.loginDialog.visible = true;
    
    // 开始加载动画
    this.startLoadingAnimation();
  }
  
  /**
   * 隐藏登录弹窗
   */
  hideLoginDialog() {
    if (!this.loginDialog) return;
    
    // 停止加载动画
    this.stopLoadingAnimation();
    
    this.loginDialog.visible = false;
  }
  
  /**
   * 开始加载动画
   */
  startLoadingAnimation() {
    // 清除之前的动画
    this.stopLoadingAnimation();
    
    // 创建动画
    let rotation = 0;
    this.loadingAnimationTimer = setInterval(() => {
      rotation += 0.1;
      if (this.loadingAnimation) {
        this.loadingAnimation.rotation = rotation;
      }
    }, 16); // 约60fps
  }
  
  /**
   * 停止加载动画
   */
  stopLoadingAnimation() {
    if (this.loadingAnimationTimer) {
      clearInterval(this.loadingAnimationTimer);
      this.loadingAnimationTimer = null;
    }
  }
  
  /**
   * 设置心跳连接
   */
  setupHeartbeatConnection() {
    // 获取API基础URL和令牌
    const token = getStorageSync('token');
    
    if (!token) {
      console.error('建立心跳连接失败：未获取到token');
      return;
    }
    
    // 创建心跳连接实例
    this.heartbeatConnection = new HeartbeatConnection(getWsUrl('/ws/heartbeat'), token);
    
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
    
    // 注册ping更新事件，当ping值变化时更新UI
    this.heartbeatConnection.onPingUpdate((pingValue) => {
      this.updatePingDisplay(pingValue);
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
      // 如果已连接，尝试获取ping值
      if (this.heartbeatConnection) {
        const pingValue = this.heartbeatConnection.getCurrentPing();
        if (pingValue > 0) {
          this.statusText.text = `${pingValue}ms`;
        } else {
          this.statusText.text = "连接中";
        }
      } else {
        this.statusText.text = "在线";
      }
    } else {
      // 离线状态 - 红色
      this.statusIndicator.beginFill(0xFF0000);
      this.statusText.text = "离线";
    }
    
    this.statusIndicator.drawCircle(0, 0, 6);
    this.statusIndicator.endFill();
  }
  
  /**
   * 更新ping显示
   * @param {number} pingValue - ping值(ms)
   */
  updatePingDisplay(pingValue) {
    // 根据ping值设置文本
    this.statusText.text = `${pingValue}ms`;
    
    // 根据ping值调整指示器颜色
    this.statusIndicator.clear();
    
    if (pingValue < 100) {
      // 优良连接 - 绿色
      this.statusIndicator.beginFill(0x00FF00);
    } else if (pingValue < 200) {
      // 一般连接 - 黄色
      this.statusIndicator.beginFill(0xFFFF00);
    } else {
      // 较差连接 - 红色
      this.statusIndicator.beginFill(0xFF0000);
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
    
    // 移除登录弹窗
    if (this.loginDialog && this.loginDialog.parent) {
      this.loginDialog.parent.removeChild(this.loginDialog);
      this.stopLoadingAnimation();
    }
    
    // 移除登录失败弹窗
    if (this.loginFailedDialog && this.loginFailedDialog.parent) {
      this.loginFailedDialog.parent.removeChild(this.loginFailedDialog);
    }
    
    // 移除微信原生按钮
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
    console.log('多人模式点击');
    
    // 确保已登录
    if (!this.isLoggedIn) {
      this.login();
      return;
    }
    
    // 显示多人模式选项弹窗
    this.showMultiplayerOptionsDialog();
    
    if (typeof this.options.onMultiPlayerStart === 'function') {
      // 此处先不调用开始回调，等用户选择玩法后再调用
      // this.options.onMultiPlayerStart();
    }
  }
  
  /**
   * 创建多人模式选项弹窗
   */
  createMultiplayerOptionsDialog() {
    // 如果已经创建过，不重复创建
    if (this.multiplayerOptionsDialog) return;
    
    // 创建弹窗容器
    this.multiplayerOptionsDialog = new PIXI.Container();
    this.multiplayerOptionsDialog.zIndex = 200;
    
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
    const title = new PIXI.Text("多人模式", {
      fontFamily: defaultFontFamily,
      fontSize: 20,
      fontWeight: "bold",
      fill: 0x333333
    });
    title.anchor.set(0.5, 0);
    title.position.set(0, -120);
    
    // 创建关闭按钮
    const closeButton = new PIXI.Container();
    closeButton.position.set(180, -130);
    
    // 关闭按钮底色
    const closeBg = new PIXI.Graphics();
    closeBg.beginFill(0xEEEEEE);
    closeBg.lineStyle(2, 0x999999);
    closeBg.drawCircle(0, 0, 15);
    closeBg.endFill();
    
    // 关闭按钮X形状
    const closeX = new PIXI.Graphics();
    closeX.lineStyle(3, 0x666666);
    closeX.moveTo(-6, -6);
    closeX.lineTo(6, 6);
    closeX.moveTo(6, -6);
    closeX.lineTo(-6, 6);
    
    // 添加点击区域
    closeButton.hitArea = new PIXI.Rectangle(-15, -15, 30, 30);
    
    // 添加到关闭按钮容器
    closeButton.addChild(closeBg, closeX);
    
    // 按钮交互
    closeButton.interactive = true;
    closeButton.buttonMode = true;
    
    // 设置指针事件
    closeButton.on('pointerdown', () => {
      this.hideMultiplayerOptionsDialog();
    });
    
    // 保存引用便于触摸事件处理
    this.closeOptionsButton = closeButton;
    
    // 创建在线匹配按钮
    this.onlineMatchBtn = new Button({
      text: '在线匹配',
      scale: 0.7,
      onClick: () => {
        this.onOnlineMatchClick();
      }
    });
    this.onlineMatchBtn.position.set(0, -30);
    
    // 创建创建房间按钮
    this.createRoomBtn = new Button({
      text: '创建房间',
      scale: 0.7,
      onClick: () => {
        this.onCreateRoomClick();
      }
    });
    this.createRoomBtn.position.set(0, 50);
    
    // 添加到弹窗容器
    this.multiplayerOptionsDialog.addChild(background, panel, title, this.onlineMatchBtn, this.createRoomBtn, closeButton);
    
    // 默认隐藏
    this.multiplayerOptionsDialog.visible = false;
  }
  
  /**
   * 显示多人模式选项弹窗
   */
  showMultiplayerOptionsDialog() {
    // 创建弹窗(如果未创建)
    this.createMultiplayerOptionsDialog();
    
    if (!this.multiplayerOptionsDialog.parent && this.container.parent) {
      this.container.parent.addChild(this.multiplayerOptionsDialog);
    }
    
    // 设置位置
    this.multiplayerOptionsDialog.position.set(screen.width / 2, screen.height / 2);
    
    // 添加动画效果
    this.applyDialogAnimation(this.multiplayerOptionsDialog);
    
    this.multiplayerOptionsDialog.visible = true;
  }
  
  /**
   * 隐藏多人模式选项弹窗
   */
  hideMultiplayerOptionsDialog() {
    if (!this.multiplayerOptionsDialog) return;
    
    this.multiplayerOptionsDialog.visible = false;
  }
  
  /**
   * 在线匹配按钮点击处理
   */
  onOnlineMatchClick() {
    console.log('在线匹配点击');
    
    // 隐藏选项弹窗
    this.hideMultiplayerOptionsDialog();
    
    // 显示匹配中弹窗
    this.showMatchingDialog();
  }
  
  /**
   * 创建匹配中弹窗
   */
  createMatchingDialog() {
    // 如果已经创建过，不重复创建
    if (this.matchingDialog) return;
    
    // 创建弹窗容器
    this.matchingDialog = new PIXI.Container();
    this.matchingDialog.zIndex = 200;
    
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
    const title = new PIXI.Text("匹配中", {
      fontFamily: defaultFontFamily,
      fontSize: 20,
      fontWeight: "bold",
      fill: 0x333333
    });
    title.anchor.set(0.5, 0);
    title.position.set(0, -120);
    
    // 创建状态文本
    this.matchingStatusText = new PIXI.Text("正在匹配中...", {
      fontFamily: defaultFontFamily,
      fontSize: 16,
      fill: 0x333333
    });
    this.matchingStatusText.anchor.set(0.5, 0);
    this.matchingStatusText.position.set(0, -50);
    
    // 创建倒计时文本
    this.matchingCountdownText = new PIXI.Text("60", {
      fontFamily: defaultFontFamily,
      fontSize: 32,
      fontWeight: "bold",
      fill: 0x333333
    });
    this.matchingCountdownText.anchor.set(0.5, 0);
    this.matchingCountdownText.position.set(0, 0);
    
    // 创建取消按钮
    this.cancelMatchBtn = new Button({
      text: '取消',
      scale: 0.7,
      onClick: () => {
        this.onCancelMatchClick();
      }
    });
    this.cancelMatchBtn.position.set(0, 80);
    
    // 创建再次匹配按钮（默认隐藏）
    this.retryMatchBtn = new Button({
      text: '再次匹配',
      scale: 0.7,
      onClick: () => {
        this.onRetryMatchClick();
      }
    });
    this.retryMatchBtn.position.set(100, 80);
    this.retryMatchBtn.visible = false;
    
    // 添加到弹窗容器
    this.matchingDialog.addChild(
      background, 
      panel, 
      title, 
      this.matchingStatusText, 
      this.matchingCountdownText,
      this.cancelMatchBtn,
      this.retryMatchBtn
    );
    
    // 默认隐藏
    this.matchingDialog.visible = false;
  }
  
  /**
   * 显示匹配中弹窗并开始倒计时
   */
  showMatchingDialog() {
    // 创建弹窗(如果未创建)
    this.createMatchingDialog();
    
    if (!this.matchingDialog.parent && this.container.parent) {
      this.container.parent.addChild(this.matchingDialog);
    }
    
    // 重置匹配状态
    this.matchingStatusText.text = "正在匹配中...";
    this.matchingCountdownText.text = "60";
    this.cancelMatchBtn.position.set(0, 80);
    this.cancelMatchBtn.visible = true;
    this.retryMatchBtn.visible = false;
    
    // 设置位置
    this.matchingDialog.position.set(screen.width / 2, screen.height / 2);
    
    // 添加动画效果
    this.applyDialogAnimation(this.matchingDialog);
    
    this.matchingDialog.visible = true;
    
    // 开始倒计时
    this.startMatchingCountdown();
  }
  
  /**
   * 开始匹配倒计时
   */
  startMatchingCountdown() {
    // 清除之前的定时器
    if (this.matchingCountdownTimer) {
      clearInterval(this.matchingCountdownTimer);
    }
    
    let countdown = 60;
    this.matchingCountdownText.text = countdown.toString();
    
    this.matchingCountdownTimer = setInterval(() => {
      countdown--;
      this.matchingCountdownText.text = countdown.toString();
      
      if (countdown <= 0) {
        clearInterval(this.matchingCountdownTimer);
        this.onMatchingTimeout();
      }
    }, 1000);
  }
  
  /**
   * 匹配超时处理
   */
  onMatchingTimeout() {
    console.log('匹配超时');
    
    // 更新UI状态
    this.matchingStatusText.text = "匹配失败，请重试";
    this.matchingCountdownText.text = "";
    
    // 调整按钮位置，显示再次匹配按钮
    this.cancelMatchBtn.position.set(-100, 80);
    this.retryMatchBtn.visible = true;
  }
  
  /**
   * 隐藏匹配中弹窗并停止倒计时
   */
  hideMatchingDialog() {
    if (!this.matchingDialog) return;
    
    // 停止倒计时
    if (this.matchingCountdownTimer) {
      clearInterval(this.matchingCountdownTimer);
      this.matchingCountdownTimer = null;
    }
    
    this.matchingDialog.visible = false;
  }
  
  /**
   * 取消匹配按钮点击处理
   */
  onCancelMatchClick() {
    console.log('取消匹配');
    
    // 停止倒计时并隐藏弹窗
    this.hideMatchingDialog();
    
    // 返回多人模式选项弹窗
    this.showMultiplayerOptionsDialog();
  }
  
  /**
   * 再次匹配按钮点击处理
   */
  onRetryMatchClick() {
    console.log('再次匹配');
    
    // 重新开始匹配
    this.showMatchingDialog();
  }
  
  /**
   * 创建房间按钮点击处理
   */
  onCreateRoomClick() {
    console.log('创建房间点击');
    
    // 隐藏选项弹窗
    this.hideMultiplayerOptionsDialog();
    
    // 显示房间界面
    this.showRoomDialog();
  }
  
  /**
   * 创建房间界面
   */
  createRoomDialog() {
    // 如果已经创建过，不重复创建
    if (this.roomDialog) return;
    
    // 创建弹窗容器
    this.roomDialog = new PIXI.Container();
    this.roomDialog.zIndex = 200;
    
    // 创建半透明背景 - 仍然覆盖整个屏幕
    const background = new PIXI.Graphics();
    background.beginFill(0x000000, 0.7);
    background.drawRect(-screen.width/2, -screen.height/2, screen.width, screen.height);
    background.endFill();
    
    // 创建弹窗面板 - 减小高度
    const panel = new PIXI.Graphics();
    panel.beginFill(0xFFFFFF);
    panel.lineStyle(2, 0x999999);
    panel.drawRoundedRect(-240, -140, 480, 280, 10);
    panel.endFill();
    
    // 创建标题文本
    const title = new PIXI.Text("房间", {
      fontFamily: defaultFontFamily,
      fontSize: 20,
      fontWeight: "bold",
      fill: 0x333333
    });
    title.anchor.set(0.5, 0);
    title.position.set(0, -120);
    
    // 创建玩家位置容器
    this.playerSlotsContainer = new PIXI.Container();
    
    // 创建4个玩家位置 - 改为一排展示
    this.playerSlots = [];
    const slotPositions = [
      {x: -180, y: -40},
      {x: -60, y: -40},
      {x: 60, y: -40},
      {x: 180, y: -40}
    ];
    
    for (let i = 0; i < 4; i++) {
      const slot = this.createPlayerSlot(i);
      slot.position.set(slotPositions[i].x, slotPositions[i].y);
      this.playerSlotsContainer.addChild(slot);
      this.playerSlots.push(slot);
    }
    
    // 创建返回按钮 - 调整位置
    this.backToOptionsBtn = new Button({
      text: '返回',
      scale: 0.7,
      onClick: () => {
        this.onBackToOptionsClick();
      }
    });
    this.backToOptionsBtn.position.set(-100, 80);
    
    // 创建邀请好友按钮 - 调整位置
    this.inviteFriendBtn = new Button({
      text: '邀请好友',
      scale: 0.7,
      onClick: () => {
        this.onInviteFriendClick();
      }
    });
    this.inviteFriendBtn.position.set(100, 80);
    
    // 添加到弹窗容器
    this.roomDialog.addChild(
      background, 
      panel, 
      title, 
      this.playerSlotsContainer,
      this.backToOptionsBtn,
      this.inviteFriendBtn
    );
    
    // 默认隐藏
    this.roomDialog.visible = false;
  }
  
  /**
   * 创建玩家位置槽
   * @param {number} index - 位置索引
   * @returns {PIXI.Container} 玩家位置容器
   */
  createPlayerSlot(index) {
    const slot = new PIXI.Container();
    
    // 创建头像背景 - 缩小尺寸以适应一排显示
    const avatarBg = new PIXI.Graphics();
    avatarBg.beginFill(0xEEEEEE);
    avatarBg.lineStyle(2, 0x999999);
    avatarBg.drawRoundedRect(-30, -30, 60, 60, 8);
    avatarBg.endFill();
    slot.addChild(avatarBg);
    
    // 如果是第一个位置且有用户信息，显示当前用户头像
    if (index === 0 && this.userProfile) {
      // 创建头像 - 调整大小
      const avatar = PIXI.Sprite.from(this.userProfile.avatarUrl);
      avatar.width = 50;
      avatar.height = 50;
      avatar.anchor.set(0.5);
      avatar.position.set(0, 0);
      slot.addChild(avatar);
      
      // 创建用户名文本 - 调整位置和大小
      const nameText = new PIXI.Text(this.userProfile.nickName, {
        fontFamily: defaultFontFamily,
        fontSize: 12,
        fill: 0x333333,
        wordWrap: true,
        wordWrapWidth: 60
      });
      nameText.anchor.set(0.5, 0);
      nameText.position.set(0, 35);
      slot.addChild(nameText);
    } else {
      // 创建空位文本
      const emptyText = new PIXI.Text("无", {
        fontFamily: defaultFontFamily,
        fontSize: 14,
        fill: 0x999999
      });
      emptyText.anchor.set(0.5);
      emptyText.position.set(0, 0);
      slot.addChild(emptyText);
    }
    
    return slot;
  }
  
  /**
   * 显示房间界面
   */
  showRoomDialog() {
    // 创建弹窗(如果未创建)
    this.createRoomDialog();
    
    if (!this.roomDialog.parent && this.container.parent) {
      this.container.parent.addChild(this.roomDialog);
    }
    
    // 设置位置
    this.roomDialog.position.set(screen.width / 2, screen.height / 2);
    
    // 添加动画效果
    this.applyDialogAnimation(this.roomDialog);
    
    this.roomDialog.visible = true;
  }
  
  /**
   * 隐藏房间界面
   */
  hideRoomDialog() {
    if (!this.roomDialog) return;
    
    this.roomDialog.visible = false;
  }
  
  /**
   * 返回多人模式选项按钮点击处理
   */
  onBackToOptionsClick() {
    console.log('返回多人模式选项');
    
    // 隐藏房间界面
    this.hideRoomDialog();
    
    // 显示多人模式选项弹窗
    this.showMultiplayerOptionsDialog();
  }
  
  /**
   * 邀请好友按钮点击处理
   */
  onInviteFriendClick() {
    console.log('邀请好友');
    
    // 调用微信分享API
    wx.shareAppMessage({
      title: '来和我一起玩捕鱼游戏吧！',
      imageUrl: 'https://mmocgame.qpic.cn/wechatgame/MyliadyoiaBibeD9ibDLesgO8Nw1ebJmGPbo09N3icmnR0gC6hH0UDUnicpQEaIZCTicZAw/0', // 分享图片
      success: (res) => {
        console.log('分享成功', res);
      },
      fail: (err) => {
        console.error('分享失败', err);
      }
    });
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
    if (this.privacyDialog && this.privacyDialog.visible) {
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
    
    // 如果登录失败弹窗可见
    if (this.loginFailedDialog && this.loginFailedDialog.visible) {
      // 检查是否点击了重新登录按钮
      if (this._checkButtonHit(x, y, this.loginFailedDialog, this.retryLoginBtn)) {
        if (isDown) {
          this.retryLoginBtn._onPointerDown();
        } else {
          this.retryLoginBtn._onPointerUp();
        }
      }
      return;
    }
    
    // 如果多人模式弹窗可见
    if (this.multiplayerOptionsDialog && this.multiplayerOptionsDialog.visible) {
      // 检查是否点击了关闭按钮
      if (this._checkButtonHit(x, y, this.multiplayerOptionsDialog, this.closeOptionsButton)) {
        if (isDown) {
          // 按下效果，可以稍微缩小按钮
          this.closeOptionsButton.scale.set(0.9);
        } else {
          // 弹起效果，恢复按钮大小并触发点击
          this.closeOptionsButton.scale.set(1.0);
          this.hideMultiplayerOptionsDialog();
        }
        return; // 处理完关闭按钮点击后直接返回
      }
      
      // 检查是否点击了在线匹配按钮
      if (this._checkButtonHit(x, y, this.multiplayerOptionsDialog, this.onlineMatchBtn)) {
        if (isDown) {
          this.onlineMatchBtn._onPointerDown();
        } else {
          this.onlineMatchBtn._onPointerUp();
        }
      }
      // 检查是否点击了创建房间按钮
      else if (this._checkButtonHit(x, y, this.multiplayerOptionsDialog, this.createRoomBtn)) {
        if (isDown) {
          this.createRoomBtn._onPointerDown();
        } else {
          this.createRoomBtn._onPointerUp();
        }
      }
      return;
    }
    
    // 如果匹配弹窗可见
    if (this.matchingDialog && this.matchingDialog.visible) {
      // 检查是否点击了取消按钮
      if (this._checkButtonHit(x, y, this.matchingDialog, this.cancelMatchBtn)) {
        if (isDown) {
          this.cancelMatchBtn._onPointerDown();
        } else {
          this.cancelMatchBtn._onPointerUp();
        }
      }
      // 检查是否点击了再次匹配按钮
      else if (this.retryMatchBtn.visible && this._checkButtonHit(x, y, this.matchingDialog, this.retryMatchBtn)) {
        if (isDown) {
          this.retryMatchBtn._onPointerDown();
        } else {
          this.retryMatchBtn._onPointerUp();
        }
      }
      return;
    }
    
    // 如果房间弹窗可见
    if (this.roomDialog && this.roomDialog.visible) {
      // 检查是否点击了返回按钮
      if (this._checkButtonHit(x, y, this.roomDialog, this.backToOptionsBtn)) {
        if (isDown) {
          this.backToOptionsBtn._onPointerDown();
        } else {
          this.backToOptionsBtn._onPointerUp();
        }
      }
      // 检查是否点击了邀请好友按钮
      else if (this._checkButtonHit(x, y, this.roomDialog, this.inviteFriendBtn)) {
        if (isDown) {
          this.inviteFriendBtn._onPointerDown();
        } else {
          this.inviteFriendBtn._onPointerUp();
        }
      }
      return;
    }
    
    // 检查是否点击了主界面按钮
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
   * 通用检查按钮是否被点击
   * @param {number} x - 触摸X坐标
   * @param {number} y - 触摸Y坐标
   * @param {PIXI.Container} dialogContainer - 弹窗容器
   * @param {Button} button - 按钮对象
   * @returns {boolean} 是否命中
   * @private
   */
  _checkButtonHit(x, y, dialogContainer, button) {
    // 计算按钮全局位置
    const dialogPos = {
      x: screen.width / 2 + dialogContainer.position.x,
      y: screen.height / 2 + dialogContainer.position.y
    };
    
    const btnPos = {
      x: dialogPos.x + button.position.x,
      y: dialogPos.y + button.position.y
    };
    
    // 获取按钮的点击区域
    const btnHitArea = button.hitArea;
    
    // 检查是否点击了按钮
    return (
      x >= btnPos.x + btnHitArea.x &&
      x <= btnPos.x + btnHitArea.x + btnHitArea.width &&
      y >= btnPos.y + btnHitArea.y &&
      y <= btnPos.y + btnHitArea.y + btnHitArea.height
    );
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

  /**
   * 为弹窗添加弹出动画效果
   * @param {PIXI.Container} dialog - 弹窗容器
   */
  applyDialogAnimation(dialog) {
    // 查找对话框中的面板（通常是第二个子元素，第一个是背景）
    const panel = dialog.children.find(child => child instanceof PIXI.Graphics && child !== dialog.children[0]);
    
    if (!panel) return;
    
    // 将动画应用于面板及其后的所有子元素（除背景外的所有内容）
    const elementsToAnimate = dialog.children.filter(child => child !== dialog.children[0]);
    
    // 初始状态
    elementsToAnimate.forEach(element => {
      element.scale.set(0.5);
      element.alpha = 0;
    });
    
    // 使用popmotion的animate进行动画
    animate({
      from: { scale: 0.5, alpha: 0 },
      to: { scale: 1, alpha: 1 },
      duration: 300,
      onUpdate: (value) => {
        elementsToAnimate.forEach(element => {
          element.scale.set(value.scale);
          element.alpha = value.alpha;
        });
      }
    });
  }
}

export default GameStartUI; 
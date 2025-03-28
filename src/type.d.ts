/// <reference types="vite/client"/>
/// <reference types="pixi.js"/>

interface ImportMetaEnv {
  readonly VITE_SIZE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.frag?raw' {
  const v: string
  export = v
}

declare module '*.vert?raw' {
  const v: string
  export = v
}

declare namespace GlobalMixins {
  interface DisplayObject {
    userData?: Record<string, any>
  }
}

type SceneName = 'prelude' | 'game'

type DisplayObject = import('pixi.js').DisplayObject

interface IEvent<T = DisplayObject, U = DisplayObject> {
  x: number
  y: number
  stopped: boolean
  target: T
  currentTarget: U
}

declare const canvas: HTMLCanvasElement

declare module wx {
  module cloud {
    function downloadFile(opts: Callback<{
      fileID: string
      config?: {
        env: string
      }
      success: (opts: {
        tempFilePath: string
      }) => void
      fail: (opts: {
        errCode: number
        errMsg: string
      }) => void
    }>): void

    function init(opts: {
      env: string
      traceUser?: boolean
    }): void
  }

  module env {
    const USER_DATA_PATH: string
  }

  interface OpenDataContext {
    postMessage(opts: Record<string, unknown>): void
  }

  interface RewardVideoAd {
    load(): Promise<any>
    onError(cb: Function): void
    onClose(cb: (opts: {isEnded: boolean}) => void): void
    offClose(cb?: Function): void
    show(): Promise<any>
    destroy(): void
  }

  function createRewardedVideoAd(opts: {
    adUnitId: string
    multiton?: boolean
  }): RewardVideoAd

  function showModal(opts: {
    title: string
    content?: string
    showCancel?: boolean
    cancelText?: string
    confirmText?: string
    success?: (opts: {confirm: boolean, cancel: boolean}) => void
    fail?: () => void
  })

  function showShareMenu(opts?: {
    menus?: Array<'shareAppMessage' | 'shareTimeline'>
    withShareTicket?: boolean
  }): void

  interface UpdateManager {
    onUpdateReady(cb: Function): void
    applyUpdate(): void
  }

  function getUpdateManager(): UpdateManager

  /** 事件上报 */
  function reportEvent(e: string, opts?: Record<string, unknown>): void

  function getOpenDataContext(): OpenDataContext

  function onMessage(cb: (opts: Record<string, unknown>) => void): void

  function exitMiniProgram(): void

  function getPotentialFriendList(opts: {
    success: (data: Array<{
      nickname: string
      avatarUrl: string
      openid: string
    }>) => void

    fail: (err: any) => void
  }): void

  function getEnterOptionsSync(): {
    scene: number
    query: Record<string, unknown>
  }

  function shareMessageToFriend(opts: {
    openId: string
    title?: string
    imageUrl?: string
    success?: () => void
    fail?: () => void
  }): void

  function getStorageInfo(): Promise<{
    keys: string[]
    currentSize: number
    limitSize: number
  }>

  function login(opts?: {
    /** 单位ms */
    timeout?: number
  }): Promise<{code: string}>

  function getChannelsLiveInfo(opts: Callback<{
    finderUserName: string
  }>)

  function setStorage(opts: {
    key: string
    data: any
    success?: () => void
    fail?: () => void
    complete?: () => void
  }): Promise<void>
  function setStorageSync(key: string, data: any): void

  function getStorage<T>(opts: {
    key: string
    success?: (res: {data: T}) => void
    fail?: () => void
    complete?: () => void
  }): Promise<{data: T}>
  function getStorageSync<T>(key: string): T

  function removeStorage(opts: {
    key: string
    success?: () => void
    fail?: () => void
    complete?: () => void
  }): Promise<void>
  function removeStorageSync(key: string): void

  function clearStorage(opts: {
    success?: () => void
    fail?: () => void
    complete?: () => void
  }): Promise<void>
  function clearStorageSync(): void

  function clearStorage(opts: {
    url: string
    header?: Record<string, any>
    timeout?: number
    filePath: string
    enableHttp2?: boolean
    success?: (res: {filePath: string}) => void
    fail?: () => void
  })

  function uploadFile(opts: {
    url: string
    filePath: string
    name: string
    header?: Record<string, any>
    formData?: Record<string, any>
    success?: (res: {data: string, statusCode: number}) => void
    fail?: (error: any) => void
    complete?: () => void
  }): void

  function onWindowResize(cb: (res: {windowWidth: number, windowHeight: number}) => void): void

  function request(opts: {
    url: string 
    data?: string | object | ArrayBuffer
    header?: Record<string, any>
    timeout?: number
    method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT' | 'PATCH'
    dataType?: 'json' | string
    responseType?: 'text' | 'arraybuffer'
    success?: (res: any) => void
    fail?: (err: any) => void
    complete?: (res: any) => void
  })

  function connectSocket(opts: {
    url: string
    header?: Record<string, any>
    protocols?: string[]
    tcpNoDelay?: boolean
    perMessageDeflate?: boolean
    timeout?: number
    forceCellularNetwork?: boolean
    success?: (res: any) => void
    fail?: () => void
    complete?: () => void
  }): SocketTask

  interface SocketTask {
    send(opts: {
      data: string | ArrayBuffer
      success?: () => void
      fail?: () => void
      complete?: () => void
    }): void

    close(opts: {
      code?: number
      reason?: string
      success?: () => void
      fail?: () => void
      complete?: () => void
    }): void

    /**
     * header	object	连接成功的 HTTP 响应 Header	2.0.0
     * profile	Object	网络请求过程中一些调试信息	2.10.4
     */
    onOpen(cb: (res: { header: Record<string, any>, profile: Record<string, any> }) => void): void

    /**
     * code	number	一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
     * reason	string	一个可读的字符串，表示连接被关闭的原因。
     */
    onClose(cb: (res: { code: number, reason: string }) => void): void

    /**
     * errMsg	string	错误信息
     */
    onError(cb: (res: { errMsg: string }) => void): void

    /**
     * data	string/ArrayBuffer	服务器返回的消息
     */
    onMessage(cb: (res: { data: string | ArrayBuffer }) => void): void
  }

  function closeSocket(opts: {
    code?: number
    reason?: string
    success?: () => void
    fail?: () => void
    complete?: () => void
  })  

  function sendSocketMessage(opts: {
    data: string | ArrayBuffer
    success?: () => void
    fail?: () => void
    complete?: () => void
  })

  function onSocketMessage(cb: (res: any) => void): void

  function onSocketOpen(cb: () => void): void

  function onSocketClose(cb: () => void): void

  function onSocketError(cb: () => void): void

  interface Touch {
    identifier: number
    pageX: number
    pageY: number
    clientX: number
    clientY: number
    force: number
  }

  interface IRect {
    width: number
    height: number
    top: number
    left: number
    right: number
    bottom: number
  }

  interface IVideo {

  }

  function createVideo(opts: {
    x?: number
    y?: number
    width?: number
    height?: number
    src: string
    poster?: string
    initialTime?: number
    playbackRate?: number
    live?: boolean
    objectFit?: 'fill' | 'contain' | 'cover'
    controls?: boolean
    showProgress?: boolean
    showProgressInControlMode?: boolean
    backgroundColor?: string
    autoplay?: boolean
    loop?: boolean
    muted?: boolean
    obeyMuteSwitch?: boolean
    enableProgressGesture?: boolean
    enablePlayGesture?: boolean
    showCenterPlayBtn?: boolean
    underGameView?: boolean
  }): IVideo

  function previewImage(opts: Callback<{
    urls: string[],
    showmenu?: boolean
    current?: string
  }>): void

  function getMenuButtonBoundingClientRect(): IRect

  interface IInnerAudioContext {
    /** 音频资源的地址，用于直接播放。2.2.3 开始支持云文件ID */
    src: string

    /** 开始播放的位置（单位：s），默认为 0 */
    startTime: number

    /** 是否自动开始播放，默认为 false */
    autoplay: boolean

    /** 是否循环播放，默认为 false */
    loop: boolean

    /** 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。从 2.3.0 版本开始此参数不生效，使用 wx.setInnerAudioOption 接口统一设置。 */
    obeyMuteSwitch: boolean

    /** 音量。范围 0~1。默认为 1 */
    volume: number

    /** 播放速度。范围 0.5-2.0，默认为 1。（Android 需要 6 及以上版本） */
    playbackRate: number

    /** 当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读） */
    readonly duration: number

    /** 当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读） */
    readonly currentTime: number

    /** 当前是是否暂停或停止状态（只读） */
    readonly paused: boolean

    /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读） */
    readonly buffered: number

    /** 播放 */
    play()

    /** 暂停。暂停后的音频再播放会从暂停处开始播放 */
    pause()

    /** 停止。停止后的音频再播放会从头开始播放。 */
    stop()

    /** 跳转到指定位置 */
    seek(position: number)

    /** 销毁当前实例 */
    destroy()

    /** 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放 */
    onCanplay(cb: () => void)

    /** 取消监听音频进入可以播放状态的事件 */
    offCanplay(cb: () => void)

    /** 监听音频播放事件 */
    onPlay(cb: () => void)

    /** 取消监听音频播放事件 */
    offPlay(cb: () => void)

    /** 监听音频暂停事件 */
    onPause(cb: () => void)

    /** 取消监听音频暂停事件 */
    offPause(cb: () => void)

    /** 监听音频停止事件 */
    onStop(cb: () => void)

    /** 取消监听音频停止事件 */
    offStop(cb: () => void)

    /** 监听音频自然播放至结束的事件 */
    onEnded(cb: () => void)

    /** 取消监听音频自然播放至结束的事件 */
    offEnded(cb: () => void)

    /** 监听音频播放进度更新事件 */
    onTimeUpdate(cb: () => void)

    /** 取消监听音频播放进度更新事件 */
    offTimeUpdate(cb: () => void)

    /** 监听音频播放错误事件 */
    onError(cb: (res: any) => void)

    /** 取消监听音频播放错误事件 */
    offError(cb: () => void)

    /** 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 */
    onWaiting(cb: () => void)

    /** 取消监听音频加载中事件 */
    offWaiting(cb: () => void)

    /** 监听音频进行跳转操作的事件 */
    onSeeking(cb: () => void)

    /** 取消监听音频进行跳转操作的事件 */
    offSeeking(cb: () => void)

    /** 监听音频完成跳转操作的事件 */
    onSeeked(cb: () => void)

    /** 取消监听音频完成跳转操作的事件 */
    offSeeked(cb: () => void)
  }

  function createInnerAudioContext(opts?: {
    useWebAudioImplement?: boolean
  }): IInnerAudioContext

  function loadSubpackage(opts: Callback<{
    name: string
  }>): void

  function offTouchMove(fn: Function): void
  function onTouchMove(opts: (opts: {
    touches: Touch[]
    changedTouches: Touch[]
    timeStamp: number
  }) => void): void

  function offTouchStart(fn: Function): void
  function onTouchStart(opts: (opts: {
    touches: Touch[]
    changedTouches: Touch[]
    timeStamp: number
  }) => void): void

  function offTouchEnd(fn: Function): void
  function onTouchEnd(opts: (opts: {
    touches: Touch[]
    changedTouches: Touch[]
    timeStamp: number
  }) => void): void

  function offTouchCancel(fn: Function): void
  function onTouchCancel(opts: (opts: {
    touches: Touch[]
    changedTouches: Touch[]
    timeStamp: number
  }) => void): void

  function hideLoading(): void

  function showLoading(opts: {
    title: string
    mask?: boolean
  }): void

  function showToast(opts: {
    title: string
    icon?: 'success' | 'error' | 'loading' | 'none'
    duration?: number
    mask?: boolean
  }): void

  function hideToast(): void

  function setEnableDebug(opts: Callback<{
    enableDebug: boolean
  }>): void

  function getFileSystemManager(): FileSystemManager

  interface FileSystemManager {
    access: (opts: Callback<{
      path: string
      fail?: (otps: {errMsg: string}) => void
    }>) => void

    saveFile: (opts: Callback<{
      tempFilePath: string
      filePath?: string
      success?: (opts: {
        savedFilePath: string
      }) => void
      fail?: (opts: {
        errMsg: string
      }) => void
    }>) => void

    mkdir: (opts: Callback<{
      dirPath: string
      recursive?: boolean,
      fail?: (opts: {errMsg: string}) => void
    }>) => void

    readFile: (opts: Callback<{
      filePath: string
      encoding?: 'ascii' | 'base64' | 'binary' | 'hex' | 'utf-8' | 'utf8'
      position?: number
      length?: number
      success?: (opts: {data: string | ArrayBuffer}) => void
      fail?: (opts: {errMsg: string}) => void
    }>) => void
  }

  /** 监听用户点击菜单「收藏」按钮时触发的事件（安卓7.0.15起支持，iOS 暂不支持 */
  function onAddToFavorites(fn: () => {
    title: string
    query: string
    imageUrl: string
    disableForward: boolean
  }): void

  /** 获取系统信息 */
  function getSystemInfoSync(): {
    windowWidth: number
    windowHeight: number
    pixelRatio: number
    devicePixelRatio: number
  }

  function onShow(opt: (opt: {
    scene: string
    query: Record<string, unknown>
    shareTicket: string
    referrerInfo: {
      appId: string
      extraData: any
    }
  }) => void): void

  function offShow(opt: () => void): void

  function onHide(opt: () => void): void

  function offHide(opt: () => void): void

  function shareAppMessage(opt: {
    title?: string
    imageUrl?: string
    query?: string
    imageUrlId?: string
  }): void

  function onShareAppMessage(opt: () => {
    title?: string
    imageUrl?: string
    query?: string
    imageUrlId?: string
  }): void

  function onShareTimeline(opt: () => {
    title?: string
    imageUrl?: string
    query?: string
  }): void

  function showActionSheet(opts: Callback<{
    itemList: string[]
    itemColor?: string
    success?: (opt: {tapIndex: number}) => void
  }>): void

  interface IUserInfo {
    userInfo: {
      nickName: string
      avatarUrl: string
      /** 0: 未知 1: 男 2: 女 */
      gender: 0 | 1 | 2
      country: string
      city: string
      province: string
      language: 'en' | 'zh_CN' | 'zh_TW'
    }
    iv: string
    errMsg?: string
    rawData: string
    signature: string
    encryptedData: string
  }

  function createUserInfoButton(opts: {
    type: 'text' | 'image'
    text?: string
    image?: string
    withCredentials?: boolean
    lang?: 'en' | 'zh_CN' | 'zh_TW'
    style: {
      left: number
      top: number
      width: number
      height: number
      backgroundColor?: string
      borderColor?: string
      borderWidth?: number
      borderRadius?: number
      color?: string
      textAlign?: 'left' | 'center' | 'right'
      fontSize?: number
      lineHeight?: number
    }
  }): {
    show: () => void
    hide: () => void
    destroy: () => void
    onTap: (cb: (info: IUserInfo) => void) => void
    offTap: () => void
  }

  function getUserInfo(opts: Callback<{
    withCredentials?: boolean
    lang?: 'en' | 'zh_CN' | 'zh_TW'
    success?: (info: IUserInfo) => void
  }>): void

  function onAudioInterruptionEnd(cb: () => void): void

  interface IBannerAd {
    style: {
      top: number
      left: number
      width: number
      height: number
    }
    show: () => Promise<unknown>
    hide: () => Promise<unknown>
    destroy: () => void
    onError: (cb: (opts: {errMsg: string, errCode: number}) => void) => void
    onResize: (cb: (opts: {width: number, height: number}) => void) => void
  }

  function createBannerAd(opt: {
    adUnitId: string
    adIntervals?: number
    style?: {
      top?: number
      left?: number
      width?: number
      height?: number
    }
  }): IBannerAd

  interface IGameClubButton {
    show: () => void
    hide: () => void
    style: Partial<{
      left: number
      right: number
      top: number
      width: number
      height: number
      backgroundColor: number
      borderColor: number
      borderWidth: number
      borderRadius: number
      color: string
      textAlign: 'left' | 'center' | 'right'
      fontSize: number
      lineHeight: number
    }>
  }

  function createGameClubButton(opts: {
    type?: 'text' | 'string'
    text?: string
    image?: string
    icon: 'green' | 'white' | 'dark' | 'light'
  } & Pick<IGameClubButton, 'style'>): IGameClubButton

  interface ICustomAd {
    show: () => Promise<unknown>
    hide: () => Promise<unknown>
    destroy: () => void
    onError: (cb: (opts: {errMsg: string, errCode: number}) => void) => void
  }

  function createCustomAd(opt: {
    adUnitId: string
    adIntervals?: number
    style?: {
      left?: number
      top?: number
      fixed?: boolean
    }
  }): ICustomAd

  interface IInterstitialAd {
    show: () => Promise<unknown>
    hide: () => void
    destroy: () => void
    load: () => Promise<unknown>
    onLoad: (cb: () => void) => void
    onError: (cb: (opts: {errMsg: string, errCode: number}) => void) => void
    onClose: (cb: (res?: any) => void) => void
    offClose: (cb?: Function) => void
  }

  function createInterstitialAd(opts: {
    adUnitId: string
  }): IInterstitialAd

  function loadFont(path: string): string

  // type	string		是	震动强度类型，有效值为：heavy、medium、light
  // 设备振动API
  function vibrateShort(opts?: {
    type?: 'heavy' | 'medium' | 'light'
    success?: () => void
    fail?: () => void
    complete?: () => void
  }): void

  function vibrateLong(opts?: {
    success?: () => void
    fail?: () => void
    complete?: () => void
  }): void

  type Callback<T> = T & Omit<Partial<{
    fail: (...args: any[]) => void
    success: (...args: any[]) => void
    complete: () => void
  }>, keyof T>
}

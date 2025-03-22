/**
 * 音频管理模块
 * 负责游戏中的各种音频播放控制
 */
class AudioManager {
  constructor() {
    this.bgm = null;
    this.isBgmPlaying = false;
    this.effectSounds = {};
    this.webAudioContext = null;
    
    // 初始化WebAudio上下文（仅微信环境）
    if (typeof wx !== 'undefined') {
      try {
        this.webAudioContext = wx.createWebAudioContext();
        console.log('WebAudioContext初始化成功');
      } catch (error) {
        console.error('WebAudioContext初始化失败:', error);
      }
    }
  }

  /**
   * 播放背景音乐
   * @param {string} url - 音频文件路径
   * @param {boolean} loop - 是否循环播放
   */
  playBGM(url, loop = true) {
    try {
      // 如果已经在播放相同的背景音乐，则不重复创建
      if (this.bgm && this.isBgmPlaying && this.bgm.src.includes(url)) {
        console.log('背景音乐已在播放中');
        return;
      }

      // 停止当前正在播放的背景音乐
      this.stopBGM();

      console.log('开始播放背景音乐:', url);
      
      // 使用微信小游戏API创建背景音乐
      if (typeof wx !== 'undefined') {
        // 使用InnerAudioContext播放背景音乐，适合大型音频文件
        this.bgm = wx.createInnerAudioContext();
        this.bgm.src = url;
        this.bgm.loop = loop;
        this.bgm.autoplay = true;
        
        // 添加事件监听
        this.bgm.onPlay(() => {
          console.log('背景音乐开始播放');
          this.isBgmPlaying = true;
        });
        
        this.bgm.onError((err) => {
          console.error('背景音乐播放失败:', err);
          this.isBgmPlaying = false;
        });
        
        this.bgm.onEnded(() => {
          console.log('背景音乐播放结束');
          this.isBgmPlaying = false;
          
          // 如果需要循环但onEnded被触发，手动重新播放
          if (loop) {
            this.bgm.play();
          }
        });
      } 
      // 在非微信环境下使用HTML5 Audio API
      else {
        this.bgm = new Audio(url);
        this.bgm.loop = loop;
        this.bgm.addEventListener('play', () => {
          console.log('背景音乐开始播放');
          this.isBgmPlaying = true;
        });
        
        this.bgm.addEventListener('error', (err) => {
          console.error('背景音乐播放失败:', err);
          this.isBgmPlaying = false;
        });
        
        this.bgm.addEventListener('ended', () => {
          console.log('背景音乐播放结束');
          this.isBgmPlaying = false;
        });
        
        this.bgm.play().catch(err => {
          console.error('无法自动播放背景音乐:', err);
        });
      }
    } catch (error) {
      console.error('播放背景音乐出错:', error);
    }
  }

  /**
   * 暂停背景音乐
   */
  pauseBGM() {
    if (this.bgm && this.isBgmPlaying) {
      console.log('暂停背景音乐');
      this.bgm.pause();
      this.isBgmPlaying = false;
    }
  }

  /**
   * 恢复播放背景音乐
   */
  resumeBGM() {
    if (this.bgm && !this.isBgmPlaying) {
      console.log('恢复播放背景音乐');
      this.bgm.play();
      this.isBgmPlaying = true;
    }
  }

  /**
   * 停止并释放背景音乐
   */
  stopBGM() {
    if (this.bgm) {
      console.log('停止背景音乐');
      this.bgm.stop && this.bgm.stop();
      this.bgm.destroy && this.bgm.destroy();
      this.bgm = null;
      this.isBgmPlaying = false;
    }
  }

  /**
   * 播放音效
   * @param {string} name - 音效名称
   * @param {string} url - 音效文件路径
   */
  playEffect(name, url) {
    try {
      // 使用微信小游戏API创建音效
      if (typeof wx !== 'undefined') {
        // 使用createWebAudioContext播放音效，适合短音频、播放频繁的场景
        // 性能更好，内存占用更小
        if (!this.effectSounds[name]) {
          // 加载音效
          const soundEffect = {
            buffer: null,
            loaded: false,
            isPlaying: false
          };
          
          console.log('加载音效:', url);
          
          // 直接加载本地音频文件
          const audioContext = wx.createWebAudioContext();
          const fileManager = wx.getFileSystemManager();
          
          try {
            // 读取本地文件
            const fileData = fileManager.readFileSync(url);
            
            // 解码音频数据
            audioContext.decodeAudioData(fileData.buffer || fileData, (buffer) => {
              soundEffect.buffer = buffer;
              soundEffect.loaded = true;
              console.log('音效加载成功:', name);
              
              // 如果是刚添加的音效，立即播放
              this.playLoadedEffect(name);
            }, (err) => {
              console.error('音效解码失败:', err);
              
              // 降级处理：使用InnerAudioContext播放
              this.playEffectWithInnerAudio(name, url);
            });
          } catch (error) {
            console.error('读取本地音效文件失败，尝试直接播放:', error);
            
            // 如果读取文件失败，尝试直接使用InnerAudioContext播放
            this.playEffectWithInnerAudio(name, url);
          }
          
          this.effectSounds[name] = soundEffect;
        } else if (this.effectSounds[name].loaded) {
          // 如果已加载，直接播放
          this.playLoadedEffect(name);
        }
      } 
      // 在非微信环境下使用HTML5 Audio API
      else {
        const sound = new Audio(url);
        sound.addEventListener('ended', () => {
          delete this.effectSounds[name];
        });
        
        sound.play().catch(err => {
          console.error('无法播放音效:', err);
        });
        
        // 存储音效引用
        this.effectSounds[name] = { htmlAudio: sound, isPlaying: true };
      }
    } catch (error) {
      console.error('播放音效出错:', error);
      
      // 发生错误时，尝试使用InnerAudioContext直接播放
      this.playEffectWithInnerAudio(name, url);
    }
  }
  
  /**
   * 播放已加载的音效
   * @param {string} name - 音效名称
   */
  playLoadedEffect(name) {
    if (!this.webAudioContext || !this.effectSounds[name] || !this.effectSounds[name].loaded) {
      return;
    }
    
    try {
      const soundEffect = this.effectSounds[name];
      
      // 创建音频源
      const source = this.webAudioContext.createBufferSource();
      source.buffer = soundEffect.buffer;
      
      // 连接到输出
      source.connect(this.webAudioContext.destination);
      
      // 播放
      source.start(0);
      soundEffect.isPlaying = true;
      
      // 结束时的回调
      source.onended = () => {
        soundEffect.isPlaying = false;
      };
    } catch (error) {
      console.error('播放已加载音效失败:', error);
    }
  }
  
  /**
   * 使用InnerAudioContext播放音效（作为WebAudio的降级方案）
   * @param {string} name - 音效名称
   * @param {string} url - 音效文件路径
   */
  playEffectWithInnerAudio(name, url) {
    if (typeof wx === 'undefined') return;
    
    try {
      console.log('使用InnerAudioContext播放音效:', url);
      
      const audio = wx.createInnerAudioContext();
      audio.src = url;
      audio.autoplay = true;
      
      // 播放完成后释放资源
      audio.onEnded(() => {
        audio.destroy();
        
        // 清理引用
        if (this.effectSounds[name] && this.effectSounds[name].innerAudio === audio) {
          delete this.effectSounds[name].innerAudio;
        }
      });
      
      // 错误处理
      audio.onError((err) => {
        console.error('InnerAudioContext播放音效失败:', err);
        audio.destroy();
      });
      
      // 存储音效引用
      if (this.effectSounds[name]) {
        this.effectSounds[name].innerAudio = audio;
      } else {
        this.effectSounds[name] = { innerAudio: audio, isPlaying: true };
      }
    } catch (error) {
      console.error('使用InnerAudioContext播放音效失败:', error);
    }
  }
  
  /**
   * 释放所有音效资源
   */
  releaseAllEffects() {
    // 释放音效资源
    this.effectSounds = {};
    
    console.log('所有音效资源已释放');
  }
}

// 创建单例实例
const audioManager = new AudioManager();

export default audioManager; 
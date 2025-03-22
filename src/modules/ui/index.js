/**
 * UI组件库主入口文件
 * 统一导出所有UI组件，方便在项目中引用
 */
import Button from './components/Button';
import Modal from './components/Modal';
import Toast from './components/Toast';

// 导出所有组件
export {
  Button,
  Modal,
  Toast
};

/**
 * 显示Toast提示
 * @param {Object|string} options - 配置选项或提示文本
 * @param {string} [options.text] - 提示文本
 * @param {string} [options.type='info'] - 提示类型，支持 'info', 'success', 'error', 'warning'
 * @param {number} [options.duration=2000] - 显示时长(毫秒)
 * @param {PIXI.Container} options.parent - 父容器
 * @returns {Toast} Toast实例
 */
export const showToast = (options, parent) => {
  // 如果options是字符串，转换为对象
  if (typeof options === 'string') {
    options = {
      text: options,
      parent
    };
  }
  
  return Toast.show(options);
};

/**
 * 显示模态对话框
 * @param {Object} options - 配置选项
 * @param {string} [options.title=''] - 对话框标题
 * @param {string} [options.content=''] - 对话框内容
 * @param {string} [options.bgImage='assets/images/modalBg.png'] - 对话框背景图片
 * @param {number} [options.width=400] - 对话框宽度
 * @param {number} [options.height=300] - 对话框高度
 * @param {boolean} [options.showClose=true] - 是否显示关闭按钮
 * @param {Array} [options.buttons=[]] - 按钮配置，例如 [{text: '确定', onClick: () => {}}]
 * @param {Function} [options.onClose] - 关闭回调
 * @param {PIXI.Container} parent - 父容器
 * @returns {Modal} 模态对话框实例
 */
export const showModal = (options, parent) => {
  const modal = new Modal(options);
  if (parent) {
    modal.show(parent);
  }
  return modal;
};

export default {
  Button,
  Modal,
  Toast,
  showToast,
  showModal
}; 
#!/bin/bash

# 停止旧的PM2进程
pm2 stop fish-game-server || true
pm2 delete fish-game-server || true

# 构建项目
echo "正在构建项目..."
pnpm build

# 确保SSL目录存在
echo "检查SSL证书目录..."
mkdir -p ssl

# 如果没有SSL证书，提示生成测试证书
if [ ! -f "./ssl/cert.pem" ] || [ ! -f "./ssl/key.pem" ]; then
  echo "未找到SSL证书，您可以使用以下命令生成自签名证书用于测试:"
  echo "openssl req -x509 -newkey rsa:4096 -keyout ssl/key.pem -out ssl/cert.pem -days 365 -nodes"
fi

# 启动PM2
echo "正在启动服务..."
pm2 start ecosystem.config.js

echo "部署完成! 服务已通过PM2启动"
echo "查看日志: pm2 logs fish-game-server"
echo "查看状态: pm2 status" 
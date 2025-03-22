@echo off
echo 正在部署服务...

REM 停止旧的PM2进程
call pm2 stop fish-game-server
call pm2 delete fish-game-server

REM 构建项目
echo 正在构建项目...
call pnpm build

REM 确保SSL目录存在
echo 检查SSL证书目录...
if not exist "ssl" mkdir ssl

REM 如果没有SSL证书，提示生成测试证书
if not exist "ssl\cert.pem" (
  echo 未找到SSL证书，您可以使用OpenSSL生成自签名证书用于测试
)

REM 启动PM2
echo 正在启动服务...
call pm2 start ecosystem.config.js

echo 部署完成! 服务已通过PM2启动
echo 查看日志: pm2 logs fish-game-server
echo 查看状态: pm2 status 
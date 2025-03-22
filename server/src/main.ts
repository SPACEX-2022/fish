import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  
  // 显示系统信息
  const nodeVersion = process.version;
  const platform = `${os.platform()} ${os.release()}`;
  const memory = `${Math.round(os.totalmem() / 1024 / 1024)} MB`;
  
  logger.log('====================================');
  logger.log('多人捕鱼游戏服务器正在启动...');
  logger.log(`运行环境: Node.js ${nodeVersion}`);
  logger.log(`系统平台: ${platform}`);
  logger.log(`系统内存: ${memory}`);
  logger.log(`进程ID: ${process.pid}`);
  logger.log('====================================');
  
  // 检查是否需要使用HTTPS
  const httpsEnabled = process.env.HTTPS_ENABLED === 'true';
  let httpsOptions: { cert: Buffer; key: Buffer } | undefined = undefined;
  
  if (httpsEnabled) {
    try {
      // 证书路径，请根据实际情况调整
      const certPath = process.env.SSL_CERT_PATH || path.join(__dirname, '../ssl/cert.pem');
      const keyPath = process.env.SSL_KEY_PATH || path.join(__dirname, '../ssl/key.pem');
      
      httpsOptions = {
        cert: fs.readFileSync(certPath),
        key: fs.readFileSync(keyPath),
      };
      logger.log('已加载SSL证书');
    } catch (error) {
      logger.error('加载SSL证书失败', error);
      process.exit(1);
    }
  }
  
  // 创建应用实例
  const app = await NestFactory.create(AppModule, { httpsOptions });
  const configService = app.get(ConfigService);

  // 设置全局前缀
  app.setGlobalPrefix('api');

  // 启用CORS
  app.enableCors();

  // 添加全局管道
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // 设置Swagger文档
  const config = new DocumentBuilder()
    .setTitle('多人捕鱼游戏服务器')
    .setDescription('多人捕鱼游戏服务器API文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // 启动服务
  const port = configService.get<number>('PORT', 3000);
  await app.listen(port);
  
  const protocol = httpsEnabled ? 'https' : 'http';
  logger.log('====================================');
  logger.log(`服务器已在端口 ${port} 启动 (${protocol})`);
  logger.log(`环境: ${process.env.NODE_ENV || 'development'}`);
  logger.log(`API文档地址: ${protocol}://localhost:${port}/api/docs`);
  logger.log('====================================');
}
bootstrap();

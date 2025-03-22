import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
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
    .setTitle('多人钓鱼游戏服务器')
    .setDescription('多人钓鱼游戏服务器API文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // 启动服务
  const port = configService.get<number>('PORT', 3000);
  await app.listen(port);
  
  logger.log(`服务器已在端口 ${port} 启动`);
  logger.log(`API文档地址: http://localhost:${port}/api/docs`);
}
bootstrap();

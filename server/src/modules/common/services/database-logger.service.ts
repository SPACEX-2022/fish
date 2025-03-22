import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseLoggerService implements OnModuleInit {
  private readonly logger = new Logger('DatabaseMonitor');

  constructor(
    @InjectConnection() private readonly connection: Connection,
    private readonly configService: ConfigService,
  ) {}

  onModuleInit() {
    this.logConnectionStatus();

    // 在应用启动后监听连接状态变化
    this.connection.on('connected', () => {
      this.logger.log('MongoDB连接已建立');
      this.logConnectionDetails();
    });

    this.connection.on('disconnected', () => {
      this.logger.warn('MongoDB连接已断开');
    });

    this.connection.on('reconnected', () => {
      this.logger.log('MongoDB重新连接成功');
      this.logConnectionDetails();
    });

    this.connection.on('error', (error) => {
      this.logger.error(`MongoDB连接错误: ${error.message}`, error.stack);
    });

    // 定期检查连接状态
    setInterval(() => {
      this.logConnectionStatus();
    }, 5 * 60 * 1000); // 每5分钟检查一次
  }

  private logConnectionStatus() {
    const readyState = this.connection.readyState;
    let status: string;

    switch (readyState) {
      case 0:
        status = '已断开';
        break;
      case 1:
        status = '已连接';
        break;
      case 2:
        status = '正在连接';
        break;
      case 3:
        status = '正在断开连接';
        break;
      default:
        status = '未知状态';
    }

    if (readyState === 1) {
      this.logger.log(`MongoDB连接状态: ${status}`);
      this.logConnectionDetails();
    } else {
      this.logger.warn(`MongoDB连接状态: ${status}`);
    }
  }

  private logConnectionDetails() {
    try {
      const db = this.connection.db;
      const host = this.connection.host || '未知主机';
      const port = this.connection.port || '未知端口';
      const dbName = db.databaseName;

      this.logger.log(`数据库连接详情:`);
      this.logger.log(`- 主机: ${host}`);
      this.logger.log(`- 端口: ${port}`);
      this.logger.log(`- 数据库名: ${dbName}`);
    } catch (error) {
      this.logger.error('无法获取数据库连接详情', error);
    }
  }
} 
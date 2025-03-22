import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { WsException } from '@nestjs/websockets';

/**
 * WebSocket JWT守卫
 * 用于验证WebSocket连接中的JWT令牌
 * 验证成功后会将用户信息附加到socket实例上
 */
@Injectable()
export class WsJwtGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const client = context.switchToWs().getClient();
      const token = this.extractToken(client);
      
      if (!token) {
        throw new WsException('未提供认证令牌');
      }
      
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: this.configService.get<string>('JWT_SECRET'),
        });
        
        // 将用户信息附加到socket客户端
        client.user = payload;
        return true;
      } catch (error) {
        throw new WsException('令牌无效或已过期');
      }
    } catch (err) {
      throw new WsException(err.message || '未授权');
    }
  }
  
  private extractToken(client: any): string | undefined {
    // 从Socket.IO客户端的handshake中获取token
    // 尝试三种可能的位置
    
    // 1. 从auth对象获取 (推荐使用此方式)
    if (client.handshake.auth && client.handshake.auth.token) {
      return client.handshake.auth.token;
    }
    
    // 2. 从headers中获取
    if (client.handshake.headers.authorization) {
      const authHeader = client.handshake.headers.authorization;
      if (authHeader.startsWith('Bearer ')) {
        return authHeader.substring(7);
      }
      return authHeader;
    }
    
    // 3. 从query参数获取
    if (client.handshake.query && client.handshake.query.token) {
      return client.handshake.query.token;
    }
    
    return undefined;
  }
} 
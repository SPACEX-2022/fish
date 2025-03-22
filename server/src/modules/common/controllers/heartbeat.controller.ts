import { Controller, Get, UseGuards, Req, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { HeartbeatService } from '../services/heartbeat.service';
import { Request } from 'express';

// 扩展Request类型以包含user属性
interface RequestWithUser extends Request {
  user: {
    sub: string;
    [key: string]: any;
  };
}

@ApiTags('heartbeat')
@Controller('heartbeat')
export class HeartbeatController {
  constructor(private readonly heartbeatService: HeartbeatService) {}

  @Post('ping')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '发送心跳信号' })
  @ApiResponse({ status: 200, description: '心跳信号已接收' })
  async ping(@Req() req: RequestWithUser) {
    const userId = req.user.sub;
    const clientId = req.headers['x-client-id'] as string || 'unknown';
    
    await this.heartbeatService.recordHeartbeat(userId, clientId);
    
    return { status: 'ok', message: '心跳已记录', timestamp: Date.now() };
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取当前用户的在线状态' })
  @ApiResponse({ status: 200, description: '返回用户的在线状态信息' })
  async getStatus(@Req() req: RequestWithUser) {
    const userId = req.user.sub;
    const status = await this.heartbeatService.getUserOnlineInfo(userId);
    
    return {
      ...status,
      timestamp: Date.now(),
    };
  }

  @Get('online-count')
  @ApiOperation({ summary: '获取当前在线用户数' })
  @ApiResponse({ status: 200, description: '返回当前在线用户数' })
  async getOnlineCount() {
    const count = await this.heartbeatService.getOnlineUserCount();
    
    return {
      onlineCount: count,
      timestamp: Date.now(),
    };
  }
} 
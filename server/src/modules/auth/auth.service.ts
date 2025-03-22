import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user/user.service';
import { WxService } from './services/wx.service';
import { LoginResponseDto, WxLoginDto } from './dto/auth.dto';
import { UserDocument } from '../user/schemas/user.schema';
import { HeartbeatService } from '../common/services/heartbeat.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly wxService: WxService,
    private readonly configService: ConfigService,
    private readonly heartbeatService: HeartbeatService,
  ) {}

  async wxLogin(wxLoginDto: WxLoginDto): Promise<LoginResponseDto> {
    // 通过微信code获取openId
    const { openid } = await this.wxService.code2Session(wxLoginDto.code);

    // 查找用户，不存在则创建
    let user = await this.userService.findByOpenId(openid);

    if (!user) {
      user = await this.userService.create({
        openId: openid,
        nickname: wxLoginDto.nickname || `游客${openid.substring(0, 6)}`,
        avatarUrl: wxLoginDto.avatarUrl,
      });
    } else {
      // 如果用户存在但更新了信息，则更新用户信息
      if (
        (wxLoginDto.nickname && wxLoginDto.nickname !== user.nickname) ||
        (wxLoginDto.avatarUrl && wxLoginDto.avatarUrl !== user.avatarUrl)
      ) {
        const updateData = {
          ...(wxLoginDto.nickname && { nickname: wxLoginDto.nickname }),
          ...(wxLoginDto.avatarUrl && { avatarUrl: wxLoginDto.avatarUrl }),
        };
        const updatedUser = await this.userService.update((user as UserDocument)._id.toString(), updateData);
        if (updatedUser) {
          user = updatedUser;
        }
      }
    }

    // 生成JWT令牌
    const payload = {
      sub: (user as UserDocument)._id.toString(),
      openId: user.openId,
      nickname: user.nickname,
    };
    const token = this.jwtService.sign(payload);

    // 登录时初始化心跳记录
    await this.heartbeatService.recordHeartbeat(
      (user as UserDocument)._id.toString(), 
      'auth-login'  // 使用特殊标识，表示这是登录时创建的心跳
    );

    const dto = this.userService.toUserDto(user as UserDocument);

    return {
      token,
      user: dto,
      connectionStatus: {
        isConnected: true,
        lastSeen: Date.now()
      }
    };
  }
} 
import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { WxService } from './services/wx.service';
import { LoginResponseDto, WxLoginDto } from './dto/auth.dto';
import { UserDocument } from '../user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private wxService: WxService,
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

    // 更新登录时间
    await this.userService.updateLoginTime((user as UserDocument)._id.toString());

    // 生成JWT令牌
    const payload = {
      userId: (user as UserDocument)._id.toString(),
      openId: user.openId,
      nickname: user.nickname,
    };
    const token = this.jwtService.sign(payload);

    return {
      token,
      user: {
        id: (user as UserDocument)._id.toString(),
        nickname: user.nickname,
        avatarUrl: user.avatarUrl,
      },
    };
  }
} 
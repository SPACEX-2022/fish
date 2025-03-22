import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class WxService {
  constructor(private configService: ConfigService) {}

  async code2Session(code: string): Promise<{ openid: string; session_key: string }> {
    try {
      const appid = this.configService.get<string>('WX_APPID');
      const secret = this.configService.get<string>('WX_SECRET');
      const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`;

      const response = await axios.get(url);
      const data = response.data;

      if (data.errcode) {
        throw new BadRequestException(`微信登录失败: ${data.errmsg}`);
      }

      return {
        openid: data.openid,
        session_key: data.session_key,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('微信服务器请求失败');
    }
  }
} 
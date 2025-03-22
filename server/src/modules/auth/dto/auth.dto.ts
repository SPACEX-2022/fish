export class WxLoginDto {
  code: string;
  nickname?: string;
  avatarUrl?: string;
}

export class LoginResponseDto {
  token: string;
  user: {
    id: string;
    nickname: string;
    avatarUrl: string;
  };
}

export class JwtPayload {
  userId: string;
  openId: string;
  nickname: string;
} 
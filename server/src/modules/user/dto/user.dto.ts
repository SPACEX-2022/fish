export class CreateUserDto {
  openId: string;
  nickname: string;
  avatarUrl?: string;
}

export class UpdateUserDto {
  nickname?: string;
  avatarUrl?: string;
}

export class UserDto {
  id: string;
  openId: string;
  nickname: string;
  avatarUrl: string;
  totalScore: number;
  gamesPlayed: number;
  wins: number;
}

export class UserProfileDto {
  id: string;
  nickname: string;
  avatarUrl: string;
  totalScore: number;
  gamesPlayed: number;
  wins: number;
  winRate: number;
} 
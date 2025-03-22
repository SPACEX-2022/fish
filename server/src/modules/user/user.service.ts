import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto, UpdateUserDto, UserDto, UserProfileDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  async findByOpenId(openId: string): Promise<User | null> {
    return this.userModel.findOne({ openId }).exec();
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  async updateLoginTime(id: string): Promise<void> {
    await this.userModel
      .findByIdAndUpdate(id, { lastLoginAt: new Date() })
      .exec();
  }

  async updateGameStats(
    id: string, 
    score: number, 
    isWinner: boolean
  ): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(
      id,
      {
        $inc: {
          totalScore: score,
          gamesPlayed: 1,
          wins: isWinner ? 1 : 0,
        },
      },
      { new: true }
    ).exec();
  }
  
  async toUserDto(user: UserDocument): Promise<UserDto> {
    return {
      id: user._id.toString(),
      openId: user.openId,
      nickname: user.nickname,
      avatarUrl: user.avatarUrl,
      totalScore: user.totalScore,
      gamesPlayed: user.gamesPlayed,
      wins: user.wins,
    };
  }
  
  async toProfileDto(user: UserDocument): Promise<UserProfileDto> {
    const winRate = user.gamesPlayed > 0 
      ? Math.round((user.wins / user.gamesPlayed) * 100)
      : 0;
    
    return {
      id: user._id.toString(),
      nickname: user.nickname,
      avatarUrl: user.avatarUrl,
      totalScore: user.totalScore,
      gamesPlayed: user.gamesPlayed,
      wins: user.wins,
      winRate,
    };
  }
} 
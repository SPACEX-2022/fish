import { Controller, Get, Post, Body, Param, UseGuards, Request, BadRequestException } from '@nestjs/common';
import { RoomService } from './room.service';
import { UserService } from '../user/user.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateRoomDto, JoinRoomDto } from './dto/room.dto';

@Controller('rooms')
export class RoomController {
  constructor(
    private readonly roomService: RoomService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('public')
  async getPublicRooms() {
    return this.roomService.findPublicRooms();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getRoomById(@Param('id') id: string) {
    const room = await this.roomService.findById(id);
    return this.roomService.toRoomResponseDto(room);
  }

  @UseGuards(JwtAuthGuard)
  @Get('code/:code')
  async getRoomByCode(@Param('code') code: string) {
    const room = await this.roomService.findByCode(code);
    return this.roomService.toRoomResponseDto(room);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createRoom(@Request() req, @Body() createRoomDto: CreateRoomDto) {
    const user = await this.userService.findById(req.user.userId);
    if (!user) {
      throw new BadRequestException('用户不存在');
    }
    
    const room = await this.roomService.create(req.user.userId, user, createRoomDto);
    return this.roomService.toRoomResponseDto(room);
  }

  @UseGuards(JwtAuthGuard)
  @Post('join')
  async joinRoom(@Request() req, @Body() joinRoomDto: JoinRoomDto) {
    const user = await this.userService.findById(req.user.userId);
    if (!user) {
      throw new BadRequestException('用户不存在');
    }
    
    const room = await this.roomService.joinRoom(req.user.userId, user, joinRoomDto);
    return this.roomService.toRoomResponseDto(room);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/leave')
  async leaveRoom(@Request() req, @Param('id') id: string) {
    const room = await this.roomService.leaveRoom(id, req.user.userId);
    if (!room) {
      return { success: true, message: '房间已解散' };
    }
    return this.roomService.toRoomResponseDto(room);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/ready')
  async setReady(@Request() req, @Param('id') id: string, @Body('isReady') isReady: boolean) {
    const room = await this.roomService.setReady(id, req.user.userId, isReady);
    return this.roomService.toRoomResponseDto(room);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/start')
  async startGame(@Request() req, @Param('id') id: string) {
    const room = await this.roomService.startGame(id, req.user.userId);
    return this.roomService.toRoomResponseDto(room);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/next')
  async readyForNextGame(@Request() req, @Param('id') id: string) {
    const room = await this.roomService.readyForNextGame(id, req.user.userId);
    return this.roomService.toRoomResponseDto(room);
  }
} 
import { Controller, Get, Post, Body, Param, UseGuards, Request, BadRequestException, NotFoundException } from '@nestjs/common';
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
    const user = await this.userService.findById(req.user.sub);
    if (!user) {
      throw new NotFoundException('用户不存在');
    }
    
    const room = await this.roomService.create(req.user.sub, user, createRoomDto);
    return this.roomService.toRoomResponseDto(room);
  }

  @UseGuards(JwtAuthGuard)
  @Post('join')
  async joinRoom(@Request() req, @Body() joinRoomDto: JoinRoomDto) {
    const user = await this.userService.findById(req.user.sub);
    if (!user) {
      throw new NotFoundException('用户不存在');
    }
    
    const room = await this.roomService.joinRoom(req.user.sub, user, joinRoomDto);
    return this.roomService.toRoomResponseDto(room);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/leave')
  async leaveRoom(@Param('id') id: string, @Request() req) {
    const room = await this.roomService.leaveRoom(id, req.user.sub);
    if (!room) {
      return { success: true, message: '房间已解散' };
    }
    return this.roomService.toRoomResponseDto(room);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/ready')
  async setReady(
    @Param('id') id: string,
    @Request() req,
    @Body('isReady') isReady: boolean,
  ) {
    const room = await this.roomService.setReady(id, req.user.sub, isReady);
    return this.roomService.toRoomResponseDto(room);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/start')
  async startGame(@Param('id') id: string, @Request() req) {
    const room = await this.roomService.startGame(id, req.user.sub);
    return this.roomService.toRoomResponseDto(room);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/ready-next')
  async readyForNextGame(@Param('id') id: string, @Request() req) {
    const room = await this.roomService.readyForNextGame(id, req.user.sub);
    return this.roomService.toRoomResponseDto(room);
  }
} 
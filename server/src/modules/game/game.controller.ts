import { Controller, Get, Param, UseGuards, Req } from '@nestjs/common';
import { GameService } from './game.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { JwtPayload } from '../auth/dto/auth.dto';
import { GameRecordDto, PlayerGameRecordsDto } from './dto/game.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @UseGuards(JwtAuthGuard)
  @Get('records')
  async getMyGameRecords(@Req() req) {
    return this.gameService.getUserGameRecords(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get('records/:userId')
  async getUserGameRecords(@Param('userId') userId: string): Promise<PlayerGameRecordsDto> {
    return this.gameService.getUserGameRecords(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('record/:recordId')
  async getGameRecord(@Param('recordId') recordId: string): Promise<GameRecordDto> {
    return this.gameService.getGameRecord(recordId);
  }
} 
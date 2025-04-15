import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly gameService: GameService) { }

  @Get()
  getHello(): string {
    return this.gameService.getHello();
  }
  @Get('start')
  startGame(): string {
    return this.gameService.startGame();
  }
}

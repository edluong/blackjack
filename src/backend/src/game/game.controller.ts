import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';
import { GameStateResponse } from 'src/types/card.d';

@Controller('game')
export class GameController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly gameService: GameService) { }

  @Get()
  getHello(): string {
    return this.gameService.getHello();
  }
  @Get('start')
  startGame(): GameStateResponse {
    return this.gameService.startGame();
  }
}

import { Controller, Get, Session } from '@nestjs/common';
import { GameService } from './game.service';
import { GameStateResponse } from 'src/types/card.d';
import { generateGameID } from 'src/utils/util';

@Controller('game')
export class GameController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly gameService: GameService) { }

  @Get('start')
  startGame(@Session() session: Record<string, any>): GameStateResponse {
    const gameID = generateGameID();
    session[gameID] = {};
    return this.gameService.startGame(session, gameID);
  }
}

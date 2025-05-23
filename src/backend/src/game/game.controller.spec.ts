/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { CardSuit } from 'src/constants/constants';

const mockGameService = () => ({
  startGame: jest.fn(),
});

describe('GameController', () => {
  let controller: GameController;
  let service: jest.Mocked<GameService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameController],
      providers: [
        {
          provide: GameService,
          useFactory: mockGameService,
        },
      ],
    }).compile();

    controller = module.get<GameController>(GameController);
    service = module.get(GameService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('startGame', () => {
    const newGame = {
      'gameId': 'WQkWRB42',
      'playerHand': [
        {
          'rank': 7,
          'suit': CardSuit.Spades
        },
        {
          'rank': 6,
          'suit': CardSuit.Diamonds
        },
      ],
      'dealerHand': [
        {
          'rank': 3,
          'suit': CardSuit.Hearts
        },
        {
          'rank': 5,
          'suit': CardSuit.Spades,
        },
      ],
    };
    it('should return dealer and player hand', () => {
      service.startGame.mockReturnValue(newGame);
      const result = controller.startGame({});
      expect(result).toBe(newGame);
    });
  });
});

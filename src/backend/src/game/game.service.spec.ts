import { Test, TestingModule } from '@nestjs/testing';
import { GameService } from './game.service';
import { CardSuit } from 'src/constants/constants';

describe('GameService', () => {
  let service: GameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameService],
    }).compile();

    service = module.get<GameService>(GameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('loadDeck', () => {
    it('loaded deck has 52 cards', () => {
      const deck = service.loadDeck();
      expect(deck.length).toBe(52);
    });
    it('loaded deck only has 4 different suits', () => {
      const deck = service.loadDeck();
      deck.forEach((card) => {
        expect(Object.keys(CardSuit)).toContain(card.suit);
      });
    });
    it('loaded deck only has 1 to 13 rank', () => {
      const deck = service.loadDeck();
      const rankSet: Set<number> = new Set();
      deck.forEach((card) => {
        if (card.rank) {
          rankSet.add(card.rank);
        }
      });
      for (let i = 1; i <= 13; i++) {
        expect(rankSet.has(i)).toBe(true);
      }
    });
  });
});

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
    it('should have 52 cards', () => {
      const deck = service.loadDeck();
      expect(deck.length).toBe(52);
    });
    it('should have 4 different suits', () => {
      const deck = service.loadDeck();
      deck.forEach((card) => {
        expect(Object.values(CardSuit)).toContain(card.suit);
      });
    });
    it('should only contains 1 to 13 rank', () => {
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

  describe('shuffleDeck', () => {
    it('should have 52 cards after shuffling', () => {
      const deck = service.loadDeck();
      const shuffled = service.shuffleDeck(deck);
      expect(shuffled.length).toBe(52);
    });
    it('should be in a different order when shuffled', () => {
      // create a unshuffled deck
      // create a shuffled deck
      // if they are equal, shuffle again and try again for 10 times
      // shuffling 10 times to make sure the test is not flakey
      // return true if they should not be equal
      const unshuffleDeck = service.loadDeck();
      const secondDeck = service.loadDeck();
      const shuffleDeck = service.shuffleDeck(secondDeck);
      let n = 10;
      while (n > 0) {
        if (unshuffleDeck != shuffleDeck) {
          expect(
            // this turns the two deck variables to strings for easy check
            // perform strict inequality, strongly recommended by default
            JSON.stringify(unshuffleDeck) !== JSON.stringify(shuffleDeck),
          ).toBe(true);
        } else {
          continue;
        }
        n -= 1;
      }
    });
  });

  describe('startGame', () => {
    it('should have two cards for dealer and player', () => {
      const someId = 'someid';
      const response = service.startGame({}, someId);
      expect(response.dealerHand.length).toBe(2);
      expect(response.playerHand.length).toBe(2);
      expect(response.gameId).toBe(someId);
    });
  });
});

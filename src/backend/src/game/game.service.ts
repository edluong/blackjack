import { Injectable } from '@nestjs/common';

interface Card {
  rank: number | null;
  suit: string | null;
}

enum CardSuit {
  Hearts = `hearts`,
  Diamonds = `diamonds`,
  Clubs = `clubs`,
  Spades = `spades`,
}

interface GameState {
  playerHand: Card[];
  dealerHand: Card[];
}

@Injectable()
export class GameService {
  getHello(): string {
    return 'Hello World!';
  }
  startGame(): string {
    // load a deck of cards
    const deck: Card[] = [];
    for (let i = 1; i <= 13; i++) {
      for (const suit in CardSuit) {
        const card: Card = {
          rank: null,
          suit: null,
        };
        card.rank = i;
        card.suit = suit;
        deck.push(card);
      }
    }
    console.log(deck);
    return deck.length.toString();
  }
}

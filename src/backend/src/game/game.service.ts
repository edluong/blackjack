import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  getHello(): string {
    return 'Hello World!';
  }
  startGame(): string {
    // load a deck of cards
    const deck: object[] = [];
    const suits = ['hearts', 'diamonds', 'clovers', 'spades'];
    for (let i = 1; i <= 13; i++) {
      suits.forEach((suit) => {
        const card: { [key: string]: number | null | string } = {
          rank: null,
          suit: null,
        };
        card.rank = i;
        card.suit = suit;
        deck.push(card);
      });
    }
    console.log(deck);
    return deck.length.toString();
  }
}

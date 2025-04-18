import { Injectable } from '@nestjs/common';
import { Card, GameStateResponse } from 'src/types/card.d';

enum CardSuit {
  Hearts = `hearts`,
  Diamonds = `diamonds`,
  Clubs = `clubs`,
  Spades = `spades`,
}

@Injectable()
export class GameService {
  getHello(): string {
    return 'Hello World!';
  }
  shuffleDeck(deck: Card[]): Card[] {
    // Fisher-Yates Algorithm
    // get a random number between 0 and 1 (1 not inclusive)
    // have the random number multiply with the index + 1 (the +1 is capturing the i since its not inclusive)
    // since we are moving right to left, we will swap indexes randomly as we move left
    for (let currentIndex = deck.length - 1; currentIndex > 0; currentIndex--) {
      const swapIndex = Math.floor(Math.random() * (currentIndex + 1));
      // swap the index
      [deck[currentIndex], deck[swapIndex]] = [
        deck[swapIndex],
        deck[currentIndex],
      ];
    }
    return deck;
  }

  startGame(): GameStateResponse {
    // load a deck of cards
    let deck: Card[] = [];
    const playerHand: Card[] = [];
    const dealerHand: Card[] = [];
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
    deck = this.shuffleDeck(deck);
    console.log(deck);
    const card = deck.pop();
    // have to check if a card exist first
    if (card) {
      playerHand.push(card);
    }
    return {
      playerHand: playerHand,
      dealerHand: dealerHand,
    };
  }
}

import { Injectable } from '@nestjs/common';
import { Card, GameStartResponse } from 'src/types/card.d';
import { CardSuit } from 'src/constants/constants';

@Injectable()
export class GameService {
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
  loadDeck(): Card[] {
    // load a deck of cards
    const deck: Card[] = [];

    for (let i = 1; i <= 13; i++) {
      const cardSuitValues = Object.values(CardSuit);
      cardSuitValues.forEach((suit) => {
        const card: Card = {
          rank: null,
          suit: null,
        };
        card.rank = i;
        card.suit = suit;
        deck.push(card);
      });
    }
    return deck;
  }

  startGame(session: Record<string, any>, gameID: string): GameStartResponse {
    const playerHand: Card[] = [];
    const dealerHand: Card[] = [];
    let deck = this.loadDeck();
    deck = this.shuffleDeck(deck);

    // pass out 4 cards initially
    const initialCardsPassedOutPerHand = 2;
    for (
      let numofCards = 1;
      numofCards <= initialCardsPassedOutPerHand;
      numofCards++
    ) {
      const cardForPlayer = deck.pop();
      const cardForDealer = deck.pop();
      // have to check if a card exist first
      if (cardForPlayer) {
        playerHand.push(cardForPlayer);
      }
      if (cardForDealer) {
        dealerHand.push(cardForDealer);
      }
    }

    // save game state
    session[gameID] = {
      playerHand: playerHand,
      dealerHand: dealerHand,
      deckState: deck,
    };

    return {
      gameId: gameID,
      playerHand: playerHand,
      dealerHand: dealerHand,
    };
  }
}

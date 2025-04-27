import { CardSuit, GameState } from 'src/constants/constants';

export interface Card {
  rank: number | null;
  suit: CardSuit | null;
}

export interface GameStartResponse {
  gameId: string;
  playerHand: Card[];
  dealerHand: Card[];
}

export interface GameStateResponse {
  gameId: string;
  playerHand: Card[];
  dealerHand: Card[];
  playerScore: number;
  dealerScore: number;
  gameState: GameState;
  message: string;
}

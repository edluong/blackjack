import { CardSuit } from 'src/constants/constants';
export interface Card {
  rank: number | null;
  suit: CardSuit | null;
}

export interface GameStateResponse {
  gameId: string;
  playerHand: Card[];
  dealerHand: Card[];
}

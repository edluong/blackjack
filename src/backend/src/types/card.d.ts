export interface Card {
  rank: number | null;
  suit: string | null;
}

export interface GameStateResponse {
  gameId: string;
  playerHand: Card[];
  dealerHand: Card[];
}

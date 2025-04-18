export interface Card {
  rank: number | null;
  suit: string | null;
}

export interface GameStateResponse {
  playerHand: Card[];
  dealerHand: Card[];
}

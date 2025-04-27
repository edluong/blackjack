// Note: enums will FAIL if stored in .d.ts files
// relevant stackoverflow article
// https://stackoverflow.com/questions/63701326/exporting-enum-in-d-ts-leads-to-cant-resolve-error
export enum CardSuit {
  Hearts = 'hearts',
  Diamonds = 'diamonds',
  Clubs = 'clubs',
  Spades = 'spades',
}

export enum GameState {
  Busted = 'busted', // player went over 21, game over
  Active = 'active', // player did not bust out
  Error = 'error', // something went wrong
  Win = 'win',
  Lose = 'lose',
  Push = 'push',
}

// Note: enums will FAIL is stored in .d.ts files
// relevant stackoverflow article
// https://stackoverflow.com/questions/63701326/exporting-enum-in-d-ts-leads-to-cant-resolve-error
export enum CardSuit {
  Hearts = 'hearts',
  Diamonds = 'diamonds',
  Clubs = 'clubs',
  Spades = 'spades',
}

// game id will be [0-9][A-Z][a-z]
const minValue = 48; // this is digit 0
const maxValue = 122; // this is lowercase 'z'
const gameIDLength = 8;

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  // Math.random() returns [0,1)
  // (max - min + 1) calculates the total number of integers in the inclusive range
  // + min adds the minimum value to shift the range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateGameID(): string {
  // randomly pick a number between 48 to 122; 8 times
  let result = '';
  for (let i = 0; i < gameIDLength; i++) {
    const randomUnicodeNumber = getRandomIntInclusive(minValue, maxValue);
    result += String.fromCharCode(randomUnicodeNumber);
  }
  return result;
}

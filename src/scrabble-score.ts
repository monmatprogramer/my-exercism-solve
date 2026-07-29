//scrabble score exercise
type LetterScoreMap = Record<string, number>;
export const letterScores: LetterScoreMap = {
  // Value 1
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  // Value 2
  D: 2,
  G: 2,
  // Value 3
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  // Value 4
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  // Value 5
  K: 5,
  // Value 8
  J: 8,
  X: 8,
  // Value 10
  Q: 10,
  Z: 10,
};
// Create unique type for word (user input)
type WordType = string | undefined | null;
export function score(word?: WordType): number {
  //create empty totalScore
  let totalScore: number = 0;
  // Create letterUpperCase
  let letterUpperCase: string = "";
  // Check condition word
  if (word === "" || word === undefined) {
    return 0;
  } //Check letter to uppercase
  letterUpperCase = toUpperCase(word);

  return 0;
}
// Check validation
function isValid(rawWord: WordType): boolean {
  //Flase : inValid
  //True: Valid
  const wordRex = /^[a-zA-Z]+$/;
  rawWord === "" || rawWord === undefined || (rawWord === null && false);
  return wordRex.test(rawWord!);
}
// Create a function to change each letters to upper case
function toUpperCase(rawWord: WordType): string {
  let lastResult: string = "";
  // Check validation here
  let isTrue: boolean = isValid(rawWord);
  if (isTrue) {
    lastResult = rawWord!.toLocaleUpperCase();
  } else {
    throw new Error("Invalid rawWord");
  }

  return lastResult;
}

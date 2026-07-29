//scrabble score exercise
// Create unique type for word (user input)
type WordType = string | undefined | null;
export function score(word?: WordType): number {
  //create empty totalScore
  let totalScore: number = 0;
  // Create letterUpperCase
  let letterUpperCase: string = "";
  // Create a valid validWord
  let validWord: string = "";
  // Check condition word
  if (word === "" || word === undefined) {
    return 0;
  }
  // Check validation of word
  isValid(word);
  //Check letter to uppercase
  //letterUpperCase = toUpperCase(word);

  return 0;
}
// Check validation
function isValid(rawWord: WordType): string {
  const wordRex = /^[a-zA-Z]/;
  return "invalid";
}
// Create a function to change each letters to upper case
function toUpperCase(rawWord: string): string {
  return "";
}

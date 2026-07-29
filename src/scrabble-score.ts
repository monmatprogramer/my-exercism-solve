//scrabble score exercise
// Create unique type for word (user input 999999999999999999)
export function score(word: string | undefined | null = null): number {
  //create empty totalScore
  let totalScore: number = 0;
  // Create letterUpperCase
  let letterUpperCase: string = "";
  if (word === "" || word === undefined) {
    return 0;
  }
  //Check letter to uppercase
  letterUpperCase = toUpperCase(word);

  return 0;
}
// Create a function to change each letters to upper case
function toUpperCase(rawWord: string | undefined | null = null): string {
  return "";
}

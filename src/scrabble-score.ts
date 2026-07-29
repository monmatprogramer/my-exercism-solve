//scrabble score exercise
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
  //letterUpperCase = toUpperCase(word);

  return 0;
}
// Check validation
function isValid(rawWord: WordType): boolean {
  //Flase : inValid
  //True: Valid
  const wordRex = /^[a-zA-Z]+$/;
  console.log(wordRex.test(rawWord!));
  rawWord === "" || rawWord === undefined || (rawWord === null && false);
  return false;
}
// Create a function to change each letters to upper case
function toUpperCase(rawWord: WordType): string {
  // Check validation here
  isValid(rawWord);
  return "";
}

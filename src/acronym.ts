// acronym
export function parse(phrase: string): string {
  // expression removing punctuation
  const isValidString = checkString(phrase);
  //spliter
  if (isValidString) {
    phrase = phrase.replace(/[\-]/g, " ");
  }
  //Find the words
  const findWords = phrase.split(" ");
  console.log(findWords);
  return "";
}

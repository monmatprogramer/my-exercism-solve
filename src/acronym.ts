// acronym
export function parse(phrase: string): string {
  // expression removing punctuation
  const expression = /^[a-zA-Z]$/;
  console.log(expression.test(phrase));
  //spliter
  //Find the words
  const findWords = phrase.split(" ");
  console.log(findWords);
  return "";
}

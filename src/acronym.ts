// acronym
export function parse(phrase: string): string {
  // expression removing punctuation
  const isValidString = checkString(phrase);
  //acronym
  let acronym: string = "";
  //split
  if (isValidString) {
    phrase = phrase.replace(/[\-]/g, " ");
    phrase = phrase.replace(/([a-z])([A-Z])/g, "$1 $2");
  }
  //Find the words
  const findWords = phrase.split(" ");
  // find acronym
  console.log(findWords);
  for (let i: number = 0; i < findWords.length; i++) {
    acronym = acronym + "" + findWords[i][0];
  }
  return acronym.toLocaleUpperCase();
}
// Check validation string
const checkString = (rwPhrase: string): boolean => {
  const expression = /^[a-zA-Z\s-]+$/;
  return expression.test(rwPhrase);
};

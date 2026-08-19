// acronym
export function parse(phrase: string): string {
  // expression removing punctuation
  const isValidString = checkString(phrase);
  const isSpace = checkSpace(phrase);
  const isHyphen = checkHyphen(phrase);
  //spliter
  let spliter: string;
  if (isValidString) {
    if (isSpace) {
      spliter = " ";
    } else {
      spliter = "-";
    }
  }
  //Find the words
  const findWords = phrase.split(spliter!);
  console.log(findWords);
  return "";
}
// Check validation string
const checkString = (rwPhrase: string): boolean => {
  const expression = /^[a-zA-Z\s-]+$/;

  return expression.test(rwPhrase);
};
//Check  space
const checkSpace = (rwPhrase: string): boolean => {
  const space = /^[a-zA-Z\s]+$/;
  return space.test(rwPhrase);
};
//Check hyphen
const checkHyphen = (rwPhrase: string): boolean => {
  const hyphen = /^[a-zA-Z\-]+$/;

  return hyphen.test(rwPhrase);
};

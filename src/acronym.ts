// acronym
export function parse(phrase: string): string {
  // expression removing punctuation
  const expression = /^[a-zA-Z\s-]+$/;
  const isSpace = checkSpace(phrase);
  const isHyphen = checkHyphen(phrase);
  //spliter
  let spliter: string;
  if (expression.test(phrase)) {
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
//Remove space
const checkSpace = (rwPhrase: string): boolean => {
  const space = /^[a-zA-Z\s]+$/;
  return space.test(rwPhrase);
};

const checkHyphen = (rwPhrase: string): boolean => {
  const hyphen = /^[a-zA-Z\-]+$/;

  return hyphen.test(rwPhrase);
};

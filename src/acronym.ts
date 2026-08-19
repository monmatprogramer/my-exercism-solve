// acronym
export function parse(phrase: string): string {
  // expression removing punctuation
  const expression = /^[a-zA-Z\s-]+$/;
  const hyphen = /^[a-zA-Z\-]+$/;
  const isSpace = removeSpace(phrase);
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
const removeSpace = (rwPhrase: string): boolean => {
  const space = /^[a-zA-Z\s]+$/;

  return true;
};

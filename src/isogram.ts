// isogram
export function isIsogram(input: string): boolean {
  //conver to lowercase
  const lowerText = input.toLocaleLowerCase();
  //cleaned text
  let cleanedText: string = "";
  // clean text
  if (!cleanText(input)) {
    throw new Error("Not valid input");
  }
  if (checkSpace(input)) {
    //remove space
    cleanedText = removeSpace(input);
  }
  //remove hyphens
  if (checkHyphen(input)) {
    cleanedText = removeHyphen(input);
  }
  return true;
}

const cleanText = (rwInput: string): boolean => {
  const clean_express = /^[a-zA-Z\s-]+$/g;
  return clean_express.test(rwInput);
};
const checkHyphen = (input: string): boolean => {
  return /[\-]/g.test(input);
};
const checkSpace = (input: string): boolean => {
  return /[\s]/g.test(input);
};
const removeSpace = (input: string): string => {
  const notSpace_exp = /[\s]/g;
  let notSpace: string = input.replace(notSpace_exp, "");
  return notSpace;
};

const removeHyphen = (input: string): string => {
  return input.replace(/[\-]/g, "");
};

// isogram
export function isIsogram(input: string): boolean {
  //conver to lowercase
  const lowerText = input.toLocaleLowerCase();
  // clean text
  if (!cleanText(input)) {
    throw new Error("Not valid input");
  }
  //remove space

  //remove hyphens
  return true;
}

const cleanText = (rwInput: string): boolean => {
  const clean_express = /^[a-zA-Z\s-]+$/g;
  return clean_express.test(rwInput);
};
const removeSpace = (input: string): string => {
  const notSpace_exp = /[]/g;
  let notSpace: string = "";
  return notSpace;
};

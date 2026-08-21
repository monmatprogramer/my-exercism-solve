// isogram
export function isIsogram(input: string): boolean {
  //conver to lowercase
  const lowerText = input.toLocaleLowerCase();
  // clean text
  if (!cleanText(input)) {
    throw new Error("Not valid input");
  }
  //remove space
  removeSpace(input);
  //remove hyphens
  return true;
}

const cleanText = (rwInput: string): boolean => {
  const clean_express = /^[a-zA-Z\s-]+$/g;
  return clean_express.test(rwInput);
};
const removeSpace = (input: string): string => {
  const notSpace_exp = /^[\s]/g;
  console.log(notSpace_exp.test(input));
  let notSpace: string = input.replace(notSpace_exp, "");
  console.log("notspace: ", notSpace);
  return notSpace;
};

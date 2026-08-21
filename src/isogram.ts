// isogram
export function isIsogram(input: string): boolean {
  //conver to lowercase
  const lowerText = input.toLocaleLowerCase();
  // clean text
  if (!cleanText(input)) {
    throw new Error("Not valid input");
  }
  return false;
}

const cleanText = (rwInput: string): boolean => {
  const clean_express = /^[a-zA-Z\s-]/g;
  return clean_express.test(rwInput);
};

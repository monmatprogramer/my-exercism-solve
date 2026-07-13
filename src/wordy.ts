export const answer = (question: string): number => {
  console.log("question", question);
  cleanString(question);
  return 0;
};

const cleanString = (question: string): string => {
  //conver to lowercase
  question = question.toLowerCase();
  const toArray: string[] = question.split(" ");
  if (
    !(toArray[0] === "what") ||
    !(toArray[1] === "is") ||
    !toArray[toArray.length - 1].endsWith("?")
  ) {
    throw new Error("Unknown operation");
  }
  return "";
};

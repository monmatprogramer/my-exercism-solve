export const answer = (question: string): number => {
  console.log("question", question);
  cleanString(question);
  return 0;
};

const cleanString = (question: string): string => {
  if (question === "") {
    throw new Error("Error in cleanString function.");
  } else {
    return question;
  }
};

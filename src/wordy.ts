export const answer = (question: string): number => {
  console.log("question", question);
  cleanString(question);
  return 0;
};

const cleanString = (question: string): string => {
  //conver to lowercase
  question = question.toLowerCase();
  const toArray: string[] = question.split(" ");
  //check empty array
  if (toArray.length < 0) {
    throw new Error("Syntax error");
  }
  //not empty
  if (
    !(toArray[0] === "what") ||
    !(toArray[1] === "is") ||
    !toArray[toArray.length - 1].endsWith("?")
  ) {
    throw new Error("Unknown operation");
  }
  simplify(toArray);
  return question;
};
const simplify = (validQuesion: string[]): string[] => {
  //remove first element and second element
  validQuesion.splice(0, 1);
  validQuesion.splice(0, 1);
  if (validQuesion.length === 1) {
    const ex = /\?/;
    let temp = validQuesion[0].replace(ex, "");
    validQuesion.push(temp);
  } else {
    const ex = /\?/;
    let temp: string = validQuesion.pop()!;
    temp = temp.replace(ex, "");
    validQuesion.push(temp);
  }
  console.log("validQuesion: ", validQuesion);
  return validQuesion;
};

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
  const simplifyArr: string[] = simplify(toArray);
  const simplifyOper: string[] = simplifyOperation(simplifyArr);
  console.log(simplifyOper);
  return question;
};

const simplify = (validQuesion: string[]): string[] => {
  const ex = /\?/;
  //remove first element and second element
  validQuesion.splice(0, 1);
  validQuesion.splice(0, 1);
  if (validQuesion.length === 1) {
    let temp = validQuesion[0].replace(ex, "");
    validQuesion.pop();
    validQuesion.push(temp);
  } else {
    let temp: string = validQuesion.pop()!;
    temp = temp.replace(ex, "");
    validQuesion.push(temp);
  }
  return validQuesion;
};
const simplifyOperation = (validQuestion: string[]): string[] => {
  for (let i: number = 0; i < validQuestion.length; i++) {
    if (validQuestion[i] === "divided") {
      validQuestion.splice(i + 1, 1);
    } else if (validQuestion[i] === "multiplied") {
      validQuestion.splice(i + 1, 1);
    }
  }
  return validQuestion;
};
const calculate = (validQuestion: string[]): number => {
  let oprations: number = validQuestion.filter((value) =>
    isNaN(Number(value)),
  ).length;
  let n: number = Number(validQuestion[0]);
  let i: number = 0;
  return 0;
};

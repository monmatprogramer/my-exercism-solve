export const answer = (question: string): number => {
  console.log("question", question);
  const cleanStr: string[] = cleanString(question);
  const result = calculate(cleanStr);
  return result;
};

const cleanString = (question: string): string[] => {
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
  hasOperationsOrNot(simplifyArr);
  const simplifyOper: string[] = simplifyOperation(simplifyArr);
  console.log(simplifyOper);
  return simplifyOper;
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
//Check it has operations  or not
const hasOperationsOrNot = (question: string[]) => {};
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
  let operations: number = validQuestion.filter((value) =>
    isNaN(Number(value)),
  ).length;
  let n: number = Number(validQuestion[0]);
  let i: number = 0;
  while (i <= validQuestion.length - operations) {
    if (validQuestion[i + 1] === "divided") {
      n = n / Number(validQuestion[i + 2]);
    } else if (validQuestion[i + 1] === "plus") {
      n = n + Number(validQuestion[i + 2]);
    } else if (validQuestion[i + 1] === "minus") {
      n = n - Number(validQuestion[i + 2]);
    } else {
      n = n * Number(validQuestion[i + 2]);
    }
    i = i + 2;
  }
  return n;
};

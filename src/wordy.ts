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
    if (toArray[toArray.length - 1] === "is?") {
      throw new Error("Syntax error");
    }
    //toArray= [ 'what', 'is', '1', 'plus', 'plus', '2' ]
    if (!isNaN(Number(toArray[2])) && toArray.length > 3) {
      const [oper1, oera2] = [toArray[3], toArray[4]];
      const operations: string[] = ["plus", "minus", "divided", "multiplied"];
      const check1: number = operations.filter((v) => v === oper1).length;
      const check2: number = operations.filter(
        (value) => value === oera2,
      ).length;
      if (check1 >= 1 && check2 >= 1) {
        throw new Error("Syntax error");
      }
    }
    throw new Error("Unknown operation");
  }
  const simplifyArr: string[] = simplify(toArray);
  const simplifyOper: string[] = simplifyOperation(simplifyArr);
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
const hasSingleNumber = (question: string[]): boolean => {
  if (!isNaN(Number(question[0])) && question.length === 1) {
    //it is sinlge number
    return true;
  }
  //it is not single number
  return false;
};
//Check for single operations
const hasSingleOperation = (question: string[]): boolean => {
  //Ex [ '1', 'plus', '1' ]
  if (question.length === 3) {
    return true;
  }
  return false;
};

const simplifyOperation = (validQuestion: string[]): string[] => {
  for (let i: number = 0; i < validQuestion.length; i++) {
    if (validQuestion[i] === "divided") {
      validQuestion.splice(i + 1, 1);
    } else if (validQuestion[i] === "multiplied") {
      validQuestion.splice(i + 1, 1);
    }
  }
  console.log("simplifyOperation : ", validQuestion);
  if (validQuestion.length > 3) {
    const operations: string[] = ["plus", "minus", "divided", "multiplied"];
    const ch1: number = operations.filter((v) => v === validQuestion[1]).length;
    const ch2: number = operations.filter((v) => v === validQuestion[2]).length;
    if (ch1 >= 1 && ch2 >= 1) {
      throw new Error("Syntax error");
    }
    if (ch1 >= 1 && !isNaN(Number(validQuestion[3]))) {
      throw new Error("Syntax error");
    }
  }
  //[1,'plus'] => Syntax error
  if (
    validQuestion.length > 1 &&
    validQuestion.length < 3 &&
    !isNaN(Number(validQuestion[0]))
  ) {
    const temp: string = validQuestion[validQuestion.length - 1]; //get last element
    const operations: string[] = ["plus", "minus", "divided", "multiplied"];
    const synErro: number = operations.filter((value) => value == temp).length;
    if (synErro > 0) {
      throw new Error("Syntax error");
    }
  }
  return validQuestion;
};
// Check unknow operation
const checkUnknowOp = (validQuestion: string[]): boolean => {
  if (validQuestion.length === 2) {
    let temp = validQuestion.pop();
    const operations: string[] = ["plus", "minus", "divided", "multiplied"];
    let op: number = operations.filter((value) => value === temp).length;
    // has unknow
    if (op === 0) {
      return true;
    }
  }
  return false;
};
const calculate = (validQuestion: string[]): number => {
  const singleNum: boolean = hasSingleNumber(validQuestion);
  if (singleNum) {
    return Number(validQuestion[0]);
  }
  if (hasSingleOperation(validQuestion)) {
    let n: number = Number(validQuestion[0]);
    if (validQuestion[1] === "plus") {
      return (n = n + Number(validQuestion[2]));
    } else if (validQuestion[1] === "minus") {
      return (n = n - Number(validQuestion[2]));
    } else if (validQuestion[1] === "divided") {
      return (n = n / Number(validQuestion[2]));
    } else {
      return (n = n * Number(validQuestion[2]));
    }
  }
  if (checkUnknowOp(validQuestion)) {
    throw new Error("Unknown operation");
  }
  //if(){}
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

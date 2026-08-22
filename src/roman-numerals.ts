//find roman number
// Magic table
const romanRules = [
  { letter: "M", value: 1000 },
  { letter: "CM", value: 900 },
  { letter: "D", value: 500 },
  { letter: "CD", value: 400 },
  { letter: "C", value: 100 },
  { letter: "XC", value: 90 },
  { letter: "L", value: 50 },
  { letter: "XL", value: 40 },
  { letter: "X", value: 10 },
  { letter: "IX", value: 9 },
  { letter: "V", value: 5 },
  { letter: "IV", value: 4 },
  { letter: "I", value: 1 },
];
type RuleOje = {
  letter: string;
  value: number;
};
export const toRoman = (num: number): string => {
  let result: string = "";
  for (const rule of romanRules) {
    result = checkValue(rule, num);
  }
  return result;
};

const checkValue = (currentValue: RuleOje, inputNum: number): string => {
  let result: string = "";
  console.log(inputNum >= currentValue.value);
  console.log("-------");
  return "";
  while (inputNum >= currentValue.value) {
    result += currentValue.letter;
    console.log("result : ", result);
    inputNum = inputNum - currentValue.value;
  }
  return result;
};

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

export const toRoman = (num: number): string => {
  let result: string = "";
  for (const rule of romanRules) {
    // console.dir(rule, { depth: null });
    console.log(rule);
  }
  return result;
};

const checkValue = (currentValue: number, inputNum: number) => {
  while (inputNum >= currentValue) {
    console.log("inputNum: ", inputNum);
  }
};

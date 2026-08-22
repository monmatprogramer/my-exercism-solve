//find roman number
// Magic table
const magicTable: Record<number, string> = {
  1000: "M",

  900: "CM",

  500: "D",

  400: "CD",

  100: "C",

  90: "XC",

  50: "L",

  40: "XL",

  10: "X",

  9: "IX",

  5: "V",

  4: "IV",

  1: "I",
};

export const toRoman = (num: number): string => {
  let result: string = "";
  for (const value of Object.entries(magicTable).reverse()) {
    // Largeest -> smallest number
    // CurrentValue
    let currentValue: number = Number([...value][0]);
    while (num >= currentValue) {
      console.log(num);
    }
  }
  return result;
};

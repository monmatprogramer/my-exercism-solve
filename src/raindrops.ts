export function convert(inputNumber: number): string {
  let result: string = "";
  if (inputNumber % 3 === 0) {
    result = result + "Pling";
  }
  if (inputNumber % 5 === 0) {
    result = result + "Plang";
  }
  if (inputNumber % 7 === 0) {
    result = result + "Plong";
  }

  if (result.length === 0) {
    return String(inputNumber);
  } else {
    return result;
  }
}

console.log(convert(0));

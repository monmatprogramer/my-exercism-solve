//Luhn exercise
export function valid(digitString: string): boolean {
  const getNumOnlyRex = /^[0-9]+$/;
  //condition 1:  remove  all space from input string
  digitString = digitString.trim().replaceAll(" ", "");
  //condition 2:  check length of digitString
  if (digitString.length < 2) return false;
  //condition 3:
  if (!getNumOnlyRex.test(digitString)) return false;

  let totalSum: number = 0;
  let isSecondDigit: boolean = false;
  const digitStringArr: string[] = digitString.split("");
  const digitNumberArr: number[] = digitStringArr.map(Number);
  let tempNumber: number = 0;
  for (let i: number = digitNumberArr.length - 1; i >= 0; i--) {
    isSecondDigit = i % 3 === 1;
    if (isSecondDigit) {
      tempNumber = digitNumberArr[i] * 2;
      if (tempNumber > 9) {
        tempNumber = tempNumber - 9;
      }
    }
    totalSum = tempNumber;
    isSecondDigit = !isSecondDigit;
  }

  console.log("total_sum: ", totalSum);
  //const digitStringArr: number[] = Number(digitString.split(""));
  //console.log(digitStringArr);
  return true;
}

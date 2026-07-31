//Luhn exercise
export function valid(digitString: string): boolean {
  const getNumOnlyRex = /^[0-9]+$/;
  //condition 1:  remove  all space from input string
  digitString = digitString.trim().replace(" ", "");
  //condition 2:  check length of digitString
  if (digitString.length < 2) return false;
  //condition 3:
  if (!getNumOnlyRex.test(digitString)) return false;

  let totalSum: number = 0;
  let isSecondDigit: boolean = false;
  const digitStringArr: string[] = digitString.split("");
  const digitNumberArr: number[] = digitStringArr.map(Number);
  let tempNumber: number = 0;
  let stardRigthIndex: number = digitNumberArr.length - 1;
  do {
    tempNumber = digitNumberArr[stardRigthIndex];
    if (isSecondDigit) {
      tempNumber = digitNumberArr[stardRigthIndex] * 2;
      if (tempNumber > 9) {
        tempNumber = tempNumber - 9;
      }
    }
    totalSum = totalSum + tempNumber;

    isSecondDigit = !isSecondDigit;
    --stardRigthIndex;
    if (stardRigthIndex < 0) {
      isSecondDigit = false;
    }
  } while (isSecondDigit);

  if (totalSum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

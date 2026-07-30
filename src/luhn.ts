//Luhn exercise
export function valid(digitString: string): boolean {
  const getNumOnlyRex = /^[0-9]+$/;
  //condition 1:  remove  all space from input string
  digitString = digitString.trim().replaceAll(" ", "");
  //condition 2:  check length of digitString
  if (digitString.length < 2) return false;
  //condition 3:
  console.log(getNumOnlyRex.test(digitString));
  if (!getNumOnlyRex.test(digitString)) return false;

  let totalSum: number = 0;
  let isSecondDigit: boolean = false;
  for (const char of digitString) {
    console.log(char);
  }
  return true;
}

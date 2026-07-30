//Luhn exercise
export function valid(digitString: string): boolean {
  const getNumOnlyRex = /^[0-1]+$/;
  // remove  all space from input string
  digitString = digitString.trim().replaceAll(" ", "");
  // check length of digitString
  if (digitString.length < 2) return false;

  if (!getNumOnlyRex.test(digitString)) return false;
  return true;
}

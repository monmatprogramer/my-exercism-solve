//Luhn exercise
export function valid(digitString: string): boolean {
  // remove  all space from input string
  digitString = digitString.trim().replaceAll(" ", "");
  // check length of digitString
  return digitString.length < 2 && false;
  console.log(digitString);
  return false;
}

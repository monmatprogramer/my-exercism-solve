//Luhn exercise
export function valid(digitString: string): boolean {
  const getNumOnlyRex = /^[0-1]+$/;
  // remove  all space from input string
  digitString = digitString.trim().replaceAll(" ", "");
  // check length of digitString
  console.log("➡️ ", digitString.length);
  return digitString.length < 2 && false;
  console.log("👉 ", digitString);
  return getNumOnlyRex.test(digitString) === false && false;
  console.log(digitString);
  return false;
}

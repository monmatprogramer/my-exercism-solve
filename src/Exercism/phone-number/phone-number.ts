export function clean(phoneNumber: string) {
  console.log("phone string: ", phoneNumber);
  checkForLetters(phoneNumber);
}

//Check for letters
const checkForLetters = (letters: string): boolean => {
  // define Regex
  const letterRegex = /^[A-Za-z]+$/;
  console.log("Result check: ", letterRegex.test(letters));
  // return
  return false;
};

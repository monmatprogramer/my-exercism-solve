export function clean(phoneNumber: string) {
  console.log("phone string: ", phoneNumber);
  if (checkForLetters(phoneNumber)) {
    throw new Error("Letters not permitted");
  }
  // check special charactor sign or symbols
  if (checkSymbols(phoneNumber)) {
    throw new Error("Punctuations not permitted");
  }
  console.log("---end function--");
}

//Check for letters
const checkForLetters = (letters: string): boolean => {
  // define Regex
  const letterRegex = /[A-Za-z]/;
  // return
  return letterRegex.test(letters);
};
// Cheeck symbols
const checkSymbols = (letters: string): boolean => {
  const symbolsRegex = /[\@!:]/;
  return symbolsRegex.test(letters);
};
//Remove good punctuations from phone number
const removeGoodPunc = (letter: string) => {
  let rightPhone: string = "";
  //Create Regex
  const phoneRegex = /[\s-.()]/;
  //Check it
  if (phoneRegex.test(letter)) {
    //Start remove the good punctuations
  } else {
    throw new Error("Error Regular expression in removeGoodPunc()");
  }
  if (rightPhone === "") {
    throw new Error("Empty rightPhone in removeGoodPunc() ");
  }
  return rightPhone;
};

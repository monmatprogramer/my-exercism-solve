export function clean(phoneNumber: string) {
  let rightPhoneNumber: string = "";
  console.log("phone string: ", phoneNumber);
  if (checkForLetters(phoneNumber)) {
    throw new Error("Letters not permitted");
  }
  // check special charactor sign or symbols
  if (checkSymbols(phoneNumber)) {
    throw new Error("Punctuations not permitted");
  }
  // start remove good punctuations
  rightPhoneNumber = removeGoodPunc(phoneNumber);
  //Check length of number string
  console.log("rightPhone(1); ", rightPhoneNumber);
  checkLengthNumberString(rightPhoneNumber);
  console.log("---end function--");
  return rightPhoneNumber;
}

//Check for letter
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
const removeGoodPunc = (letter: string): string => {
  let rightPhone: string = "";
  //Create Regex
  const phoneRegex = /[\s-.()]/;
  //Check it
  if (phoneRegex.test(letter)) {
    //Start remove the good punctuations
    rightPhone = letter.replace(/[\s-.()]/g, "");
  }
  if (rightPhone === "") {
    return letter;
  }
  return rightPhone;
};
//Check length of number string function
const checkLengthNumberString = (rightPhone: string): number => {
  //find total length of right phone number string first
  const totalLen: number = rightPhone.length;
  console.log("rightPhone: ", rightPhone);
  console.log("totalLen: ", totalLen);
  //Ge the first character in the phone string
  const firstCharacter: string = rightPhone.split("")[0];
  //set up condition for phone number lenght
  if (totalLen < 10) {
    throw new Error("Must not be fewer than 10 digits");
  } else if (totalLen > 11) {
    throw new Error("");
  } else if (totalLen === 11) {
    if (firstCharacter === "1") {
      rightPhone.split("").splice(0, 1);
    } else {
      throw new Error("11 digits must start with 1");
    }
  } else if (firstCharacter === "0" || firstCharacter === "1") {
    throw new Error("");
  } else if (
    rightPhone.split("")[3] === "0" ||
    rightPhone.split("")[3] === "1"
  ) {
    throw new Error("Must not be greater than 11 digits");
  }
  return 0;
};

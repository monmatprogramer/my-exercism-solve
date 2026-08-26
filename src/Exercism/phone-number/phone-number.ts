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
  rightPhoneNumber = checkLengthNumberString(rightPhoneNumber);
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
  const phoneRegex = /[\s-.()+]/;
  //Check it
  if (phoneRegex.test(letter)) {
    //Start remove the good punctuations
    rightPhone = letter.replace(/[\s-.()+]/g, "");
  }
  if (rightPhone === "") {
    return letter;
  }
  return rightPhone;
};
//Check length of number string function
const checkLengthNumberString = (rightPhone: string): string => {
  //find total length of right phone number string first
  const totalLen: number = rightPhone.length;
  //Ge the first character in the phone string
  const firstCharacter: string = rightPhone.split("")[0];
  //set up condition for phone number lenght
  if (totalLen < 10) {
    throw new Error("Must not be fewer than 10 digits");
  } else if (totalLen === 11) {
    if (firstCharacter === "1") {
      rightPhone = rightPhone
        .split("")
        .splice(1, rightPhone.length - 1)
        .join("");
    } else {
      throw new Error("11 digits must start with 1");
    }
  } else if (totalLen > 11) {
    throw new Error("Must not be greater than 11 digits");
  }
  if (rightPhone.split("")[0] === "0" || rightPhone.split("")[0] === "1") {
    throw new Error(
      `Area code cannot start with ${rightPhone.split("")[0] === "0" ? "zero" : "one"}`,
    );
  }
  if (rightPhone.split("")[3] === "0" || rightPhone.split("")[3] === "1") {
    throw new Error(
      `Exchange code cannot start with ${rightPhone.split("")[3] === "0" ? "zero" : "one"}`,
    );
  }
  return rightPhone;
};

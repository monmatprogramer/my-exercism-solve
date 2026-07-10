export function encode(plainText: string): string {
  const cleanedText: string = cleanText(plainText);
  const secretMessage: string[] = [];
  let count: number = 1;
  for (const char of cleanedText) {
    if (!!isNaN(Number(char))) {
      // it is a string
      secretMessage.push(flip(char));
    } else {
      // is is number;
      secretMessage.push(char);
    }
    count++;
    if (count > 5) {
      secretMessage.push(" ");
      count = 1;
    }
  }
  return secretMessage.join("");
}

export function decode(cipherText: string): string {
  const solidMessage: string[] = [];
  //remove space from ciphyer text and clean text
  cipherText = cleanText(cipherText);
  for (const char of cipherText) {
    if (!!isNaN(Number(char))) {
      // if it is string
      solidMessage.push(flip(char));
    } else {
      // if it is not string
      solidMessage.push(char);
    }
  }
  return solidMessage.join("").trim();
}

// Helper function
// Clearn text

function cleanText(input: string): string {
  // requla expression to accept only letter and number
  const ex = /[^a-zA-Z0-9]/g;
  //Cover to into lowercase
  const lowCase: string = input.toLocaleLowerCase().replace(ex, "");
  return lowCase;
}

function flip(character: string): string {
  let newAscii: number = 0;
  let asciiCodeToText: string = "";
  let currentAsciiCode = character.charCodeAt(0);
  newAscii = 122 - (currentAsciiCode - 97);
  asciiCodeToText = String.fromCharCode(newAscii);
  return asciiCodeToText;
}

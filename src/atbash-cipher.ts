export function encode(plainText: string): string {
  const cleanedText: string = cleanText(plainText);
  const secretMessage: string[] = [];
  let count: number = 0;
  for (const char of cleanedText) {
    if (!!isNaN(Number(char))) {
      // it is a string
    } else {
      // is is number;
    }
  }
  return cleanedText;
}

export function decode(cipherText: string): string {
  return "decode fun";
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

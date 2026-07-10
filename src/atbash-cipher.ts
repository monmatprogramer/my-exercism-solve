export function encode(plainText: string): string {
  const cleanedText: string = cleanText(plainText);
  const secretMessage: string[] = [];
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

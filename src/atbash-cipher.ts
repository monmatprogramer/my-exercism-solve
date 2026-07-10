export function encode(plainText: string): string {
  return "encode fun";
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
  const lowCase: string = input.toLocaleLowerCase();
}

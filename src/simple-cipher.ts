export class SimpleCipher {
  keyCipher: string;
  constructor(key?: string | undefined | null) {
    if (key === "" || key === undefined || key === null) {
      this.keyCipher = toTakeGeneratedKey();
    } else {
      // Save the key
      this.keyCipher = key;
    }
  }
  encode() {
    console.log("encode");
  }
  decode() {
    console.log("decode");
  }
}
// Helper function to generate random key when the key is empty
function toTakeGeneratedKey(): string {
  // letter array here for do generating random key
  const randomLetterArray: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let tempRandomKey: string[] = [];
  //generate a random key
  for (let i: number = 0; i < 100; i++) {
    // run it 100 times
    let indexedGenerated: number = Math.floor(Math.random() * 25); // for retreving a - z
    // pickup a random letter from a - z
    // Add the pickuped letter TO keyCipher
    tempRandomKey.push(randomLetterArray[indexedGenerated]);
  }
  return tempRandomKey.join("");
}
// clearn key input befor generating
function cleanKey(key: string): string {
  const regex = /^[A-za-z]+$/;
  key = key.trim();
  if (!regex.test(key)) {
    throw new Error("Sorry! the key is accepted only alphabetic letters");
  }
  key = key.toLocaleLowerCase();
}

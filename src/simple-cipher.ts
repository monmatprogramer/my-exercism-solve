export class SimpleCipher {
  keyCipher: string;
  constructor(key?: string | undefined | null) {
    if (key === "" || key === undefined) {
      this.keyCipher = toTakeGeneratedKey();
    } else {
      // Save the key
      this.keyCipher = "not random";
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

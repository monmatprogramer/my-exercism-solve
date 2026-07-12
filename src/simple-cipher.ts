export class SimpleCipher {
  keyCipher: string;
  constructor(key?: string | undefined | null) {
    if (key === "" || key === undefined || key === null) {
      this.keyCipher = toTakeGeneratedKey();
    } else {
      // Clean text first preventing any error
      key = cleanKey(key);
      // Save the key
      this.keyCipher = key;
    }
  }
  encode(plainText: string): string {
    let secretMsg: string[] = [];
    const arrKeyCipher: string[] = this.keyCipher.split("");
    let i: number = 0;
    for (const char of plainText) {
      //find each index of user input like p =15
      let plainTextIndex: number = char.charCodeAt(0) - 97;
      // loop for shor key input like key=abc
      i = i % this.keyCipher.length;
      // convert ascii code into array a = [0]
      let keyCipherIndex = arrKeyCipher[i].charCodeAt(0) - 97;
      secretMsg.push(plainTextIndex + keyCipherIndex);
      i++;
    }
    return plainText;
  }
  decode(plainText: string): string {
    console.log("decode");
    return plainText;
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
  return key;
}

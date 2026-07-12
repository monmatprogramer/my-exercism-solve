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
    const arrKeyCipher: string[] = seperateKeyToArr(this.keyCipher);
    let i: number = 0;
    // clean text
    plainText = cleanKey(plainText);
    for (const char of plainText) {
      //find each index of user input like p =15
      let plainTextIndex: number = char.charCodeAt(0) - 97;
      // loop for shor key input like key=abc
      i = i % this.keyCipher.length;
      // convert ascii code into array a = [0]
      let keyCipherIndex = arrKeyCipher[i].charCodeAt(0) - 97;
      let n = (plainTextIndex + keyCipherIndex) % 26;
      secretMsg.push(randomLetterArray[n]);
      i++;
    }
    return secretMsg.join("");
  }
  decode(secretText: string): string {
    const solidMessage: string[] = [];
    //clean text
    secretText = cleanKey(secretText);
    const arrKeyCipher: string[] = seperateKeyToArr(this.keyCipher);
    let i: number = 0;
    for (const char of secretText) {
      let secretTextIndex: number = char.charCodeAt(0) - 97;
      i = i % this.keyCipher.length;
      let keyCipherIndex = arrKeyCipher[i].charCodeAt(0) - 97;
      let n = (secretTextIndex - keyCipherIndex + 26) % 26;
      solidMessage.push(randomLetterArray[n]);
      i++;
    }
    return solidMessage.join("");
  }
}
// Helper function to generate random key when the key is empty
// seperate normal text of ket into array of key like abc = [a,b,c]
function seperateKeyToArr(key: string): string[] {
  return key.split("");
}
function toTakeGeneratedKey(): string {
  // letter array here for do generating random key
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

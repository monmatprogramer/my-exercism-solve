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
    let secretMsg: string;
    const arrKeyCipher: string[] = this.keyCipher.split("");
    // convert ascii code into array
    //console.log("a".charCodeAt(0));
    //
    let i: number = 0;
    for (const char of plainText) {
      //console.log(i % this.keyCipher.length);
      let keyCipherAssiiCode = arrKeyCipher[i].charCodeAt(0) - 97;
      console.log(keyCipherAssiiCode);
      i++;
    }
    console.log("encode");
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

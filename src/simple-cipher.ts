export class SimpleCipher {
  keyCipher: string;
  constructor(key?: string | undefined | null) {
    if (key === "" || key === undefined) {
      //generate a random key
      for (let i: number = 1; i <= 100; i++) {
        // run it 100 times
        // pickup a random letter from a - z
        // Add the pickuped letter TO keyCipher
      }
      this.keyCipher = "random";
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

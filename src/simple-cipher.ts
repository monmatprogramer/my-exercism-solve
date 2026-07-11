export class SimpleCipher {
  keyCipher: string;
  constructor(key?: string | undefined | null) {
    if (key === "" || key === undefined) {
      this.keyCipher = "random";
    } else {
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

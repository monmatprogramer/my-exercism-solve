import { SimpleCipher } from "./simple-cipher";

try {
  const simpleCipher = new SimpleCipher("abc!12");
  console.log(simpleCipher.keyCipher);
} catch (e: any) {
  console.log(e.message);
}

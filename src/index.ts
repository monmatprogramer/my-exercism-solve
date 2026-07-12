import { SimpleCipher } from "./simple-cipher";

try {
  const simpleCipher = new SimpleCipher("abc");
  console.log(simpleCipher.decode("iboaqcnecbfcr"));
} catch (e: any) {
  console.log(e.message);
}

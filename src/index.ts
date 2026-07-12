import { SimpleCipher } from "./simple-cipher";

try {
  const simpleCipher = new SimpleCipher("abc");
  const t1 = new SimpleCipher();
  const t2 = new SimpleCipher();
  console.log(t1);
  console.log(t2);
  console.log(simpleCipher.decode("iboaqcnecbfcr"));
} catch (e: any) {
  console.log(e.message);
}

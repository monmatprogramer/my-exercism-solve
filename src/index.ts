import { Anagram } from "./anagram";
try {
  const subject = new Anagram("diaper");
  const matches = subject.matches("hello", "world", "zombies", "pants");
  console.log(matches);
} catch (e: any) {
  console.log(e.message);
}

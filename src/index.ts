import { Anagram } from "./anagram";
try {
  const subject = new Anagram("BANANA");
  const matches = subject.matches("BANANA");
  console.log(matches);
} catch (e: any) {
  console.log(e.message);
}

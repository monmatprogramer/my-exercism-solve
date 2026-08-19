import { Anagram } from "./anagram";
try {
  //diaper
  const subject = new Anagram("hello");
  const matches = subject.matches("hello", "world", "zombies", "pants");
  console.log(matches);
} catch (e: any) {
  console.log(e.message);
}

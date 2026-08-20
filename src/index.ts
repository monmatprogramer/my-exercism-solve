import { Anagram } from "./anagram";
try {
  const subject = new Anagram("LISTEN");
  const matches = subject.matches("LISTEN", "Silent");
  console.log(matches);
} catch (e: any) {
  console.log(e.message);
}

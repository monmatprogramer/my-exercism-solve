import { Anagram } from "./anagram";
try {
  const subject = new Anagram("ΑΒΓ");
  const matches = subject.matches("ΒΓΑ", "ΒΓΔ", "γβα", "αβγ");
  console.log(matches);
} catch (e: any) {
  console.log(e.message);
}

import { Anagram } from "./anagram";
try {
  const subject = new Anagram("ΑΒΓ");
  const matches = subject.matches("ΒΓΑ", "ΒΓΔ", "γβα", "αβγ");
  console.log("matches: ", matches);
  console.log("upper case");
  console.log("γβα".toLocaleUpperCase());
} catch (e: any) {
  console.log(e.message);
}

// const hasGreek = /\p{Script=Greek}/u.test(text
// [...potentials].sort((a, b) =>
//         a.localeCompare(b, "el"),
//       );
//

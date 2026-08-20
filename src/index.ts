import { Anagram } from "./anagram";
try {
  const subject = new Anagram("Orchestra");
  const matches = subject.matches("cashregister", "Carthorse", "radishes");
  console.log(matches);
} catch (e: any) {
  console.log(e.message);
}

// const hasGreek = /\p{Script=Greek}/u.test(text
// [...potentials].sort((a, b) =>
//         a.localeCompare(b, "el"),
//       );
//

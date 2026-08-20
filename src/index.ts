import { Anagram } from "./anagram";
try {
  const subject = new Anagram("ΑΒΓ");
  const matches = subject.matches("ΒΓΑ", "ΒΓΔ", "γβα", "αβγ");
  console.log(matches);
} catch (e: any) {
  console.log(e.message);
}

// const hasGreek = /\p{Script=Greek}/u.test(text
// [...potentials].sort((a, b) =>
//         a.localeCompare(b, "el"),
//       );
//
/*
  *
const values: string[] = ["αβγ", "βγδ", "αβγ", "αβγ"];
console.log(values.filter((value, index, array) => {
    console.log(array)
}))

const duplicateValues = ['']
console.log(duplicateValues)
  * */

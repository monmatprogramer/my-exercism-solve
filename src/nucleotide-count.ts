type DnaType = {
  [key: string]: number;
};
export function nucleotideCounts(input: string): DnaType {
  const dna: string = "ACGT";
  let a = 0;
  let c = 0;
  let g = 0;
  let t = 0;
  for (const char of dna) {
    for (const ch of input) {
      //Check input equal to char
      if (ch === char) {
        // check what is dna letter
        switch (ch) {
          case "A":
            a = a + 1;
            break;
          case "C":
            c = c + 1;
            break;
          case "G":
            g = g + 1;
            break;
          case "T":
            t = t + 1;
            break;
        }
      }
    }
  }
  if (a === 0 && c === 0 && g === 0 && t === 0) {
    throw new Error("Invalid nucleotide in strand");
  }
  let dnaList: DnaType = {
    A: a,
    C: c,
    G: g,
    T: t,
  };

  return dnaList;
}

console.log(
  nucleotideCounts(
    "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC",
  ),
);

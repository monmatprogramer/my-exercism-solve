type DnaType = {
  [key: string]: number;
};
export function nucleotideCounts(input: string): DnaType {
  const dna: string = "ACGT";
  const [a, c, g, t] = [0, 0, 0, 0];

  let dnaList: DnaType = {
    A: a,
    C: c,
    G: g,
    T: t,
  };
  for (const char of dna) {
    //Check input equal to char
    if (input === char) {
      // check what is dna letter
      switch (input) {
        case "A":
          a = a + 1;
          break;
      }
    }
  }
  return {
    A: 0,
  };
}

console.log(nucleotideCounts("G"));

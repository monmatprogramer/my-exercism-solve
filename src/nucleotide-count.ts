type DnaType = {
  [key: string]: number;
};
export function nucleotideCounts(input: string): DnaType {
  const dna: string = "ACGT";
  const [a, c, g, t] = [0, 0, 0, 0];

  let dnaList: DnaType = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  for (const char of dna) {
    //Check input equal to char
    if (input === char) {
      // check what is dna letter
      switch (input) {
        case "A":
          break;
      }
    }
  }
  return {
    A: 0,
  };
}

console.log(nucleotideCounts("G"));

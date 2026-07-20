type DnaType = {
  [key: string]: number;
};
export function nucleotideCounts(input: string): DnaType {
  const dna: string = "ACGT";
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
    }
  }
  return {
    A: 0,
  };
}

console.log(nucleotideCounts("G"));

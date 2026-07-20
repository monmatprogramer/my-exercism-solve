type DnaType = {
  [key: string]: number;
};
export function nucleotideCounts(input: string): DnaType {
  const dna: string = "ACGT";
  let [a, c, g, t] = [0, 0, 0, 0];

  let dnaList: DnaType = {
    A: a,
    C: c,
    G: g,
    T: t,
  };
  let tempFlag: boolean[] = [];
  for (const char of dna) {
    //Check input equal to char
    if (input === char) {
      // check what is dna letter
      switch (input) {
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
        default:
          tempFlag.push(false);
          break;
      }
    }
  }
  return dnaList;
}

console.log(nucleotideCounts("G"));

// define exactly what keys are allowed
export type DnaType = {
  A: number;
  C: number;
  G: number;
  T: number;
};

export function nucleotideCounts(input: string): DnaType {
  // set up the starting counts
  const counts: DnaType = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  for (const char of input) {
    switch (char) {
      case "A":
        counts.A++;
        break;
      case "C":
        counts.C++;
        break;
      case "G":
        counts.G++;
        break;
      case "T":
        counts.T++;
        break;
      default:
        throw new Error("Invalid nucleotide in strand");
    }
  }
  return counts;
}

console.log(nucleotideCounts("GGGGGG"));

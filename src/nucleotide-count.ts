type DnaType = {
  [key: string]: number;
};
export function nucleotideCounts(input: string): DnaType {
  const dna: string = "ACGT";
  for (const char of dna) {
    console.log(char);
  }
  return {
    A: 0,
  };
}

console.log(nucleotideCounts("G"));

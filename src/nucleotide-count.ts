type DnaType = {
  [key: string]: number;
};
export function nucleotideCounts(input: string): DnaType {
  return {
    A: 0,
  };
}

console.log(nucleotideCounts("G"));

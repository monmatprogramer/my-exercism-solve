export type DnaType = Record<"A" | "C" | "G" | "T", number>;

const t: DnaType = {
  A: 0,
  C: 0,
  G: 0,
  T: 0,
};

export function nucleotideCounts(input: string): DnaType {
  const dna: DnaType = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  return dna;
}

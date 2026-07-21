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
  //Covert input string into an array
  const inputArray: string[] = input.split("");
  inputArray.reduce((counts, char) => {
    console.log("count: ", counts);
    console.log("char: ", char);
    console.log("\n");
    if (char in counts) {
      counts[char];
    }
    return "";
  });

  return dna;
}

nucleotideCounts("ACGTTT");

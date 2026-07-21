export type DnaType = Record<"A" | "C" | "G" | "T", number>;


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
  inputArray.reduce(
    (counts, char) => {
      // Loop for checking char in counts
      if (char in counts) {
        // Extract the value and plus it
        counts[char as keyof DnaType]++;
        // return new object that update its value
        return counts;
      }
      throw new Error("Invalid nucleotideCounts");
    },
    { A: 0, C: 0, G: 0, T: 0 },
  );

  return dna;
}


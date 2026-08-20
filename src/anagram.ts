export class Anagram {
  private input: string;
  constructor(input: string) {
    this.input = input.toLowerCase();
  }
  public matches(...potentials: string[]): string[] {
    // Convert potentials to lower case
    let lowerCasePotentials: string[] = potentials.map((v) =>
      v.toLocaleLowerCase(),
    );

    //split words
    let result: string[] = potentials.filter(
      (value) => this.input === value.toLocaleLowerCase(),
    );
    if (result.length > 0 && potentials.length === 1) {
      return [];
    } else {
      for (let i: number = 0; i < result.length; i++) {
        potentials = potentials.filter((value) => value !== result[i]);
      }
    } //save index where found
    const indexFound: number[] = [];
    const anagramStr: string = allOperations(this.input);
    //
    for (const [index, value] of lowerCasePotentials.entries()) {
      const result: string = allOperations(value);
      if (result === anagramStr) {
        //logic
        indexFound.push(index);
      }
    }
    console.log(indexFound);
    let finalResult: string[] = [];
    for (const [index, value] of indexFound.entries()) {
      finalResult.push(potentials.at(value)!);
    }
    return finalResult;
  }
}

// Helper function
const allOperations = (rwInput: string): string => {
  const splitLetter = splitSingleLetter(rwInput);
  const sortedLetter = sortSingleLetter(splitLetter);
  const joinedLetter = joinLetterBack(sortedLetter);
  return joinedLetter;
};
const splitSingleLetter = (rwInput: string): string[] => {
  const singleLetters: string[] = rwInput.split("");

  return singleLetters;
};

const sortSingleLetter = (splitLetter: string[]): string[] => {
  const sortedSingleLetter: string[] = splitLetter.sort();
  return sortedSingleLetter;
};

const joinLetterBack = (sortedSplitLetter: string[]): string => {
  const astring: string = sortedSplitLetter.join("");
  return astring;
};

export class Anagram {
  private input: string;
  constructor(input: string) {
    this.input = input.toLowerCase();
  }
  public matches(...potentials: string[]): string[] {
    let lowerCasePotentials: string[] = [];
    // check input string
    if (!isGreek(this.input)) {
      // Convert potentials to lower case
      lowerCasePotentials = potentials.map((v) => v.toLocaleLowerCase());
    } else {
      lowerCasePotentials = potentials.map((v) => v.toLocaleLowerCase());
    }
    //split words
    let result: string[] = potentials.filter(
      (value) => this.input === value.toLocaleLowerCase(),
    );
    console.log(result);
    if (result.length > 0) {
      console.log(potentials.length);
      if (potentials.length > 1) {
        let res = lowerCasePotentials.filter((v) => v !== this.input)[0];
        res = res.charAt(0).toUpperCase() + res.slice(1);
        return [res];
      }
      return [];
    } //save index where found
    const indexFound: number[] = [];

    const anagramStr: string = allOperations(this.input);
    console.log("anagramStr: ", anagramStr);
    //
    for (const [index, value] of lowerCasePotentials.entries()) {
      const result: string = allOperations(value);
      if (result === anagramStr) {
        //logic
        indexFound.push(index);
      }
    }

    let finalResult: string[] = [];

    for (const [index, value] of indexFound.entries()) {
      finalResult.push(potentials.at(value)!);
    }
    return finalResult;
  }
}

// Helper function
const isGreek = (rwInput: string): boolean => {
  const hasGreek = /\p{Script=Greek}/u;
  return hasGreek.test(rwInput);
};
const allOperations = (rwInput: string): string => {
  console.log("rwInput: ", rwInput);
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

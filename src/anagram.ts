export class Anagram {
  private input: string;
  constructor(input: string) {
    if (!isGreek(input)) {
      this.input = input.toLowerCase();
    } else {
      this.input = input;
    }
  }
  public matches(...potentials: string[]): string[] {
    let lowerCasePotentials: string[] = [];
    // check input string
    if (!isGreek(this.input)) {
      // Convert potentials to lower case
      lowerCasePotentials = potentials.map((v) => v.toLocaleLowerCase());
    } else {
      // lowerCasePotentials = potentials.map((v) => v.toLocaleLowerCase());
      lowerCasePotentials = potentials;
    }
    //split words
    let result: string[] = [];
    if (!isGreek(this.input)) {
      result = lowerCasePotentials.filter(
        (value) => this.input === value.toLocaleLowerCase(),
      );
    } else {
      result = lowerCasePotentials.filter((value) => this.input === value);
    }
    if (result.length > 0) {
      if (potentials.length > 1) {
        let res = lowerCasePotentials.filter((v) => v !== this.input)[0];
        res = res.charAt(0).toUpperCase() + res.slice(1);
        return [res];
      }
      return [];
    } //save index where found
    const indexFound: number[] = [];
    const tempResult: string[] = [];
    const anagramStr: string = allOperations(this.input);
    // return [];
    for (const [index, value] of lowerCasePotentials.entries()) {
      const result: string = allOperations(value);
      if (!isGreek(this.input)) {
        if (result === anagramStr) {
          //logic
          indexFound.push(index);
        }
      } else {
        tempResult.push(result);
      }
    }
    let finalResult: string[] = [];

    if (tempResult.length > 0) {
      finalResult = tempResult.filter(
        (v) => v.toLowerCase() === anagramStr.toLowerCase(),
      );
    }

    for (const [index, value] of indexFound.entries()) {
      finalResult.push(potentials.at(value)!);
    }
    return [...new Set<string>(finalResult)];
  }
}

// Helper function
const isGreek = (rwInput: string): boolean => {
  const hasGreek = /\p{Script=Greek}/u;
  return hasGreek.test(rwInput);
};
const isGreekCapitalLetter = (value: string): boolean => {
  const express = /^\p{Script=Greek}$/u;
  return (
    express.test(value) &&
    value === value.toUpperCase() &&
    value !== value.toLowerCase()
  );
};
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

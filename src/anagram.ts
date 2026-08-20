export class Anagram {
  private input: string;
  constructor(input: string) {
    if (!isGreek) {
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
    if (!isGreek) {
      result = lowerCasePotentials.filter(
        (value) => this.input === value.toLocaleLowerCase(),
      );
    } else {
      result = lowerCasePotentials.filter((value) => this.input === value);
    }
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
    for (const [index, value] of lowerCasePotentials.entries()) {
      const result: string = allOperations(value);
      if (!isGreek) {
        if (result === anagramStr) {
          //logic
          indexFound.push(index);
        }
      } else {
        console.log(isGreekCapitalLetter(result));
        if (anagramStr.toLocaleLowerCase() === result.toLocaleLowerCase()) {
          console.log("lower case: ", anagramStr.toLocaleLowerCase());
          indexFound.push(index);
        } else if (
          anagramStr.toLocaleUpperCase() === result.toLocaleUpperCase()
        ) {
          console.log("upper case: ", anagramStr.toUpperCase());
          indexFound.push(index);
        }
      }
    }
    console.log(indexFound);
    let finalResult: string[] = [];

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
const isGreekCapitalLetter = (value: string) => {
  const express = /^\p{Script=Greek}$/u;
  return express.test(value) && value === value.toUpperCase();
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

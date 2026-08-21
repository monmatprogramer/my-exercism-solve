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
    let greek = new Map<string, string>();
    // check input string
    if (!isGreek(this.input)) {
      // Convert potentials to lower case
      lowerCasePotentials = potentials.map((v) => v.toLocaleLowerCase());
    } else {
      // lowerCasePotentials = potentials.map((v) => v.toLocaleLowerCase());
      lowerCasePotentials = potentials;
      for (const [index, value] of lowerCasePotentials.entries()) {
        greek.set(
          value,
          value
            .toLowerCase()
            .split("")
            .sort((a, b) => a.localeCompare(b))
            .join(""),
        );
      }
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
      let smallTempResult: string[] = tempResult.map((v) => v.toLowerCase());
      let uniqueKey: string = findUniqueInArray(smallTempResult);
      //Get key on value
      let uniqueValue = getKeyOnValue(greek, uniqueKey);
      greek.delete(uniqueValue!);
      let notDuplicateValue = [...new Set<string>(convertToSingleArray(greek))];
      //convert to uppercase and sort
      let preVal: string = "";
      let upperAndSorted = notDuplicateValue.map((value) => {
        if (!(value === value.toUpperCase())) {
          let val = value;
          val.toUpperCase();
          let spl = splitSingleLetter(val);
          let sortedSpl = sortSingleLetter(spl);
          preVal = value;
          return joinLetterBack(sortedSpl);
        } else {
          return value;
        }
      });
      finalResult = [upperAndSorted[0], preVal];
    } else {
      for (const [index, value] of indexFound.entries()) {
        finalResult.push(potentials.at(value)!);
      }
    }
    return [...new Set<string>(finalResult)];
  }
}

// Helper function
function convertToSingleArray(greek: Map<string, string>) {
  const singleArray: string[] = [];
  for (const value of greek) {
    singleArray.push(...value);
  }
  return singleArray;
}
// Get key on value
function getKeyOnValue(greek: Map<string, string>, targetValue: string) {
  const arrayGreek = [...greek];
  const findGreek = arrayGreek.find(([_, value]) => value === targetValue)?.[0];
  return findGreek;
}
// find unique arr value
function findUniqueInArray(arr: string[]): string {
  let i: number = 0;
  while (true) {
    for (let j: number = i + 1; j < arr.length - 1; j++) {
      if (arr[0] !== arr[j]) {
        let temp = arr[i];
        arr[0] = arr[j];
        arr[j] = temp;
      }
    }
    i++;
    if (i === arr.length) {
      break;
    }
  }
  return arr[0];
}
const isGreek = (rwInput: string): boolean => {
  const hasGreek = /\p{Script=Greek}/u;
  return hasGreek.test(rwInput);
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

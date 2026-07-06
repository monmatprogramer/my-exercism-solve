//Solving the binary search

export function find(haystack: number[], needle: number): number {
  //Sort list
  haystack = toSortedlist(haystack);
  const check: number = haystack.indexOf(6);
  if (check === 0) {
    throw new Error("Value not in array");
  }
  return check;
}

// sort list ascending
function toSortedlist(rawList: number[]) {
  return rawList.sort((a, b) => a - b);
}

// Findig middle
function findMiddle(list: number[]): number {
  //length of list
  const len: number = list.length;
  //Finding middle value
  const middleValue: number = Math.floor(len / 2);
  // find value in the middle list
  const middleNum: number = list[middleValue];
  return middleNum;
}
// Bigger than middle
function biggerThanMiddle(list: number[], middleValue: number): number[] {
  //Filter
  const biggerList: number[] = list.filter((value) => value > middleValue);
  return biggerList;
}

// Less than middle
function smallerThanMiddle(list: number[], middleValue: number): number[] {
  const smallList: number[] = list.filter((value) => value < middleValue);
  return smallList;
}

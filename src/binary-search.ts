//Solving the binary search

export function find(haystack: number[], needle: number): number {
  haystack = toSortedlist(haystack);
  findMiddle(haystack);
  return 0;
}
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

// Less than middle

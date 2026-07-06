//Solving the binary search

export function find(haystack: number[], needle: number): number {
  findMiddle(haystack);
  return 0;
}
// Findig middle
function findMiddle(list: number[]): number {
  //length of list
  const len: number = list.length;
  //Finding middle value
  const middleValue: number = Math.floor(len / 2);
  // find value in the middle list
  const middleNum: number = list[middleValue];
  console.log(middleNum);
  return middleNum;
}
// Bigger than middle

// Less than middle

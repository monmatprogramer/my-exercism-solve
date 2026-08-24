//state of tic tax toe
export const gamestate = (board: string[]): string => {
  //count X the given board
  board.filter((xValue) => {});
  return "";
};
const countAValue = (charName: string, wholeString: string): number => {
  let count = 0;
  let index = wholeString.indexOf(charName);
  while (index !== -1) {
    count++;
    index = wholeString.indexOf(charName, index + 1);
  }
  return count;
};

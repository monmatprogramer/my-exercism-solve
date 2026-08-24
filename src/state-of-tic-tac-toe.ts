//state of tic tax toe
export const gamestate = (board: string[]): string => {
  //count X the given board
  let totalXValue: number = 0;
  for (const [_, value] of board.entries()) {
    totalXValue += countAValue("X", value);
  }
  console.log("X on the board", totalXValue);
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

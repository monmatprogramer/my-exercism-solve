//state of tic tax toe
export const gamestate = (board: string[]): string => {
  //count X the given board
  const xValue: string = "X";
  const oValue: string = "O";
  let totalOValue: number = 0;
  let totalXValue: number = 0;
  for (const [_, value] of board.entries()) {
    totalXValue += countAValue(xValue, value);
    totalOValue += countAValue(oValue, value);
  }
  //check order
  if (totalOValue > totalXValue) {
    throw new Error("0 Started");
  }
  if (totalXValue > totalOValue + 1) {
    throw new Error("X went twice");
  }
  //Check winer
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

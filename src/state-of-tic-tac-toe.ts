//state of tic tax toe
export const gamestate = (board: string[]): string => {
  //count X the given board
  const xValue: string = "X";
  const oValue: string = "O";
  let totalOValue: number = 0;
  let totalXValue: number = 0;

  //Winer
  let isXWiner: boolean;
  let isOWiner: boolean;

  for (const [_, value] of board.entries()) {
    totalXValue += countAValue(xValue, value);
    totalOValue += countAValue(oValue, value);
  }
  //check order
  if (totalOValue > totalXValue) {
    throw new Error("0 Started");
  }
  console.log(totalOValue);
  if (totalXValue > totalOValue + 1) {
    throw new Error("X went twice");
  }
  //Check winer
  countValueWiner(xValue, board);
  return "";
};
const countAValue = (charName: string, wholeString: string): number => {
  let count = 0;
  let index = wholeString.indexOf(charName);
  console.log("o index: ", index);
  while (index !== -1) {
    count++;
    index = wholeString.indexOf(charName, index + 1);
  }
  return count;
};
// Check winer
const countValueWiner = (valueCheck: string, board: string[]): number => {
  let count: number = 0;

  for (const [index, value] of board.entries()) {
    //per row
    count = countAValue(valueCheck, value);
  }
  return count;
};

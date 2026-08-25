//state of tic tax toe
export const gamestate = (board: string[]): string => {
  //count X the given board
  const xValue: string = "X";
  const oValue: string = "O";
  //find total player in the board
  let totalOValue: number = 0;
  let totalXValue: number = 0;

  //Winer
  let isXWiner: boolean;
  let isOWiner: boolean;

  for (const [_, value] of board.entries()) {
    totalXValue += countAValue(xValue, value);
    totalOValue += countAValue(oValue, value);
  }
  //TODO: Fix it check in order
  //check order
  // Check to confirm that X start first
  if (totalOValue > totalXValue) {
    throw new Error("0 Started");
  }
  // Preving X twice
  if (totalXValue > totalOValue + 1) {
    throw new Error("X went twice");
  }
  //Check winer
  countValueWiner(xValue, board);
  countValueWiner(oValue, board);
  if (countValueWiner(xValue, board) === 3) {
    isXWiner = true;
  } else {
    isXWiner = false;
  }
  if (countValueWiner(oValue, board) === 3) {
    isOWiner = true;
  } else {
    isOWiner = false;
  }

  if (isXWiner && isOWiner) {
    throw new Error("game should have ended");
  }
  if (isXWiner && totalXValue === 0) {
    throw new Error("game should have ended");
  }
  if (isOWiner && totalXValue > totalOValue) {
    throw new Error("game should have ended");
  }
  if (isXWiner && isOWiner) {
    return "win";
  }
  if (totalXValue + totalOValue === 9) {
    return "draw";
  } else return "ongoin";
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
// Check winer
const countValueWiner = (valueCheck: string, board: string[]): number => {
  // count on specific value from valueCheck
  let count: number = 0;
  // check count where valueCheck as condition
  for (const [index, value] of board.entries()) {
    //per row
    // count it in order to find valueCheck
    let lenVale: number = value
      .split("")
      .filter((v) => v === valueCheck).length;
    if (lenVale === 3) {
      return lenVale;
    }
  }
  return count;
};

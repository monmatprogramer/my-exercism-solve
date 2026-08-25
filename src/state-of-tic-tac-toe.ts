//state of tic tax toe
export const gamestate = (board: string[]): string => {
  //count X the given board
  const xValue: string = "X";
  const oValue: string = "O";
  //(a)find total player in the board
  let totalOValue: number = 0;
  let totalXValue: number = 0;

  //Winer
  let isXWiner: boolean;
  let isOWiner: boolean;
  //(a)
  for (const [_, value] of board.entries()) {
    totalXValue += countAValue(xValue, value);
    totalOValue += countAValue(oValue, value);
  }
  //TODO: Fix it check in order
  //check order
  // Check to confirm that X start first
  // if (board[0].split("")[0] === oValue) {
  //   throw new Error("0 Started");
  // }
  if (totalOValue > totalXValue) {
    throw new Error("0 Started");
  }
  // Preving X twice
  if (totalXValue > totalOValue + 1) {
    throw new Error("X went twice");
  }
  // Check winer
  isOWiner = xWiner(oValue, board);
  // isOWiner = false;
  isXWiner = xWiner(xValue, board);

  console.log(isXWiner);
  console.log(isOWiner);
  if (isXWiner && isOWiner) {
    throw new Error("game should have ended");
  }
  if (isXWiner && totalXValue === 0) {
    throw new Error("game should have ended");
  }
  if (isOWiner && totalXValue > totalOValue) {
    throw new Error("game should have ended");
  }
  if (isXWiner || isOWiner) {
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
let xCount: number = 0;

const xWiner = (xPlayer: string, board: string[]) => {
  let count: number = 0;
  let isRow: boolean = true;
  let isCol: boolean = false;
  console.log(`===== xPlayer = ${xPlayer}=====`);
  if (isRow) {
    for (const [_, value] of board.entries()) {
      console.log("row board value: ", value);
      for (const [_, v] of value.split("").entries()) {
        console.log("v: ", v);
        if (v === xPlayer) {
          count++;
        }
      }
      console.log("count: ", count);
      if (count > 2) {
        return true;
      }
      isRow = false;
      isCol = true;
      count = 0;
    }
    console.log("---end row loop---\n\n");
  }
  if (isCol) {
    //conver to tow dimensional array
    let convertBoard: string[][] = [];
    for (const [index, value] of board.entries()) {
      convertBoard.push(value.split(""));
    }
    let colIndex: number | null = null;
    let xObj: { xIndex: number; xValue: string };
    //check x in a col
    for (const [index, value] of convertBoard.entries()) {
      console.log("col board value: ", value);
      // In the same column
      for (let j: number = 0; j < convertBoard.length; j++) {
        if (convertBoard[index][j] === xPlayer) {
          if (colIndex === null) {
            xObj = { xIndex: j, xValue: convertBoard[index][j] };
            count++;
          } else if (j === colIndex) {
            count++;
          }

          if (colIndex !== null) {
            if (xObj!.xValue === convertBoard[index][j]) {
              count++;
            }
          }
          // if (convertBoard[index][colIndex] === xPlayer) {
          //   count++;
          // }
          colIndex = j; //0
        }
      }
      console.log("final count: ", count);
    }
    if (count > 2) {
      return true;
    }

    isRow = true;
    isCol = false;
    count = 0;
  }

  console.log("-----end col loop---");
  return false;
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

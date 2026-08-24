//state of tic tax toe
export const gamestate = (board: string[]): string => {
  //count X the given board
  let totalXvalue: number = board.filter((xValue) =>
    //TODO: Find X value here
  ).length;
  console.log(totalXvalue); //3
  return "";
};

// Learn 2 dimension
function twoDimensionArray(row: number, col: number) {
  const rowNum: number = row;
  const rowCol: number = col;
  const grid: (number | undefined)[][] = Array.from({ length: rowNum }, () =>
    Array(rowCol).fill(undefined),
  );

  //Fill a column all
  for (const [rowIndex, rowValue] of grid.entries()) {
    grid[rowIndex][0] = Math.floor(Math.random() * 10);
  }
  // Fill a row all
  for (const [rowIndex, rowValue] of grid.entries()) {
    for (const [colIndex, colValue] of rowValue.entries()) {
      grid[1][colIndex] = Math.floor(Math.random() * 10);
    }
  }
  console.log(grid);
}
// Learn how to add other array inot existing an array that has already has element
function addExsistingArray() {
  let arr1: string[] = ["B", "C"];
  let arr2: string[] = ["A"];
  arr2 = [...arr2, ...arr1];
  console.log(arr2);
}

addExsistingArray();

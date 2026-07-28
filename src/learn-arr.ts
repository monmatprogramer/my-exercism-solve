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
  console.log(grid);
}
const r: number = 3;
const c: number = 3;
twoDimensionArray(r, c);

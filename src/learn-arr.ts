// Learn 2 dimension
function twoDimensionArray(row: number, col: number) {
  const rowNum: number = row;
  const rowCol: number = col;
  const grid: (number | undefined)[][] = Array.from({ length: rowNum }, () =>
    Array(rowCol).fill(undefined),
  );
  grid[0][2] = 3;
  grid[2][0] = 7;
  console.log(grid);
}
const r: number = 3;
const c: number = 3;
twoDimensionArray(r, c);

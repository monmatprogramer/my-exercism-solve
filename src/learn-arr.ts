// Learn 2 dimension
function twoDimensionArray(row: number, col: number) {
  const rowNum: number = 2;
  const rowCol: number = 3;
  const grid: (number | undefined)[][] = Array.from({ length: rowNum }, () =>
    Array(rowCol).fill(undefined),
  );
  console.log(grid);
}
const r: number = 3;
const c: number = 3;
twoDimensionArray(r, c);

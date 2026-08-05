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
  arr2 = ["A", ...arr1];
  // =[A,B,C]
  if (!arr2[3]) {
    // undefined === undefined => true
    console.log(arr2[3]);
  } else {
    for (let i: number = 0; arr2.length; i++) {
      console.log(arr2[i + 1]);
      console.log("step: ", i);
    }
  }
}

// Learn arrays by reference
function byReferenceArray() {
  //length = 5
  const originalArray: number[] = [1, 2, 3, 4, 5];
  // Store by reference
  let referOrginalArray: number[] = [...originalArray];
  referOrginalArray.shift();
  console.log("Referencce Original array length: ", referOrginalArray.length);
  console.log("Original array length: ", originalArray.length);
}

//learn array to store as queue
function toArrayQueue() {
  // Array of tuples
  let test = [
    ["string", 0],
    ["string2", 1],
    ["string3", 0],
  ];
  console.log(test);
}

toArrayQueue();

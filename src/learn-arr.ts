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
// Tuble array
function toArrayQueue() {
  // Array of tuples
  // * Fix length but unknown type
  // Tuple type  is [string,number]
  let test: [string, number][] = [
    ["string", 0],
    ["string2", 1],
    ["string3", 0],
  ];
  for (const [index, value] of test) {
    // console.log(index); string
    // console.log(value); 0
  }
  for (let i: number = 0; i < test.length; i++) {
    //console.log(test[i]);
  }
  const [a, b] = test.shift()!;
  console.log(a);
  console.log(b);
}

// Learn about search array in array
function searchArrayInArray() {
  const arr1: string[] = ["Sokha", "Pupha", "Chanra", "Chanmuney"];
  const arr2: string[] = ["Chanmuney", "Sokchan", "Sokha"];
  // conver to set
  const searchSet = new Set(arr1);
  // start searching
  console.log("------- Start searching ------");
  console.log("Method 1: ");
  console.log("---------");
  for (const v1 of arr2) {
    for (const v2 of arr1) {
      if (v1 === v2) {
        console.log(v1);
      }
    }
  }
  console.log("\nMethod 2: ");
  console.log("---------");
  arr2.forEach((v1) => {
    console.log(arr1.filter((v2) => v1 === v2));
  });
  console.log("\nMethod 3: ");
  console.log("---------");
  console.log("Best method");
  const matches = arr2.filter((name) => searchSet.has(name));
  console.log(matches.includes("Sokha"));
}
function loopEmtpyArray() {
  const emptyArray: number[] = [];
  for (const emp of emptyArray) {
    console.log(emp);
  }
}
// Array at the first element
function addTheFirst() {
  const arr: string[] = ["C"];
  arr.unshift("B");
  arr.unshift("A");
  //arr = [A,B,C]
}

// Learn how to swap array
function swapArray() {
  let arr: string[] = ["A", "B", "C"];
  //swap
  [arr[0], arr[2]] = [arr[2], arr[0]];
  console.log(arr);
}
function learnTwoDimentionalArr() {
  //declare
  const num: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  let n = [7, 8, 9];
  num.push(n);
}
learnTwoDimentionalArr();
function removeSpecificArr() {
  const strArr: string[] = ["1", "2", "3", "4"];
  for (const [index, value] of strArr) {
    console.log(strArr.splice(0, 3));
  }
}

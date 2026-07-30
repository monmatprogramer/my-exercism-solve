//learn about bitwise
function lesson1Fun() {
  let result = 5 & 3;
  console.log(result);
}

// It checks the number is odd or even
function lesson2Fun(num: number): boolean {
  return (num & 1) === 1;
}

//console.log(lesson2Fun(5)); // true;
//console.log(lesson2Fun(8)); // false

// Learn about setting up permission
function lesson3Fun() {
  const READ = 4; // 0100
  const WRITE = 2; // 0010
  const EXECUTE = 1; // 0001
  // If we allow user to READ + WRITE
  let userPermission = 6; // 6 = READ + WRITE
  let canWrite = (userPermission & WRITE) === WRITE;
  if (canWrite) {
    console.log("User is allowed to write files");
  } else {
    console.log("Access denied");
  }
}

function practiceFun() {
  const SCORE: number = 34;
  const ITEM_SCORE: number = 2;
  console.log(SCORE & ITEM_SCORE);
}

practiceFun();

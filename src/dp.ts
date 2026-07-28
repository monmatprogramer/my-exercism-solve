// Dynamic Programming (DP) or Memoization

function findStudentScore() {
  // we create 5 slotes to store score
  let scores: (number | undefined)[] = new Array(5).fill(undefined);
  //save scores
  scores[2] = 95;
  if (scores[2] !== undefined) {
    console.log("Student 2 score:", scores[2]);
  }
  console.log("scores array: ", scores);
}

function favoritFruitsFun() {
  let favoritFruits: (number[] | undefined)[] = new Array(4).fill(undefined);
  favoritFruits[0] = [1, 3];
  console.log(favoritFruits);
}
function ageFun() {
  let ages: (number | undefined)[] = new Array(5).fill(undefined);
  ages[0] = 18;
  ages[3] = 25;
  ages[5] = 30;
  // Check before using
  if (ages[2] !== undefined) {
    console.log("Age found: ", ages[2]);
  } else {
    console.log("Age not found");
  }
  console.log(ages);
}

function courseFun() {
  let courses: (number[] | undefined)[] = new Array(4).fill(undefined);
  courses[0] = [101, 102];
  courses[2] = [201];
  courses[3] = [301, 302, 303];
  console.log(courses);
}
//Count Stored Values
function countStoredValue() {
  let memory: (number[] | undefined)[] = new Array(6).fill(undefined);
  memory[1] = [10];
  memory[4] = [20, 30];
  memory[5] = [40];
  let countResult: number = 0;
  for (let i: number = 0; i < 6; i++) {
    if (memory[i] !== undefined) {
      ++countResult;
    }
  }
  console.log(countResult);
}

function sumAllNumber() {
  let memory: (number[] | undefined)[] = new Array(5).fill(undefined);
  let sumResult: number = 0;
  memory[0] = [1, 2];
  memory[2] = [3];
  memory[4] = [4, 5];

  for (const [index, value] of memory.entries()) {
    if (value !== undefined) {
      sumResult = value.reduce((acc, curr) => acc + curr, sumResult);
    }
  }
  console.log(sumResult);
}
function findIndex() {
  let memory: (number[] | undefined)[] = new Array(6).fill(undefined);
  memory[0] = [1];
  memory[1] = [2];
  memory[3] = [3];
  memory[5] = [5];
  const result: number = memory.findIndex((el) => el === undefined);
  console.log(result);
}
// Calculate fib
function fibMemo(n: number, memo: number[] = []): number {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}
//clim stairs
function climbStairs(n: number, memo: number[] = []): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (memo[n] !== undefined) {
    return memo[n];
  }
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
}
function fibonacciMemo(n: number, cached: Record<number, number> = {}): number {
  // 1. base case
  if (n === 0) return 0;
  if (n === 1) return 1;

  // 2. Check the notepad(cached)
  if (cached[n] !== undefined) {
    return cached[n];
  }
  const resul: number =
    fibonacciMemo(n - 1, cached) + fibonacciMemo(n - 2, cached);
  cached[n] = resul;
  return resul;
}
///count
function countDown(n: number) {
  console.log(n);
  if (n === 1) {
    return;
  }
  countDown(n - 1); //4,3,2,1
}

// count up
function countUp(n: number) {
  console.log(n);
  let up: number = 5;
  if (n >= up) {
    return;
  }
}
function sum(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
function substract(n: number): number {
  if (n === 1) return 1;
  return n - substract(n - 1);
}
function hello(n: number) {
  console.log("Start", n);
  if (n === 1) {
    return;
  }
  hello(n - 1);
  console.log("End", n);
}

function test(n: number) {
  if (n === 0) {
    return;
  }

  test(n - 1);

  console.log(n);
}
// grid traveler
function gridTraveler(
  m: number,
  n: number,
  cached: Record<string, number> = {},
): number {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  const key = m + "," + n;
  if (cached[key] !== undefined) {
    return cached[key];
  }
  const waysToWin =
    gridTraveler(m - 1, n, cached) + gridTraveler(m, n - 1, cached);
  cached[key] = waysToWin;
  return waysToWin;
}
function findFactorialFun(n: number): number {
  //let factorialMemory: (number | undefined)[] = new Array(6).from(6);
  return 0;
}
// find pyramid
function findPyramid(n: number) {}
console.log(findPyramid(3)); // 6;

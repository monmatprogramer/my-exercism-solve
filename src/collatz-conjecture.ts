// Collaz Conjecture
// - start with number
// - goal is reaching the number 1
// n > 0 && not decimal (Only positive integers are allowed)
export function steps(count: number): number {
  let c: number = 0;
  let stepCount: number = 0;
  // check bad inputs and throw error handling
  if (count <= 0 || !Number.isInteger(count)) {
    throw new Error("Only positive integers are allowed");
  }

  while (true) {
    if (count === 1) {
      return 0;
    }
    // check even number
    if (isEven(count)) {
      count = count / 2;
    } else {
      count = 3 * count + 1;
    }
    if (count === 1) break;
    ++stepCount;
  }

  return stepCount;
}
function isEven(count: number): boolean {
  //true : even
  //false: odd
  return count % 2 === 0 ? true : false;
}

try {
  console.log(steps(1));
} catch (e: any) {
  console.log(e.message);
}

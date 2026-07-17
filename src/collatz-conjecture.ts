// Collaz Conjecture
// - start with number
// - goal is reaching the number 1
// n > 0 && not decimal (Only positive integers are allowed)
export function steps(count: number): number {
  let c: number = 0;
  // check bad inputs and throw error handling
  if (count <= 0 || !Number.isInteger(count)) {
    throw new Error("Only positive integers are allowed");
  }

  return 0;
}

try {
  steps(-2);
} catch (e: any) {
  console.log(e.message);
}

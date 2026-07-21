export function compute(left: string, right: string): number {
  let differences: number = 0;
  if (left.length !== right.length) {
    throw new Error("DNA strands must be of equal length.");
  }
  const len: number = left.length;
  for (let i: number = 0; i < len; i++) {
    if (left[i] !== right[i]) {
      ++differences;
    }
  }
  return differences;
}

console.log(compute("G", "T"));

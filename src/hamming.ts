export function compute(left: string, right: string): number {
  let differences: number = 0;
  if (left.length !== right.length) {
    throw new Error("DNA strands must be of equal length.");
  }
  for (const char of left) {
    console.log(char);
  }
  return 0;
}

console.log(compute("GGACTGAAATCTG", "GGACTGAAATCTG"));

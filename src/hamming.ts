export function compute(left: string, right: string): number {
  if (left.length !== right.length) {
    throw new Error("DNA strands must be of equal length.");
  }
  return 0;
}

console.log(compute("GGACTGAAATCTG", "GGACTGAAATCTG"));

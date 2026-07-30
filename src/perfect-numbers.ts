// Perfect number exercise
const ERRMSG = "Classification is only possible for natural numbers.";
export function classify(num: number): string {
  let sum: number = 0;
  if (num <= 0) {
    throw new Error(ERRMSG);
  }
  for (let i: number = 1; i <= num - 1; i++) {
    if (num % i === 0) {
      sum = sum + i;
    }
  }
  if (sum === num) {
    return "perfect";
  } else if (sum > num) {
    return "abundant";
  } else {
    return "deficient";
  }
}

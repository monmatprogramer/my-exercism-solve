// Perfect number exercise
const ERRMSG = "Classification is only possible for natural numbers.";
export function classify(num: number) {
  if (num <= 0) {
    throw new Error(ERRMSG);
  }
}

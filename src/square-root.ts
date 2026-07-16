//square root exercise
export function squareRoot(radicand: number): number {
  let left: number = 1;
  let right: number = radicand;
  let mid: number = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (mid * mid === radicand) {
      return mid;
    } else if (mid * mid > radicand) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return mid;
}

console.log(squareRoot(9));

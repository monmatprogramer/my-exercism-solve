//rantonal number
export class Rational {
  private n: number;
  private d: number;
  constructor(num: number, de: number) {
    this.n = num;
    this.d = de;
  }

  add(n2: Rational) {
    // Represent
    const a: number = this.n;
    const b: number = this.d;
    const c: number = n2.n;
    const d: number = n2.d;
    const numberator: number = a * d + c * b;
    const demominator: number = b * d;
    const result: number = numberator / demominator;
    console.log(result);
    gcd(numberator, demominator);
  }

  sub() {}

  mul() {}

  div() {}

  abs() {}

  exprational() {}

  expreal() {}

  reduce() {}
}

function gcd(numberator: number, demominator: number): number {
  //make absolute
  let a: number = Math.abs(numberator);
  let b: number = Math.abs(demominator);
  let gcdResult: number = 0;
  while (true) {
    if (b === 0) {
      gcdResult = a;
    } else {
      let remainder: number = 0;
      remainder = a % b;
      a = b;
      b = remainder;
      if (b === 0) {
        gcdResult = a;
        break;
      }
    }
  }
  return gcdResult;
}

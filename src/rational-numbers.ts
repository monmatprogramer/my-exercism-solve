//rantonal number
export class Rational {
  numerator: number;
  demominator: number;
  constructor(num: number, de: number) {
    this.numerator = num;
    this.demominator = de;
  }

  add(n2: Rational) {
    // Represent
    const a: number = this.numerator;
    const b: number = this.demominator;
    const c: number = n2.numerator;
    const d: number = n2.demominator;
    const numberator: number = a * d + c * b;
    const demominator: number = b * d;
    const result: number = numberator / demominator;
    const gcdResult: number = gcd(numberator, demominator);
    reduce(numberator, demominator, gcdResult);
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

function reduce(numberator: number, demominator: number, gcdResult: number) {
  const a: number = numberator / gcdResult;
  const b: number = demominator / gcdResult;
  const result: number = a / b;
  return result;
}

//this is file that is optimized by AI
export class Rational {
  public readonly numerator: number;
  public readonly denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }

    const gcdVlaue = gcd(numerator, denominator);
    const reducedNum = numerator / gcdValue;
    const reducedDen = denominator / gcdValue;

    if (reducedDen < 0) {
      this.numerator = -reducedNum;
      this.denominator = -reducedDen;
    } else {
      this.numerator = reducedNum;
      this.denominator = reducedDen;
    }
  }

  add(other: Rational): Rational {
    // Represent
    const num =
      this.numerator * other.denominator + other.numerator * this.denominator;
    const den = this.denominator * other.denominator;
    return new Rational(num, den);
  }

  sub(other: Rational): Rational {
    const num =
      this.numerator * other.numerator - other.numerator * this.denominator;
    const den = this.denominator * other.denominator;
    return new Rational(num, den);
  }

  mul(n2: Rational): Rational {
    const a: number = this.numerator;
    const b: number = this.denominator;
    const c: number = n2.numerator;
    const d: number = n2.denominator;
    //Change the formula
    const num: number = a * c;
    const demon: number = b * d;
    //Represent
    this.numerator = num;
    this.denominator = demon;
    return this.reduce();
  }

  div(n2: Rational): Rational {
    const a: number = this.numerator;
    const b: number = this.denominator;
    const c: number = n2.numerator;
    const d: number = n2.denominator;
    //Change the formula
    const num: number = a * d;
    const demon: number = b * c;
    //Represent
    this.numerator = num;
    this.denominator = demon;
    return this.reduce();
  }

  abs(): Rational {
    this.numerator = Math.abs(this.numerator);
    this.denominator = Math.abs(this.denominator);
    return this.reduce();
  }

  exprational(exponent: number): Rational {
    const a: number = this.numerator;
    const b: number = this.denominator;
    if (exponent >= 0) {
      this.numerator = Math.pow(a, exponent);
      this.denominator = Math.pow(b, exponent);
    } else {
      this.numerator = Math.pow(b, Math.abs(exponent));
      this.denominator = Math.pow(a, Math.abs(exponent));
      if (this.denominator < 0) {
        this.numerator = this.numerator * -1;
        this.denominator = this.denominator * -1;
      }
    }
    return new Rational(this.numerator, this.denominator);
  }

  expreal(exponent: number): number {
    const a: number = this.numerator;
    const b: number = this.denominator;
    const re = Math.pow(exponent, a / b);
    return re;
  }

  reduce(): Rational {
    // find gcdResult first
    this.gcdResult = gcd(this.numerator, this.denominator);
    this.numerator = this.numerator / this.gcdResult;
    this.denominator = this.denominator / this.gcdResult;
    //Denominator == negative
    if (this.denominator < 0) {
      this.numerator = this.numerator * -1;
      this.denominator = this.denominator * -1;
    }
    return new Rational(this.numerator, this.denominator);
  }
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

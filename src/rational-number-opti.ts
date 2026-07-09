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

    const gcdValue = gcd(numerator, denominator);
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

  mul(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator,
      this.denominator * other.denominator,
    );
  }

  div(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator,
      this.denominator * other.numerator,
    );
  }

  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(exponent: number): Rational {
    if (exponent >= 0) {
      return new Rational(
        Math.pow(this.numerator, exponent),
        Math.pow(this.denominator, exponent),
      );
    } else {
      const posExponent = Math.abs(exponent);
      return new Rational(
        Math.pow(this.denominator, posExponent),
        Math.pow(this.numerator, posExponent),
      );
    }
  }

  expreal(exponent: number): number {
    return Math.pow(exponent, this.numerator / this.denominator);
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

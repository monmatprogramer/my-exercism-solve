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
}

function gcd(a: number, b: number): number {
  let num1 = Math.abs(a);
  let num2 = Math.abs(b);

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

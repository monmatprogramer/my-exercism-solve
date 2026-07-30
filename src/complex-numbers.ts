export class ComplexNumber {
  private a: number;
  private b: number;

  constructor(real: number, imaginary: number) {
    this.a = real;
    this.b = imaginary;
  }

  public get real(): number {
    return this.a;
  }

  public get imag(): number {
    return this.b;
  }

  public add(other: ComplexNumber): ComplexNumber {
    const newReal: number = this.a + other.real;
    const newImg: number = this.b + other.imag;
    return new ComplexNumber(newReal, newImg);
  }

  public sub(other: ComplexNumber): ComplexNumber {
    const newReal: number = this.a - other.real;
    const newImg: number = this.b - other.imag;
    return new ComplexNumber(newReal, newImg);
  }

  public div(other: ComplexNumber): ComplexNumber {
    const newReal: number =
      (this.a * other.real + this.b * other.imag) /
      (Math.pow(other.real, 2) + Math.pow(other.imag, 2));

    const newImag: number =
      (this.b * other.real - this.a * other.imag) /
      (Math.pow(other.real, 2) + Math.pow(other.imag, 2));

    return new ComplexNumber(newReal, newImag);
  }

  public mul(other: ComplexNumber): ComplexNumber {
    const newReal: number = this.a * other.real - this.b * other.imag;
    const newImag: number = this.b * other.real - this.a * other.imag;
    return new ComplexNumber(newReal, newImag);
  }

  public get abs(): number {
    return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this.a, -this.b);
  }

  public get exp(): ComplexNumber {
    return new ComplexNumber(0, 0);
  }
}

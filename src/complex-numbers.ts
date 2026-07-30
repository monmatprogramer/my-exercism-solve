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
    return other;
  }

  public mul(other: ComplexNumber): ComplexNumber {
    return other;
  }

  public get abs(): number {
    return 0;
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(0, 0);
  }

  public get exp(): ComplexNumber {
    return new ComplexNumber(0, 0);
  }
}

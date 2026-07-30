export class ComplexNumber {
  private a: number;
  private b: number;

  constructor(real: number, imaginary: number) {
    this.a = real;
    this.b = imaginary;
  }

  public get real(): number {
    return 0;
  }

  public get imag(): number {
    return 0;
  }

  public add(other: ComplexNumber): ComplexNumber {
    return other;
  }

  public sub(other: ComplexNumber): ComplexNumber {
    return other;
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

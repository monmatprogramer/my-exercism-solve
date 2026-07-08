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
    const result: number = ((this.n * n2.d + n2.n * this.d) / this.d) * n2.d;
  }

  sub() {}

  mul() {}

  div() {}

  abs() {}

  exprational() {}

  expreal() {}

  reduce() {}
}

//rantonal number
export class Rational {
  private n: number;
  private d: number;
  constructor(num: number, de: number) {
    this.n = num;
    this.d = de;
  }

  add(n2: Rational) {
    calUreduceFraction(this.n, this.d, n2.n, n2.d);
  }

  sub() {}

  mul() {}

  div() {}

  abs() {}

  exprational() {}

  expreal() {}

  reduce() {}
}

// Helper function
// Calculate unreduced fraction
function calUreduceFraction(n1: number, d1: number, n2: number, d2: number) {}

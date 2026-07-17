export class Squares {
  private _sumOfSquares: number;
  private _squareOfSum: number;
  private _difference: number;
  constructor(n: number) {
    let sum: number = 0;
    // 1 to n
    for (let i: number = 1; i <= n; i++) {
      sum = (n * (n + 1)) / 2;
    }
    this._squareOfSum = Math.pow(sum, 2);
  }

  get sumOfSquares(): number {
    return 0;
  }

  get squareOfSum(): number {
    return 0;
  }

  get difference(): number {
    return 0;
  }
}

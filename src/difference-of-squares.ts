export class Squares {
  private _sumOfSquares: number;
  private _squareOfSum: number;
  private _difference: number;
  constructor(n: number) {
    let sum: number = 0;
    // 1 to n
    // find square of sum
    for (let i: number = 1; i <= n; i++) {
      sum = (n * (n + 1)) / 2;
    }
    this._squareOfSum = Math.pow(sum, 2);
    //find sum of square
    this._sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
    this._difference = this._squareOfSum - this._sumOfSquares;
  }

  get sumOfSquares(): number {
    return this._sumOfSquares;
  }

  get squareOfSum(): number {
    return this._squareOfSum;
  }

  get difference(): number {
    return this._difference;
  }
}

const squares = new Squares(5);
console.log(squares.squareOfSum);

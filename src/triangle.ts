// triangle exercise
export class Triangle {
  private sideA: number;
  private sideB: number;
  private sideC: number;

  constructor(...sides: number[]) {
    [this.sideA, this.sideB, this.sideC] = [...sides];
  }

  // all three sides the exact same length
  get isEquilateral(): boolean {
    const sides: number[] = [this.sideA, this.sideB, this.sideC];
    return sides.filter((n) => n === this.sideA).length === 3;
  }

  // at least two sides the same length
  get isIsosceles(): boolean {
    const sides: number[] = [this.sideA, this.sideB, this.sideC];
    const tempSides: number[] = sides;
    let count: number = 0;
    let i: number = 0;
    while (i < sides.length) {
      let temLen: number = 0;
      let temVal: number = tempSides.shift()!;
      temLen = tempSides.filter((n) => n === temVal).length;
    }
    return true;
  }

  // all three sides totally different length
  get isScalene(): boolean {
    return true;
  }
}

const t = new Triangle(2, 3, 2);
console.log(t.isIsosceles);

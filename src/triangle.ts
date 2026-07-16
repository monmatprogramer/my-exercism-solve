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
    if (sides.filter((n) => n === 1).length > 1) {
      return false;
    }
    while (i < sides.length) {
      let temLen: number = 0;
      let temVal: number = tempSides.shift()!;
      temLen = tempSides.filter((n) => n === temVal).length;
      if (temLen > 0) {
        ++count;
      }
      tempSides.push(temVal);
      i++;
    }
    if (count > 1) {
      return true;
    }
    return false;
  }

  // all three sides totally different length
  get isScalene(): boolean {
    return true;
  }
}

const t = new Triangle(1, 5, 2);
console.log(t.isIsosceles);

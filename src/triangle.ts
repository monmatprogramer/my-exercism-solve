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
    const tempSides: number[] = [];
    let i: number = 0;
    while (true) {
      let tem = sides.shift();
      tempSides.push(...tem);
      sides.filter((n) => n === tempSides[i]);
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

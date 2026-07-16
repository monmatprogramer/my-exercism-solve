// triangle exercise
export class Triangle {
  private sideA: number;
  private sideB: number;
  private sideC: number;

  constructor(...sides: number[]) {
    [this.sideA, this.sideB, this.sideC] = [...sides];
    console.log(this.sideA);
  }

  get isEquilateral(): boolean {
    return true;
  }

  get isIsosceles(): boolean {
    return true;
  }

  get isScalene(): boolean {
    return true;
  }
}

const t = new Triangle(2, 2, 2);

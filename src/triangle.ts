// triangle exercise
export class Triangle {
  private sides: number[];
  constructor(...sides: number[]) {
    this.sides = sides;
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

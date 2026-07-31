type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

export function triplets({}: Options): Triplet[] {
  throw new Error("Remove this line and implement the function");
}

class Triplet {
  private a: number;
  private b: number;
  private c: number;
  constructor() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
  }

  toArray(): [number, number, number] {
    throw new Error("Remove this line and implement the function");
  }
}

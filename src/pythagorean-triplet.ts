type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

export function triplets({ sum, minFactor, maxFactor }: Options): Triplet[] {
  throw new Error("Remove this line and implement the function");
}

class Triplet {
  private a: number;
  private b: number;
  private c: number;
  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray(): [number, number, number] {
    return [this.a, this.b, this.c];
  }
}

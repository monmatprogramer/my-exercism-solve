type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

export function triplets(tripletsObj: Options): Triplet[] {
  const result: Options[] = [];
  if (tripletsObj.minFactor) {
    console.log(tripletsObj.minFactor);
  }
  return [new Triplet(0, 0, 0)];
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

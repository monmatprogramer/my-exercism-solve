type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

export function triplets(tripletsObj: Options): Triplet[] {
  const result: Options[] = [];
  let a: number = 1;
  let b: number = 0;
  let topPart: number = 0;
  if (!tripletsObj.minFactor) {
    a = tripletsObj.minFactor!;
  }
  do {
    topPart = tripletsObj.sum * (tripletsObj.sum - 2) * tripletsObj.sum * a;
  } while (a < tripletsObj.sum / 3);
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

type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

export function triplets(tripletsObj: Options): Triplet[] {
  const result: Triplet[] = [];
  let a: number = 1;
  let b: number = 0;
  let c: number = 0;
  let topPart: number = 0;
  let bottomPart: number = 0;
  if (!tripletsObj.minFactor) {
    a = tripletsObj.minFactor!;
  }
  do {
    topPart = tripletsObj.sum * tripletsObj.sum - 2 * tripletsObj.sum * a;
    bottomPart = 2 * (tripletsObj.sum - a);
    b = topPart / bottomPart;
  } while (a < tripletsObj.sum / 3);
  if (Number.isInteger(a) && b > a) {
    c = tripletsObj.sum - a - b;
  }
  if (b >= tripletsObj.minFactor! || c <= tripletsObj.maxFactor!) {
    result.push(new Triplet(a, b, c));
  }
  return result;
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

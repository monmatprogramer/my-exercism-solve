type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

export function triplets({ minFactor, maxFactor, sum }: Options): Triplet[] {
  const result: Triplet[] = [];
  let a: number = 1;
  let b: number = 0;
  let c: number = 0;
  let topPart: number = 0;
  let bottomPart: number = 0;
  if (minFactor !== undefined) {
    a = minFactor!;
  }
  while (a < sum / 3) {
    topPart = sum * sum - 2 * sum * a;
    bottomPart = 2 * (sum - a);
    b = topPart / bottomPart;
    if (Number.isInteger(b) && b > a) {
      c = sum - a - b;
    }
    if (
      (minFactor === undefined || b >= minFactor) &&
      (maxFactor === undefined || c <= maxFactor)
    ) {
      result.push(new Triplet(a, b, c));
    }
    a = a + 1;
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

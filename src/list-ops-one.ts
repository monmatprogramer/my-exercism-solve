export class List {
  public static create<T>(...values: number[]): number[] {
    return [...values];
  }
}

// ---call class---

const list1 = List.create(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(list1);

export class List {
  public static create<T>(...values: number[]): number[] {
    console.log(values);
    return [];
  }
}

// ---call class---

List.create(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

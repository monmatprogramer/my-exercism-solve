export class List {
  public static create<T>(
    ...values: unknown[] | number[]
  ): unknown[] | number[] {
    return [...values];
  }
  concatenate(listOfLists: unknown[] | number[]) {
    console.log(listOfLists);
  }
}

// ---call class---

const list1 = List.create(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const list2 = List.create(20, 12, 13, 14, 15, 16, 17, 18, 19, 11);
const list3 = List.create(130, 21, 31, 41, 51, 61, 71, 81, 91, 40);
const list4 = List.create(list2, list3);

console.log(list4);

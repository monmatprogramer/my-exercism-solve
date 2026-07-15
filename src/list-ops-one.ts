export class List<T> {
  private items: T[];
  constructor(items: T[]) {
    this.items = items;
  }
  public static create<T>(...values: T[]): List<T> {
    // add
    return new List<T>(values);
  }
  public concatenate(otherList: List<List<T>>): T[] {
    const tempArray: T[] = [];
    for (const [index, value] of otherList.items.entries()) {
      for (const [jindex, jvalue] of value.items.entries()) {
        tempArray.push(jvalue);
      }
    }
    return tempArray;
  }
}

// ---call class---
let dis;
const list1 = List.create(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//const list2 = List.create(20, 12, 13, 14, 15, 16, 17, 18, 19, 11);
//const list3 = List.create(130, 21, 31, 41, 51, 61, 71, 81, 91, 40);
//const list4 = List.create(list1, list2, list3);
//list1.concatenate(list2);

const t1 = List.create(23, 32);
const t2 = List.create(34, 44);
const t3 = List.create(t1, t2);
dis = list1.concatenate(t3);
console.log(dis);

export class List<T> {
  private items: T[];
  constructor(items: T[]) {
    this.items = items;
  }
  public static create<T>(...values: T[]): List<T> {
    return new List<T>(values);
  }
  // Foreach
  forEach(callbackFun: (element: T) => void) {
    for (const [index, element] of this.items.entries()) {
      callbackFun(element);
    }
  }
  // Length of array
  length(): number {
    let count = 0;
    for (const [index, value] of this.items.entries()) {
      count = index + 1;
    }
    return count;
  }
  //append
  append(other: List<T>): List<T> {
    const combinedList: T[] = this.items;
    for (const [index, value] of other.items.entries()) {
      combinedList.push(value);
    }
    return new List<T>(combinedList);
  }
  // concatenate array
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
console.log(t1.append(t2));

export class List {
  private items: unknown[];
  constructor(...items: unknown[]) {
    this.items = [...items];
  }
  public static create(...values: unknown[]): unknown {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.
    return values;
  }
  // foreach methods
  // function singature:fun_name: (param_name: param_dataType) => fun_type
  forEach(callbackFunction: (param: unknown) => void) {
    //built-in variable.forEach(() =>logic_here)
    for (const [index, item] of this.items.entries()) {
      callbackFunction(item);
    }
  }
  // use arrow key
  length = (): number => {
    let count: number = 0;
    for (const [index, item] of this.items.entries()) {
      count = index + 1;
    }
    return count;
  };
  append = (other: List): unknown => {
    const combinedItems: unknown[] = [...this.items];
    combinedItems.push(...other.items);
    return List.create(...combinedItems);
  };
  //filter
  filter = (conditionFunction: (val: unknown) => boolean): unknown => {
    const result: unknown[] = [];
    for (const [index, value] of this.items.entries()) {
      if (typeof value === "number") {
        if (conditionFunction(value)) {
          result.push(value);
        }
      }
    }
    return List.create(...result);
  };
  //Map()
  map = (changeFunction: (val: number) => number): unknown => {
    const result: unknown[] = [];
    for (const [index, value] of this.items.entries()) {
      if (typeof value === "number") {
        result.push(changeFunction(value));
      }
    }
    return List.create(...result);
  };
  foldl = (
    callbackFunc: (val: number, element: number) => number,
    initalValue: number,
  ): unknown => {
    let accumulator = initalValue;
    for (const [index, value] of this.items.entries()) {
      if (value === "number") {
        callbackFunc(value);
      }
    }
    return accumulator;
  };
}

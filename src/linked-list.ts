// solving linked list problem

export class LinkedList<T> {
  private data: T[] = [];

  public push(element: T): void {
    this.data.push(element);
  }

  //If the data is empty => undefined
  //If the data is not empty => data
  public pop(): T | undefined {
    return this.data.pop();
  }

  public shift(): T | undefined {
    return this.data.shift();
  }

  public unshift(element: T): void {
    this.data.unshift(element);
  }

  public delete(element: T): void {
    const index = this.data.indexOf(element);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

  public count(): number {
    return this.data.length;
  }
}

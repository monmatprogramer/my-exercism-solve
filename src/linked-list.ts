// solving linked list problem
import { Node } from "./train-node";
export class LinkedList<T> {
  private data: T[] = [];
  private head: T | null = null;
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
    //3. create a new Node using the element
    const node = new Node<T>(element);
    console.log(node);
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

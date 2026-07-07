// solving linked list problem
import { Node } from "./train-node";
export class LinkedList<T> {
  private data: Node<T>[] = [];
  private head: Node<T> | null = null;
  public push(element: T): void {
    this.data.push(element);
  }

  //If the data is empty => undefined
  //If the data is not empty => data
  public pop(): T | undefined {
    //return this.data.pop();
    return undefined;
  }

  public shift(): T | undefined {
    //return this.data.shift();
    //return [];
    return undefined;
  }

  public unshift(element: T): void {
    //3. create a new Node using the element
    const node = new Node<T>(element);
    //4 Make the new Node's next point to the current 'head'
    this.head = node;
    this.data.unshift(this.head.value);
    //[10]
    //[20,10]
    if (this.data.lenght > 1) {
      //head.value = 20
    }
  }

  public delete(element: T): void {
    //const index = this.data.indexOf(element);
    // if (index > -1) {
    // this.data.splice(index, 1);
    //}
  }

  public count(): number {
    return 0;
  }
}

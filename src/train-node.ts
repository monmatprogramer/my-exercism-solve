//Solving challenge in Gemini about train
// Challenge 1
export class Node<T> {
  // 1. Create a public property called 'value' of type T
  public value: T;
  // 2. Create a public property called 'next' that can be a Node<T> OR null
  public next: T | null;

  constructor(value: T) {
    // 3. Set the initial value
    this.value = value;
    // 4. Set next to null by default
    this.next = null;
  }
}

// for check next value with consuming
export class PeekableIterator<T> {
  private iterator: Iterator<T>;
  private nextVal: IteratorResult<T> | null = null;

  constructor(iterable: Iterable<T>) {
    console.log(iterable[Symbol.iterator]);
    this.iterator = iterable[Symbol.iterator]();
    console.log(this.iterator);
  }
}

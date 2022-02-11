export class LinkedListNode<T> {
  public next: LinkedListNode<T> | null;
  public previous: LinkedListNode<T> | null;
  constructor(public val: T) {
    this.next = null;
    this.previous = null;
  }
}
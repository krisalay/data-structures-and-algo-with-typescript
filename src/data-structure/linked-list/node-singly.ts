export class SinglyNode<T> {
  public next: SinglyNode<T> | null;
  constructor(public val: T) {
    this.next = null;
  }
}
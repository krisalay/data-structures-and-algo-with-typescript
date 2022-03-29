import { SinglyNode } from "./node-singly";

interface List<T> {
  head: SinglyNode<T> | null;
  tail: SinglyNode<T> | null;
  length: number;
}

export class SinglyLinkedList<T> {
  private list: List<T> | undefined;
  constructor() {
    this.list = undefined;
  }

  get length(): number {
    if (this.list) {
      return this.list.length;
    }
    return 0;
  }

  get isEmpty(): boolean {
    return !this.list;
  }

  private initializeList(node: SinglyNode<T>): void {
    this.list = {
      head: node,
      tail: node,
      length: 1
    };
  }

  public insertAtHead(val: T): void {
    const newNode = new SinglyNode<T>(val)
    if (!this.list) {
      this.initializeList(newNode);
    } else {
      newNode.next = this.list.head;
      this.list.head = newNode;
      this.list.length += 1;
    }
  }

  public insertAtTail(val: T): void {
    const newNode = new SinglyNode<T>(val);
    if (!this.list) {
      this.initializeList(newNode);
    } else {
      this.list.tail!.next = newNode;
      this.list.tail = newNode;
      this.list.length += 1;
    }
  }

  public deleteDuplicates(): void {
    if (!this.list) {
      throw new Error("Cannot perform delete operation");
    }

    let current = this.list.head;
    let previous: SinglyNode<T> | null = null;
    const hashMap = new Map<T, boolean>();
    while(current) {
      if (!hashMap.has(current.val)) {
        hashMap.set(current.val, true);
        previous = current;
      } else {
        previous!.next = current.next;
      }
      current = current.next;
    }
  }

  public printValues(): void {
    if (!this.list) {
      console.log(null);
    } else {
      let current = this.list.head;
      while(current) {
        console.log(current.val);
        current = current.next;
      }
    }
  }
}

const list = new SinglyLinkedList<string>();
list.insertAtTail("A");
list.insertAtTail("B");
list.insertAtTail("C");
list.insertAtTail("A");
list.insertAtTail("B");
list.insertAtTail("B");
list.insertAtTail("D");

list.printValues();
list.deleteDuplicates();
console.log("RESULT===============");
list.printValues();
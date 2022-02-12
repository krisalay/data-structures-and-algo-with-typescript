import { LinkedList } from "../linked-list";

export class Stack<T> implements Iterable<T> {
  private list: LinkedList<T>;
  constructor() {
    this.list = new LinkedList();
  }

  /**
   * ============================================================================
   *                                   GETTERS
   * ============================================================================
   */

  /**
   * Return length of the list
   * Complexity: O(1)
   * @returns {number}
   */
  get length(): number {
    return this.list.length;
  }

  /**
   * Checks if the stack is empty.
   * True - Stack if empty
   * False - Stack if not empty
   * Complexity: O(1)
   * @returns {boolean}
   */
  get isEmpty(): boolean {
    return this.list.isEmpty;
  }

  /**
   * ============================================================================
   *                              OPERATION: INSERTION
   * ============================================================================
   */

  /**
   * Pushes a new item to the top of stack
   * Complexity: O(1)
   * @param {T} val - value that has to be added to top of stack
   * @returns {void}
   */
  public push(val: T): void {
    this.list.insertAtTail(val);
  }

  /**
   * ============================================================================
   *                              OPERATION: FETCHING
   * ============================================================================
   */

  /**
   * Gets the value at top of stack
   * Complexity - O(1)
   * @returns {T} - value at top of stack
   */
  public peek(): T | null {
    return this.list.peekTail();
  }

  /**
   * ============================================================================
   *                              OPERATION: FIND
   * ============================================================================
   */

  /**
   * Returns true if value is found in the stack, else false
   * @param val - value that has to be searched
   * @returns {boolean}
   */
  public contains(val: T): boolean {
    return this.list.contains(val);
  }

  /**
   * ============================================================================
   *                              OPERATION: REMOVE
   * ============================================================================
   */

  /**
   * Removes a data from top of stack
   * Complexity - O(1)
   * @returns {T} - value of popped element
   */
  public pop(): T | null {
    return this.list.removeTail();
  }

  /**
   * Clears the stack
   * Complexity - O(1)
   */
  public clear(): void {
    this.list.clear();
  }

  *[Symbol.iterator](): Iterator<T> {
    return this.list[Symbol.iterator]();
  }
}
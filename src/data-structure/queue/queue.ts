import { LinkedList } from "../linked-list";

export class Queue<T> implements Iterable<T> {
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
   * Return length of the queue
   * Complexity: O(1)
   * @returns {number}
   */
  get length(): number {
    return this.list.length;
  }

  /**
   * Checks if the queue is empty.
   * True - Queue if empty
   * False - Queue if not empty
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
   * Adds element into the back of the queue
   * Complexity: O(1)
   * @param {T} val - value that has to be added to back of queue
   * @returns {void}
   */
  public enqueue(val: T): void {
    this.list.insertAtTail(val);
  }

  /**
   * ============================================================================
   *                              OPERATION: FETCHING
   * ============================================================================
   */

  /**
   * Gets the value at front of queue
   * Complexity - O(1)
   * @returns {T} - value at front of queue
   */
  public peekFront(): T | null {
    return this.list.peekHead();
  }

  /**
   * Gets the value at back of queue
   * Complexity - O(1)
   * @returns {T} - value at back of queue
   */
  public peekBack(): T | null {
    return this.list.peekTail();
  }

  /**
   * ============================================================================
   *                              OPERATION: FIND
   * ============================================================================
   */

  /**
   * Returns true if value is found in the queue, else false
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
   * Removes a data from front of the queue
   * Complexity - O(1)
   * @returns {T} - value of removed element
   */
  public dequeue(): T | null {
    return this.list.removeHead();
  }

  /**
   * Clears the queue
   * Complexity - O(1)
   */
  public clear(): void {
    this.list.clear();
  }

  *[Symbol.iterator](): Iterator<T> {
    return this.list[Symbol.iterator]();
  }
}
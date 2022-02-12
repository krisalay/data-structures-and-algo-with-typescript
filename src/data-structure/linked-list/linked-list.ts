import { LinkedListNode } from "./linked-list.node";

interface List<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  length: number;
}

export class LinkedList<T> implements Iterable<T> {
  private list: List<T> | undefined;
  constructor() {
    this.list = undefined;
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
    if (this.list) return this.list.length;
    return 0;
  }

  /**
   * Checks if the linked list is empty.
   * True - Linked List if empty
   * False - Linked List if not empty
   * Complexity: O(1)
   * @returns {boolean}
   */
  get isEmpty(): boolean {
    return !this.list;
  }

  /**
   * ============================================================================
   *                              OPERATION: INSERTION
   * ============================================================================
   */

  /**
   * Adds a new node to the head of the linkedlist
   * Complexity: O(1)
   * @param {T} val - value that has to be added to start of the list 
   * @returns {void}
   */
  public insertAtHead(val: T): void {
    const node = new LinkedListNode(val);

    if (this.list) {
      /**
       * Connect the existing head backward to the new linked list node
       * [Node] <------- [Existing Head]
       */
      this.list.head.previous = node;
      
      /**
       * Connect a new linked list node forward to the existing head
       * [Node] -------> [Existing Head]
       */
      node.next = this.list.head;

      // Update new node as head of the linkedlist
      this.list.head = node;
      // Increment the length of linkedlist by 1
      this.list.length += 1;
    } else {
      /**
       * If linkedlist is not defined then assign the new node as the head, tail
       * and the length of the list will be 1
       */
      this.list = {
        head: node,
        tail: node,
        length: 1
      };
    }
  }

  /**
   * Adds a new node to the tail of the linkedlist
   * Complexity: O(1)
   * @param {T} val - value that has to be added to end of the list
   * @returns {void}
   */
  public insertAtTail(val: T): void {
    const node = new LinkedListNode(val);

    if (this.list) {
      /**
       * Connect an existing tail forward to the new linkedlist node
       * [Existing Tail] ----------> [Node]
       */
      this.list.tail.next = node;
      
      /**
       * Connect the new linkedlist node backward to existing tail node
       * [Existing Tail] <---------- [Node]
       */
      node.previous = this.list.tail;
      
      // Update new node as tail of the linkedlist
      this.list.tail = node;
      // Increment length of linkedlist by 1
      this.list.length += 1;
    } else {
      /**
       * If linkedlist is not defined then assign the new node as the head, tail
       * and the length of the list will be 1
       */
      this.list = {
        head: node,
        tail: node,
        length: 1
      }
    }
  }

  /**
   * Adds a new node to the specified index position
   * Complexity: O(n)
   * @param {number} index - indicated the position where new value has to be inserted
   * @param val - indicates the value that has to be added in the list
   * @returns {void}
   */
  public insertAtIndex(index: number, val: T): void {
    /**
     * Error Condition
     * The insertion operation will throw a error if:
     * - List does not exist
     * - Position specified is negative integer
     * - Position specified is more than the length of the list
     */
    if (index < 0 || index > this.length || !this.list) {
      throw new Error("Index Out of Reach: Cannot insert a value at the specified position");
    }

    // Insert at head if position is 0
    if (index === 0) {
      return this.insertAtHead(val);
    }
    
    // Insert at tail if position is more than actual list's length
    if (index === this.length) {
      return this.insertAtTail(val);
    }

    // Iterate over to reach the position (starting from head of the node) where new node has to be inserted
    let currentNode = this.list.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next!;
    }

    const node = new LinkedListNode(val);

    // Link next node to the new node
    currentNode.next!.previous = node;
    node.next = currentNode.next;

    // Link current node to the new node
    currentNode.next = node;
    node.previous = currentNode;

    // Increment length of linkedlist by 1
    this.list.length += 1;
  }

  /**
   * ============================================================================
   *                              OPERATION: FETCHING
   * ============================================================================
   */

  /**
   * Gets the value at head node
   * Complexity - O(1)
   * @returns {T} - value at head node
   */
  public peekHead(): T | null {
    if (!this.list) return null;
    return this.list.head.val;
  }

  /**
   * Gets the value at tail node
   * Complexity - O(1)
   * @returns {T} - value at tail node
   */
  public peekTail(): T | null {
    if (!this.list) return null;
    return this.list.tail.val;
  }

  /**
   * Gets the value of node at the specified position
   * @param index {number} - indicates the position from where value has to be fetched
   * @returns {T} - value at specifed position of linkedlist
   */
  public peekAt(index: number): T | null {
    /**
     * Error Condition
     * The peek operation will throw a error if:
     * - List does not exist
     * - Position specified is negative integer
     * - Position specified is more than or equal to the length of the list
     */
    if (index < 0 || index >= this.length || !this.list) {
      return null;
    }

    // Iterate over to reach the position (starting from head of the node) for which the value has to be returned
    let currentNode = this.list.head;
    for (let i = 0; i <= index; i++) {
      currentNode = currentNode.next!;
    }

    // Returns the value of the node
    return currentNode.val;
  }

  /**
   * ============================================================================
   *                              OPERATION: FIND
   * ============================================================================
   */

  /**
   * Returns the index of first occurence of the specified item in the linkedlist
   * Complexity - O(n)
   * @param val - value that has to be searched
   * @returns {number} - index of the first occurence of the item in the linkedlist.
   * if item cannot be found in the list then -1 is returned
   */
  public indexOf(val: T): number {
    // If list does not exist, return -1 as index value
    if (!this.list) return -1;

    let currentNode = this.list.head;
    let index = 0;

    // Iterate over the list to find the value. If value is not found, return -1
    while(currentNode.val !== val) {
      // If iterator reaches to the end of list and value is not found, return -1
      if (!currentNode.next) return -1;
      currentNode = currentNode.next;
      
      // Increment index value by 1
      index += 1;
    }
    return index;
  }

  /**
   * Returns true if value is found in the list, else false
   * @param val - value that has to be searched
   * @returns {boolean}
   */
  public contains(val: T): boolean {
    return this.indexOf(val) !== -1;
  }

  /**
   * ============================================================================
   *                              OPERATION: REMOVE
   * ============================================================================
   */

  /**
   * Removes head node from linkedlist
   * Complexity - O(1)
   * @returns {T} - value of removed node
   */
  public removeHead(): T | null {
    if (!this.list) return null;

    // Value of head node value
    const val = this.list.head.val;

    if (this.list.head.next) {
      // Set the next node's previous pointer to null
      this.list.head.next.previous = null;

      // Move the head pointer forward
      this.list.head = this.list.head.next;
      
      // Reduce the length of linkedlist by 1 
      this.list.length -= 1;
    } else {
      // Clear the list if only one node exist in the linkedlist
      this.list = undefined;
    }
    return val;
  }

  /**
   * Removes tail node from linkedlist
   * Complexity - O(1)
   * @returns {T} - value of removed node
   */
  public removeTail(): T | null {
    if (!this.list) return null;

    // Value of tail node value
    const val = this.list.tail.val;
    if (this.list.tail.previous) {
      // Set the previous node's next pointer to null
      this.list.tail.previous.next = null;

      // Move the tail pointer backward
      this.list.tail = this.list.tail.previous;

      // Reduce the length of linkedlist by 1 
      this.list.length -= 1;
    } else {
      // Clear the list if only one node exist in the linkedlist
      this.list = undefined;
    }
    return val;
  }

  /**
   * Removes node at specified index
   * Complexity - O(n)
   * @param index - index of node to be removed from linkedlist
   * @returns {T} - value of removed node
   */
  public removeAt(index: number): T | null {
    // Remove node at head of the linkedlist
    if (index === 0) {
      return this.removeHead();
    }

    // Remove node at tail of the linkedlist
    if (index === this.length - 1) {
      return this.removeTail();
    }

    if (!this.list || index < 0 || index >= this.list.length) return null;
    
    let iteration = 0;
    let currentNode = this.list.head;

    // Traverse to the position where node has to be removed
    while (iteration < index) {
      currentNode = currentNode.next!;
      iteration += 1;
    }

    // Remove the node at the specified position
    currentNode.previous!.next = currentNode.next;
    currentNode.next!.previous = currentNode.previous;

    // Reduce the length of the linkedlist by 1
    this.list.length -= 1;
    return currentNode.val;
  }

  /**
   * Remove first occurence of node with specified value.
   * Complexity - O(n)
   * @param {T} val - value which has to be removed from the linkedlist
   * @returns {T} - value of removed node
   */
  public remove(val: T): T | null {
    const index = this.indexOf(val);
    if (index === -1) return null;
    return this.removeAt(index);
  }

  /**
   * Remove all nodes from the linkedlist
   * Complexity - O(1)
   */
  public clear(): void {
    this.list = undefined;
  }

  /**
   * ============================================================================
   *                              OPERATION: HELPERS
   * ============================================================================
   */

  /**
   * Appends values from an array to list
   * Complexity - O(k) [k denotes the length of array]
   * @param {T[]} array - Array of values to be appended to the linkedlist
   * @returns {LinkedList<T>} - Linkedlist 
   */
  public appendFromArray(array: T[]): LinkedList<T> {
    array.forEach((item) => {
      this.insertAtTail(item);
    });
    return this;
  }

  *[Symbol.iterator](): Iterator<T> {
    if (!this.list) return;

    let currentNode: LinkedListNode<T> | null;

    for(currentNode = this.list.head; currentNode != null; currentNode = currentNode.next) {
      yield currentNode.val;
    }
  }
}
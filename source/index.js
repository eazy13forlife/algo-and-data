import Node from "./Udemy/data_structures/nodeClassDoubly.js";

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    const initialTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const previousTail = initialTail.previous;
      previousTail.next = null;
    }
    initialTail.previous = null;
    this.length--;
    return initialTail;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    const initialHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    this.length--;
    initialHead.next = null;
    return initialHead;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const initialHead = this.head;
      this.head = newNode;
      this.head.next = initialHead;
      initialHead.previous = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    const middleIndex = Math.floor((this.length - 1) / 2);
    let specificItem;
    if (index < middleIndex) {
      specificItem = this.head;
      for (let i = 1; i <= index; i++) {
        specificItem = specificItem.next;
      }
    } else {
      specificItem = this.tail;
      for (let i = array.length - 1; i >= index; i--) {
        specificItem = specificItem.previous;
      }
    }
    return specificItem;
  }
}

const list = new DLL();
list.push(8);
list.push(9);
list.push(11);
list.unshift("pizza");

console.log(list);

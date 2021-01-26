import Node from "./nodeClassDoubly.js";

/*
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous=null;
  }
}
*/

class doublyLinkedList {
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
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    this.length--;
    currentTail.previous = null;
    return currentTail;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    this.length--;
    currentHead.next = null;
    return currentHead;
  }
  unshift;
}
const list = new doublyLinkedList();
list.push(3);
list.push(5);
list.push(7);
list.push(8);
console.log(list.shift());
console.log(list);

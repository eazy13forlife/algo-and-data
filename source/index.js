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

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let specificNode;
    const middleIndex = Math.floor((this.length - 1) / 2);
    if (index <= middleIndex) {
      specificNode = this.head;
      for (let i = 1; i <= index; i++) {
        specificNode = specificNode.next;
      }
    } else {
      specificNode = this.tail;
      for (let i = this.length - 2; i >= index; i--) {
        specificNode = specificNode.previous;
      }
    }
    return specificNode;
  }

  set(index, value) {
    specificNode = this.get(index);
    if (specificNode) {
      specificNode.value = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return undefined;
    } else if (index === 0) {
      this.unshift(value);
      return true;
    } else if (index === this.length) {
      this.push(value);
      return true;
    } else {
      const newNode = new Node(value);
      const nodeBefore = this.get(index - 1);
      const nodeAfter = this.get(index + 1);
      nodeBefore.next = newNode;
      newNode.previous = nodeBefore;
      newNode.next = nodeAfter;
      nodeAfter.previous = newNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      this.shift();
      return true;
    } else if (index >= this.length) {
      this.pop();
      return true;
    } else {
      const currentItem = this.get(index);
      const nodeBefore = this.get(index);
      const nodeAfter = this.get(index);
      nodeBefore.next = nodeAfter;
      nodeAfter.previous = nodeBefore;
      this.length--;
      currentItem.next = null;
      currentItem.previous = null;
      return currentItem;
    }
  }
  reverse() {
    let currentHead = this.head;
    this.head = this.tail;
    this.tail = currentHead;
    let previous = null;
    let currentNext;
    for (let i = 0; i < this.length; i++) {
      currentNext = currentHead.next;
      currentHead.next = previous;
      currentHead.previous = newNext;
      let previous = currentHead;
      currentHead = currentNext;
    }
  }
}
const list = new doublyLinkedList();
list.push(3);
list.push(5);
list.push(7);
list.push(8);
console.log(list.reverse());

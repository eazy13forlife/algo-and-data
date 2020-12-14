import { Node } from "./nodeClassDoubly.js";
/**
class Node {
  constructor(value) {
    this.next = null;
    this.previous = null;
  }
}
* */

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const first = new Node(12);
first.next = new Node(13);
console.log(first);

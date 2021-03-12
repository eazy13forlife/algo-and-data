import { Node } from "./nodeClass.js";
// class Node {
// constructor(value) {
// this.value = value;
// this.next = null;
// }
// }

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return undefined;
    }

    const currentFirst = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    return currentFirst;
  }
}

const first = new Stack();
console.log(first.push("mike"));
console.log(first.push("susan"));
console.log(first.push("trey"));
console.log(first.pop());
console.log(first.pop());
console.log(first.pop());
console.log(first.pop());
console.log(first);

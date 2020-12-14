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
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    // store the value of the initial tail
    const initialTail = this.tail;
    // if the length of our list is 1, just set both head and tail to null. Because otherwise, we can't continue with our else code, since there is no previous property to a 1 item list
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      // if there is more than one item. make the new tail equal to the previous property of the initial tail. and then set that new tails next property equal to null,meaning nothing is after it.
    } else {
      this.tail = initialTail.previous;
      this.tail.next = null;
    }
    // set the initialTails previous property to null,so we cut off any previous node attachments it has when we return the initialTail
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
      this.head = initialHead.next;
      this.head.previous = null;
    }
    initialHead.next = null;
    this.length--;
    return initialHead;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set the previous property on our current this.head to be a reference to the new node that we created;
      this.head.previous = newNode;
      // now set the next property on this new node we created to be our current this.head
      newNode.next = this.head;
      // now all we have to do is make our new this.head equal to the reference to the newNode that we created.
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    const middleIndex = Math.floor(this.length - 1 / 2);
    let specificIndex = null;
    if (index <= middleIndex) {
      specificIndex = this.head;
      for (let i = 1; i <= index; i++) {
        specificIndex = specificIndex.next;
      }
    } else {
      specificIndex = this.tail;
      for (let i = this.length - 2; i >= index; i--) {
        specificIndex = specificIndex.previous;
      }
    }
    return specificIndex;
  }
}

const first = new DoublyLinkedList();
first.push("mike");
first.push("lol");
first.push("jose");
first.push("samuel");
first.push("jackie");
first.push("sicy");
console.log(first.get(5));
console.log(first);

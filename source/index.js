import Node from "./Udemy/data_structures/nodeClass.js";

class SLL {
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
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    // if there is no head(meaning nothing in our list) and we're trying to pop something,return undefined
    if (!this.head) {
      return undefined;
    }
    //so what we want to do is iterate through our list until we get to the second to last node, so that we can make the node after it equal null and make the second to last node the new tail.
    // create a variable called currentNode, which is equal to a reference to the this.head object, that we will end up returning later
    let currentNode = this.head;
    // let newTail initially equal where currentNode is
    let newTail = currentNode;
    while (currentNode.next) {
      // newTail is equal to where currentNode is
      newTail = currentNode;
      // currentNode is equal to something completely different
      currentNode = currentNode.next;
    }
    // the new this.tail is going to be newTail
    this.tail = newTail;
    // the next property on the new this.tail will be set to null
    this.tail.next = null;
    // decrement the length by 1;
    this.length--;
    // if the length is 1 whem we run this pop function, we still create a variable called currentNode(which we will return) which is equal to this.head,and we still end up setting this.tail equal to a reference to this.head and set this.head next property to null, so now any reference to this.head has a next property of null  and then we decrement the length so its 0. We however want this.head and this.tail to equal null, since the length is 0.
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    const initialHead = this.head;
    this.head = this.head.next;
    if (this.length === 1) {
      this.tail = null;
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
      const originalHead = this.head;
      this.head = newNode;
      this.head.next = originalHead;
    }
    this.length++;
  }

  get(index) {
    if (!this.head) {
      return undefined;
    }
    let specificItem = this.head;
    for (let i = 1; i <= index; i++) {
      specificItem = specificItem.next;
    }
    return specificItem;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    const newNode = new Node(value);
    const nodeBefore = this.get(index - 1);
    const initialNode = this.get(index);
    nodeBefore.next = newNode;
    // if i just set newNode.next equal to this.get(index),without storing it first in nodeAfter, newNode.next will always equal a reference to the newNode that we created. and we set a next property on that reference equal to this. get so it will keep referring to itself.
    newNode.next = initialNode;
    this.length++;
    return true;
  }
}
const list = new SLL();
list.push(5);
list.push(9);
list.push(13);
list.push(18);
list.insert(3, "pill");

console.log(list);

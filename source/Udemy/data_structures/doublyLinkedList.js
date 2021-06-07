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
    // if nothing is in our list, so the head doesn't even exist, set the head and tail both to be the newNode.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // but if something exists, then we want this.tail.next to be the new newNode we create. so what this means is since this.head and this.tail both equal the same newNode object in reference if theere is nothing in our list, if there is one item in our list, then this.tail.next means firstly that this.head and this.tail both equal  the same newNode object in reference. so we get this object in reference and set its next property to be the new newNode we created.So, now both this.head and this.tail have the same next property and equal the exact same thing. But, we don't want this.tail to have a next property and equal the same thing as this.head. this.tail should just equal the new newNode that we created, so we set this.tail to a completely new object in reference by doing this.tail=newNode. Also, since we are working with a doubly linked list, when we do this.tail.next=newNode, we have to make sure to set the previous value on the new newNode to be what came before, and this is going to be this.tail, because if there is more than one item in our list, since this.tail equals the very last newNode that we added to out list(meanwhile, this.head equals the very first newNode that we added to our list), its next property when our else clause runs will be the new newNode that we created, so we want this new newNode that we created to have a previous of the last newNode created in our list which is this.tail.
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
      // set the new this.head equal to the next property of the initial head, or we can just do this.head=this.head.next;
      this.head = initialHead.next;
      // since we are dealing with doubly linked lists, we have to remember to makethe previous property of our new head null. It has no prior connection anymore, since it is the head of our list.
      this.head.previous = null;
    }
    // we make the next property of our initialHead null in order to cut off any connections that it once had.
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
      // set the next property of our newNode that we created to the current this.head, so that afterwards, we can make this.head just equal this newNode that we created.By doing this, newNode will be the first item in our list and everything will come afyer. Also, since we are working with doubly linked lists, we have to make sure to set the previous property of this.head to this newNode that we created, since that is what now comes before this.head.
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    //since we are working with a double linked list and we are trying to find the node at a specificIndex, we can start from either the head or either the tail in order to get to the index, just depends on which one would lead to getting to the index quicker. So, to do this we find the middleIndex in our list and if index we are looking for is less than middleIndex, we will start from the head and work our way to the index we want. Otherwise, we will start from the tail and work our way down to the index we want.
    const middleIndex = Math.floor(this.length - 1 / 2);
    let specificNode = null;
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
    //since this.get  gives us the specificNode we want and also looks at any edge cases, we can just call it again here.
    const specificNode = this.get(index);
    if (specificNode) {
      specificNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return undefined;
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
    newNode.previous = nodeBefore;
    newNode.next = initialNode;
    initialNode.previous = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      this.shift();
    }
    if (index === this.length - 1) {
      this.pop();
    }
    const initialNode = this.get(index);
    const nodeBefore = this.get(index - 1);
    const nodeAfter = this.get(index + 1);
    nodeBefore.next = nodeAfter;
    nodeAfter.previous = nodeBefore;
    initialNode.next = null;
    initialNode.previous = null;
    this.length--;
    return initialNode;
  }

  reverse() {
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = this.tail;
    this.tail = currentHead;
    let previousNext = null;
    for (let i = 1; i <= this.length; i++) {
      const newNext = currentHead.next;
      // so currentHead.next points to what came directly before it,when we're reversing a list. Initially, it points to null.
      currentHead.next = previousNext;
      // currentHead.previous points to what came directly after it, when we're reversing a list..
      currentHead.previous = newNext;
      previousNext = currentHead;
      currentHead = newNext;
    }
    return this;
  }
}

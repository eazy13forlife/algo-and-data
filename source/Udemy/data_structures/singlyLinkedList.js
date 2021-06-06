import { node } from "./nodeClass.js";
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    console.log("mike");
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // so this.head and this.tail equal the same newNode object in reference from when the list is empty and we pushed in one item. When we push in a second item, we want to set this.tail.next to our new newNode. So since this.head and this.tail equal the same newNode object in reference, modifying the next property on one will modify the next property on another. So, both this.head and this.tail will have their next property equal this new newNode. But, now we dont want our this.tail to equal the old newNode and  have a next property equal to this new newNode.Since it is the last item in our list, it should just equal the new newNode, so we set its entire object equal to newNode, and since we are changing the object as a whole, it is given a whole new reference in memory.
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
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

  /*
  pop() {
    //if nothing in head aka our list is empty, return undefined,
    if (!this.head) {
      return undefined;
    }

    // otherwise, let our currentNode equal this.head. Now, we will run  a loop up until the second to last node in our last, so that we can make the actual last node after it null and set our tail equal to this second to last node. i starts from 1 because before our for loop runs, we making currentNode equal to this.head so it is essentially the  0 index. When i is 1 the new currentNode will be this.head.next which will give us the first index in our list (even though linked lists don't have indices, i am treating them as they do because i am used to for loops working with indices). In the edge case that there is 1 item in our list,our for loop will begin with  i=1 and i<=-1, so our for loop wont run. Instead, we just want to return the currentNode and set this.head and this.tail equal to null along with decrementing length. If length is 2 ,our for loop will begin with  i=1 and i<=0 so our for loop won't run either. But our code after the for loop will still run correctly
    let currentNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return currentNode;
    }

    for (let i = 1; i <= this.length - 2; i++) {
      currentNode = currentNode.next;
    }

    const lastNode = currentNode.next;
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
    return lastNode;
  }
  */

  shift() {
    if (!this.head) {
      return undefined;
    }
    const originalHead = this.head;
    this.head = this.head.next;
    this.length--;
    // if there is 1 item in our list and we shift, we still create originalHead to store the current this.head that we will end up returning. And then this.head now equals the next property of the current this.head(which has a next property of null,which is good. and then we decrement by 1 so length is 0. Everything is good, but in or constructor function, this.tail equals what this.head initially equaled, so we have to make sure once we decrement the length and its now 0, we set this.tail to null as well.)
    if (this.length === 0) {
      this.tail = null;
    }
    //we want to sever any ties the originalHead had, so we set its next equal to null
    originalHead.next = null;
    return originalHead;
  }

  unshift(value) {
    const newNode = new Node(value);
    //if our head doesnt exist, just make this.head and this.tail equal to this newNode that we just created
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // but, if this.head does exist, store the current this.head into the variable originalHead so we have it saved, so that after we make this.head equal this newNode that we created, we can make its next value equal what this.head used to be.
      const originalHead = this.head;
      this.head = newNode;
      this.head.next = originalHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    // let the specificNode that we want initially equal this.head, which is essentially the 0 index in our list. Our for loop will begin with i=1, at which point the specificNode is the original specificNode(which has an index of 0).next (which will be the first index in our list and what we ultimately want). And i will continue up to the index that we specified.
    let specificNode = this.head;
    for (let i = 1; i <= index; i++) {
      specificNode = specificNode.next;
    }
    return specificNode;
  }

  set(index, value) {
    // since this.get(index) gets us the node we are looking for or return undefined if the index is out of bounds, we can just call it from the getgo. if specificNode is truthy, we can change its value to the one that we want and return true meaning it was successfull, otherwise we return false;
    const specificNode = this.get(index);
    if (specificNode) {
      specificNode.value = value;
      return true;
    }
    return "Item not found";
  }

  insert(index, value) {
    //insert is like splice where we start the index before the number, as opposed to at the number. so we can insert before the beginning of a list and after the end of a list. So, if we have [4,5,3,8,9] and we want to insert 6 at the 0 index, 0 index starts before 4, so we get [6,4,5,3,8,9]. And if we want to insert 12 in our original array at the fifth index, 12 comes after 9 so we get [4,5,3,8,9,12].
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
    // we dont have to worry about this.get(index) resulting in undefined because any undefined would have been caught above and returned something already.

    //so, we want to store the node before the index we want to insert in the variable nodeBefore, so that we can set its next value equal to this newNode, so that will put newNode in the correct index. And we store the node at the index we want to insert initially in the variable initialNode,  so we can set newNodes next property equal to this initialNode.

    const nodeBefore = this.get(index - 1);
    const initialNode = this.get(index);
    nodeBefore.next = newNode;
    // if i just set newNode.next equal to this.get(index),without storing it first in initialNode, newNode.next will always equal a reference to the newNode that we created. and we set a next property on that reference equal to this. get so it will keep referring to itself.
    newNode.next = initialNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    if (index === 0) {
      this.shift();
      return true;
    }
    const initialNode = this.get(index);
    const nodeAfter = this.get(index + 1);
    const nodeBefore = this.get(index - 1);
    nodeBefore.next = nodeAfter;
    this.length--;
    // we want to sever ties of anything that followed this initialNode that we are removing
    initialNode.next = null;
    return initialNode;
  }
  // 13,27,32,71<---for the example

  reverse() {
    let initialHead = this.head;
    this.head = this.tail;
    this.tail = initialHead;
    let previousNext = null;
    //we are just doing this for loop for every item in our list, so we can do let i=1;i<=this.length:i++
    for (let i = 0; i < this.length; i++) {
      // save what initially comes next in our list after  initialHead,so we can use it later. in our case (27,32,71). Since the next property is an object, we are storing a reference to this object
      const newNext = initialHead.next;
      // now we get the previousNext, which initially is null, because there is no number before 27. and make that the new next property of our initialHead(so we are redefining this next property,so it will be stored in a new address). so now we get (13,null) for our initialHead. Since we are only changing a property of our initialHead object, all references to initialHead will take on this change as well. If we were redefining initialHead as a whole, then a new reference to the object would be created.
      initialHead.next = previousNext;
      // now we get our initiaHead, which equals (13,null) and store a reference to that object in previousNext, so previousNext is (13,null)
      previousNext = initialHead;
      // now initialHead equals a reference to newNext which is the object (27,32,71)
      initialHead = newNext;
      // so when we loop again, newNext is the next property of initialHead, so (32,71) so we store it.
      // then we redefine the next property of initialHead to equal the previousNext, so initialHead is now (27,13,null)
      // then we make previousNext equal to this initialHead
      // then we redefine initialHead to equal the newNext,which is 32,71
    }
    return this;
  }
}

/** Alternate Version
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // this.tail(which is equal to a reference to newNode, same as this.head) has a next property equal to the new newNode;
      this.tail.next = newNode;
      // now we are redefining this.tail to equal something completely different, so it has a new address in reference.
      this.tail = newNode;
    }
    this.length++;
  }
  // for pop and shift, if there is nothing in our list just set a coniditon for that case and then set the else statement after it, so we dont have any confusion.

  pop() {
    if (!this.head) {
      return undefined;
    }
    // We want to find the last item in our list,starting from the beginnng. So we know its the last item if this.head.next.next no longer exists. So, we run a while loop until this is the case. So, initially, we have two pointers. One of them is  newTail which for now is set to null, and another is currentNode, which is equal to this.head.
    let currentNode = this.head;
    let newTail = null;
    // if the length is 1 and we are popping, just set this.head and this.tail=null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // if the next node exists, newtail equals the currentNode and then currentNode moves up one. When currentNode.next doesnt exist anymore, thats when currentNode will be at the last node in our list. and then where newTail is, will be our new tail
      while (currentNode.next) {
        newTail = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = newTail;
      this.tail.next = null;
    }
    this.length -= 1;
    return currentNode;
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
    }
    this.length--;
    initialHead.next=null;
    return initialHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }else{
      // the next property on newNode equals our current this.head
      newNode.next = this.head
      // now we are changing this.head to equal something completely new, so it has a different address now.
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    // the 0 index is just,specificItem aka this.head. The 1 index is this.head.next. the second index is this.head.next.next. Thats why the for loop starts at 1, so we can just do specificItem.next;
    let specificItem = this.head;
    for (let i = 1; i <= index; i++) {
      specificItem = specificItem.next;
    }
    return specificItem;
  }

  set(index, value) {
    // this.get already checks the condition of whether or not the index is valid, so we don't need to repeat it
    const specificItem = this.get(index);
    if (specificItem) {
      specificItem.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
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
    newNode.next = initialNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    const initialNode = this.get(index);
    const nodeBefore = this.get(index - 1);
    const nodeAfter = this.get(index + 1);
    nodeBefore.next = nodeAfter;
    this.length--;
    initialNode.next = null;
    return initialNode;
  }

  reverse() {
    let currentHead = this.head;
    this.head = this.tail;
    this.tail = currentHead;
    let previousNext = null;

    for (let i = 1; i <= this.length; i++) {
      const newNext = currentHead.next;
      currentHead.next = previousNext;
      previousNext = currentHead;
      currentHead = newNext;
    }
    return this;
  }
}
* */

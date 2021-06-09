import Node from "./Udemy/data_structures/nodeClassDoubly.js";

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
      this.last.next = newNode;
      newNode.previous = this.last;
      this.last = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) {
      return undefined;
    }
    const initialLast = this.tail;
    if (this.size === 1) {
      this.first = null;
      this.tail = null;
    } else {
      const previousLast = initialLast.previous;
      previousLast.next = null;
      this.last = previousLast;
    }
    this.size--;
    initialLast.previous = null;
    return initialLast;
  }
}

const stack = new Stack();
console.log(stack.push(3));
const inventory = [
  {
    name: "Nike Air Force 1 Crater FlyKnit",
    price: 110,
  },
  {
    name: "Air Jordan 1 Mid",
    price: 115,
  },
  {
    name: "Nike Air Max Plus",
    price: 160,
  },
  {
    name: "Nike Air Zoom Tempo NEXT%",
    price: 200,
  },
  {
    name: "Jordan MA2",
    price: 125,
  },
  {
    name: "Jordan 4 G NRG",
    price: 200,
  },
  {
    name: "KD14",
    price: 150,
  },
  {
    name: "Nike Air Max 90 Exeter Edition",
    price: 130,
  },
  {
    name: "Nike Air Raid",
    price: 140,
  },
  {
    name: "Nike Air Vapormax Evo",
    price: 200,
  },
  {
    name: "Nike Crater Impact",
    price: 100,
  },
  {
    name: "Nike Pegasus Trail 2",
    price: 130,
  },
  {
    name: "Nike SB Zoom Blazer Mid Premium",
    price: 110,
  },
  {
    name: "Nike Winflo 8",
    price: 90,
  },
  {
    name: "PG 5",
    price: 110,
  },
  {
    name: "Zion 1",
    price: 120,
  },
];

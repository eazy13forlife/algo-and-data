import Node from "./nodePriority.js";

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    if (this.values.includes(newNode.value)) {
      return null;
    }
    this.values.push(newNode);
    this.bubbleUp();
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  swap(array, firstIndex, secondIndex) {
    const firstIndexValue = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = firstIndexValue;
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    if (childIndex === 0) {
      return;
    }
    let parentIndex = this.getParentIndex(childIndex);

    while (
      this.values[childIndex].priority > this.values[parentIndex].priority
    ) {
      this.swap(this.values, parentIndex, childIndex);
      childIndex = parentIndex;
      if (childIndex === 0) {
        break;
      }
      parentIndex = this.getParentIndex(childIndex);
    }
  }

  extractMax() {
    const initialMax = this.values[0];
    const lastElement = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = lastElement;
      this.sinkDown();
    }

    return initialMax;
  }

  sinkDown() {
    let parentIndex = 0;
    let childIndex = this.childIndexToSwap(this.values, parentIndex);

    while (
      childIndex &&
      this.values[parentIndex].priority < this.values[childIndex].priority
    ) {
      this.swap(this.values, parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this.childIndexToSwap(this.values, parentIndex);
    }
  }

  childIndexToSwap(array, parentIndex) {
    const leftChildIdx = parentIndex * 2 + 1;
    const rightChildIdx = parentIndex * 2 + 2;

    if (array[leftChildIdx] && array[rightChildIdx]) {
      if (array[leftChildIdx].priority > array[rightChildIdx].priority) {
        return leftChildIdx;
      } else {
        return rightChildIdx;
      }
    }

    if (array[leftChildIdx]) {
      return leftChildIdx;
    }

    if (array[rightChildIdx]) {
      return rightChildIdx;
    }
  }
}

let priority = new PriorityQueue();
priority.insert("cat", 4);
priority.insert("catss", 2);
priority.insert("catssds", 12);
priority.extractMax();

console.log(priority.values);

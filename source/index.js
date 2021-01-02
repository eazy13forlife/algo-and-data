import Node from "./nodePriority.js";

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    const specificValue = this.values.find((object) => {
      return object.value === value;
    });
    if (!specificValue) {
      this.values.push(newNode);
      this.bubbleUp();
    }
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
    let parentIndex = this.getParentIndex(childIndex);

    while (
      childIndex !== 0 &&
      this.values[childIndex].priority < this.values[parentIndex].priority
    ) {
      this.swap(this.values, parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }

  dequeue() {
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
      this.values[parentIndex].priority > this.values[childIndex].priority
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
      if (array[leftChildIdx].priority < array[rightChildIdx].priority) {
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
priority.enqueue("cat", 4);
priority.enqueue("cadfd23stss", 4);
priority.enqueue("catss", 2);
priority.enqueue("cadfdstss", 9);
priority.enqueue("cadfdstss", 9);
priority.enqueue("catssds", 12);
priority.dequeue();
console.log(priority.values);

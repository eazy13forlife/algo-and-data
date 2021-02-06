class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this.values;
  }

  extractMax() {
    const initialValue = this.values[0];
    const lastValue = this.values.pop();
    if (this.values.length) {
      this.values[0] = lastValue;
      this.sinkDown();
    }
    return initialValue;
  }

  swap(array, index1, index2) {
    const value1 = array[index1];
    array[index1] = array[index2];
    array[index2] = value1;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);

    while (
      this.values[childIndex] > this.values[parentIndex] &&
      parentIndex >= 0
    ) {
      this.swap(this.values, childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }

  sinkDown() {
    let parentIndex = 0;
    let childIndex = this.getChildIndexToSwitch(this.values, parentIndex);

    while (childIndex && this.values[parentIndex] < this.values[childIndex]) {
      this.swap(this.values, parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this.getChildIndexToSwitch(this.values, parentIndex);
    }
    /*
    while (
      (this.values[leftChildIndex] || this.values[rightChildIndex]) &&
      (this.values[parentIndex] < this.values[leftChildIndex] ||
        this.values[parentIndex] < this.values[rightChildIndex])
    ) {
      if (this.values[leftChildIndex] >= this.values[rightChildIndex]) {
        this.swap(this.values, parentIndex, leftChildIndex);
        parentIndex = leftChildIndex;
      } else if (this.values[leftChildIndex] < this.values[rightChildIndex]) {
        this.swap(this.values, parentIndex, rightChildIndex);
        parentIndex = rightChildIndex;
      }
      leftChildIndex = this.getLeftChildIndex(parentIndex);
      rightChildIndex = this.getRightChildIndex(parentIndex);
    }
    */
  }

  getChildIndexToSwitch(array, parentIndex) {
    const leftChildIndex = this.getLeftChildIndex(parentIndex);
    const rightChildIndex = this.getRightChildIndex(parentIndex);
    if (array[leftChildIndex] && array[rightChildIndex]) {
      if (array[leftChildIndex] > array[rightChildIndex]) {
        return leftChildIndex;
      } else {
        return rightChildIndex;
      }
    }
    if (array[leftChildIndex]) {
      return leftChildIndex;
    }

    if (array[rightChildIndex]) {
      return rightChildIndex;
    }
  }
}

const heap = new MaxBinaryHeap();
console.log(heap.insert(10));
console.log(heap.insert(25));
console.log(heap.insert(55));
console.log(heap.insert(5));
console.log(heap.insert(3));
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap.values);

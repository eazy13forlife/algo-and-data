class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this.values;
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

  swap(array, index1, index2) {
    const value1 = array[index1];
    array[index1] = array[index2];
    array[index2] = value1;
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);
    while (
      parentIndex >= 0 &&
      this.values[parentIndex] < this.values[childIndex]
    ) {
      this.swap(this.values, parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }

  extractMax() {
    if (this.values.length === 1) {
      return [];
    } else {
      const lastItem = this.values.pop();
      this.values[0] = lastItem;
      this.sinkDown();
      return this;
    }
  }

  sinkDown() {
    let parentIndex = 0;
    let childToSwitch = this.childToSwitch(parentIndex);
    while (
      childToSwitch &&
      this.values[parentIndex] < this.values[childToSwitch]
    ) {
      this.swap(this.values, parentIndex, childToSwitch);
      parentIndex = childToSwitch;
      childToSwitch = this.childToSwitch(parentIndex);
    }
  }
  /*
sinkDown() {
  let parentIndex = 0;
  let leftChildIndex = getLeftChildIndex(parentIndex);
  let rightChildIndex = getRightChildIndex(parentIndex);
  while (parentIndex < this.values.length) {
    if (
      leftChildIndex >= this.values.length &&
      rightChildIndex >= this.values.length
    ) {
      return;
    } else if (
      leftChildIndex >= this.values.length &&
      rightChildIndex < this.values.length
    ) {
      parentIndex = rightChildIndex;
    } else if (
      rightChildIndex >= this.values.length &&
      leftChildIndex < this.values.length
    ) {
      parentIndex = leftChildIndex;
    } else {
      if (this.values[leftChildIndex] > this.values[rightChildIndex]) {
        parentIndex = leftChildIndex;
      } else {
        parentIndex = rightChildIndex;
      }
    }
    leftChildIndex = getLeftChildIndex(parentIndex);
    rightChildIndex = getRightChildIndex(parentIndex);
  }
}
*/
  //need a function that finds out which item our parent switches with.
  // functions determines if left child and right child exists and if only one doesm switch wiith the one that exists, which one is greater so parent should switch with
  childToSwitch(parentIndex) {
    const leftChildIndex = this.getLeftChildIndex(parentIndex);
    const rightChildIndex = this.getRightChildIndex(parentIndex);

    if (
      leftChildIndex >= this.values.length &&
      rightChildIndex >= this.values.length
    ) {
      return;
    } else if (leftChildIndex >= this.values.length) {
      return rightChildIndex;
    } else if (rightChildIndex >= this.values.length) {
      return leftChildIndex;
    }

    if (this.values[leftChildIndex] > this.values[rightChildIndex]) {
      return leftChildIndex;
    } else {
      return rightChildIndex;
    }
  }
}
const binary = new MaxBinaryHeap();
binary.insert(9);
console.log(binary.insert(13));
console.log(binary.insert(1));
console.log(binary.insert(19));
console.log(binary.extractMax());

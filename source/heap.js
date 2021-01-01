class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    if (this.values.includes(element)) {
      return null;
    }
    this.values.push(element);
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
    let parentIndex = this.getParentIndex(childIndex);
    while (this.values[childIndex] > this.values[parentIndex]) {
      this.swap(this.values, parentIndex, childIndex);
      childIndex = parentIndex;
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
    let leftChildIdx = this.getLeftChildIndex(parentIndex);
    let rightChildIdx = this.getRightChildIndex(parentIndex);
    while (
      this.values[parentIndex] < this.values[leftChildIdx] ||
      this.values[parentIndex] < this.values[rightChildIdx]
    ) {
      if (this.values[leftChildIdx] < this.values[rightChildIdx]) {
        this.swap(this.values, parentIndex, rightChildIdx);
        parentIndex = rightChildIdx;
      } else {
        this.swap(this.values, parentIndex, leftChildIdx);
        parentIndex = leftChildIdx;
      }
      leftChildIdx = this.getLeftChildIndex(parentIndex);
      rightChildIdx = this.getRightChildIndex(parentIndex);
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(3);

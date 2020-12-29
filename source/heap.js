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
    Math.floor((index - 1) / 2);
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);
    while (this.values[childIndex] > this.values[parentIndex]) {
      const parentValue = this.values[parentIndex];
      this.values[parentIndex] = this.values[childIndex];
      this.values[childIndex] = parentValue;
      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(3);

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
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
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
      const parentValue = this.values[parentIndex];
      this.values[parentIndex] = this.values[childIndex];
      this.values[childIndex] = parentValue;
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

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);

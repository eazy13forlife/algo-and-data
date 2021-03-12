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

  swap(array, firstIndex, secondIndex) {
    const firstIndexValue = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = firstIndexValue;
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);

    while (childIndex!==0&&this.values[childIndex] > this.values[parentIndex]) {
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
    let childIndex = this.childIndexToSwap(this.values, parentIndex);


      while (childIndex&&(this.values[parentIndex] < this.values[childIndex])) {
        this.swap(this.values, parentIndex, childIndex);
        parentIndex = childIndex;
        childIndex = this.childIndexToSwap(this.values, parentIndex);
      }
    }
  }

  childIndexToSwap(array, parentIndex) {
    const leftChildIdx = parentIndex * 2 + 1;
    const rightChildIdx = parentIndex * 2 + 2;

    if (array[leftChildIdx] && array[rightChildIdx]) {
      if (array[leftChildIdx] > array[rightChildIdx]) {
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

let heap = new MaxBinaryHeap();
heap.insert(3);

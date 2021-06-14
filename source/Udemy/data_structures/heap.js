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
    //we begin by finding the index of the item we just pushed in, and since this item is pushed in, it means its in the last index of our array.
    let childIndex = this.values.length - 1;

    //we find the index of this child in order to compare values and swap if child is greater than parent(since we are dealing with maxBinaryHeap). If it were minBinaryHeap, we would swap if child is less than parent
    let parentIndex = this.getParentIndex(childIndex);

    //so we keep running a loop if child is greater than parent AND if childIndex doesn't equal zero(same is if it wre parentIndex being greater than or equal to zero)
    while (
      childIndex !== 0 &&
      this.values[childIndex] > this.values[parentIndex]
    ) {
      this.swap(this.values, parentIndex, childIndex);
      //the index of the child is now where the parentIndex used to be
      childIndex = parentIndex;
      //we find the new parent index of the new child index, since the childIndex has changed
      parentIndex = this.getParentIndex(childIndex);
    }
  }

  /*
alternate bubble up
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
*/
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
    //we call our childIndexToSwap function in order for us to get the childIndex we should compare with our parentIndex to swap. So the childIndexToSwap function checks to see if both the left and right children exist. If none exist, we retun undefined, if only one exists, then that is what we return. If both exist, then the one that is larger is returned to us, because since this is a maxBinaryHeap, we are swapping the parent with the largest child, so the largest child goes on top. If we didn't have this function, it would be a tangle of if statement inside our sinkDown function, so this helper method makes things easier.
    let childIndex = this.childIndexToSwap(this.values, parentIndex);

    //so if the childIndex we should swap with exists, we want to keep running a loop while the value of the this.values[parentIndex] is less than the value of this.values[childIndex] because when that is the case, we want to keep swapping, so the larger number goes on top.
    while (childIndex && this.values[parentIndex] < this.values[childIndex]) {
      this.swap(this.values, parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this.childIndexToSwap(this.values, parentIndex);
    }
  }

  childIndexToSwap(parentIndex) {
    const leftChildIndex = parentIndex * 2 + 1;
    const rightChildIndex = parentIndex * 2 + 2;

    // if both of indices are outside the bound of the array, none exist, so just return nothing
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
  // childIndexToSwap function but i dont like this much because if array[leftChildIdx] is 0, this registers are falsy, which we dont want
  /*
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
  */
}

let heap = new MaxBinaryHeap();
heap.insert(3);

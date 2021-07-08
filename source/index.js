class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heap.sort((a, b) => {
      return a[1] - b[1];
    });
  }

  extractMin() {
    this.heap.shift();
  }
}

const getMaxCPU = (intervalsArray) => {
  intervalsArray.sort((a, b) => {
    return a[0] - b[0];
  });

  const heap = new MinHeap();
  heap.insert(intervalsArray[0]);
  let maxSize = intervalsArray[0][2];
  let currentSize = intervalsArray[0][2];

  console.log(maxSize);

  for (let i = 1; i < intervalsArray.length; i++) {
    let interval = intervalsArray[i];
    //while there is something in our heap and the earliest end time in our heap is less than or equal to our current intervals start time, it means that interval is done so we can remove it from our heap, which contains the current jobs happening
    while (heap.heap.length && heap.heap[0][1] <= interval[0]) {
      //lets remove this cpu time from our current maxSize
      currentSize = currentSize - heap.heap[0][2];

      //lets actually remove this item from our heap
      heap.extractMin();
    }
    //not we can insert our interval to our heap. so what we did is we have finsihed removing all of the jobs that have finished at the start of this interval, and so now our heap contains the current jobs actually happening.
    heap.insert(interval);
    //lets recalculate maxSize since we added in a new interval to our heap
    currentSize = currentSize + interval[2];
    //lets push in this maxSize to our maxSizes array
    maxSize = Math.max(currentSize, maxSize);
  }
  return maxSize;
};

console.log(
  getMaxCPU([
    [1, 4, 2],
    [2, 4, 1],
    [3, 6, 5],
  ])
);

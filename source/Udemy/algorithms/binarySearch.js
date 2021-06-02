const binarySearch = (array, value) => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer <= rightPointer) {
    const middlePointer =
      leftPointer + Math.floor((rightPointer - leftPointer) / 2);
    if (array[middlePointer] === value) {
      return middlePointer;
    } else if (value > array[middlePointer]) {
      leftPointer = middlePointer + 1;
    } else if (value < array[middlePointer]) {
      rightPointer = middlePointer - 1;
    }
  }
  return -1;
};
console.log(binarySearch([1, 2, 3, 4, 5], 2));

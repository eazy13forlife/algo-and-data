const swap = (array, index1, index2) => {
  const value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

const dutchFlag = (array) => {
  let lowPointer = 0;
  let highPointer = array.length - 1;
  let i = 0;
  while (i <= highPointer) {
    if (array[i] === 0) {
      swap(array, i, lowPointer);
      lowPointer++;
      i++;
    } else if (array[i] === 2) {
      swap(array, i, highPointer);
      highPointer--;
    } else {
      i++;
    }
  }
  return array;
};

console.log(dutchFlag([0, 2, 2, 2, 1, 1, 0, 0]));

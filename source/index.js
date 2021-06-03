const swap = (array, index1, index2) => {
  const value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

//best way
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let index = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[index] < array[j]) {
        swap(array, index, j);
        index = j;
      } else {
        break;
      }
    }
  }
  return array;
};

console.log(insertionSort([3, 7, 4, 1, 4, 6, 0, 0.3, 0.2]));

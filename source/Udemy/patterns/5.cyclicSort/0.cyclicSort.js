const swap = (array, index1, index2) => {
  const value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

const sort = (array) => {
  let i = 0;
  while (i < array.length) {
    let value = array[i];
    let correctValueIndex = value - 1;
    if (array[correctValueIndex] !== value) {
      swap(array, correctValueIndex, i);
    } else {
      i++;
    }
  }
  return array;
};

console.log(sort([1, 5, 6, 4, 3, 2]));

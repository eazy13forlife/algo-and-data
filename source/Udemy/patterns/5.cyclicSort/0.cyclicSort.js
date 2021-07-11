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
    // so, looking at the value of our current index,which is equal to the variable,value, we check if the index that should contain this value actually does contain it.So, if the index in question is the index we're on, and it does contain this value, great, we move on.This index has the right value. If it doesn't we swap the index that should contain this value with our current index, so that the index that should contain this value ends up containing it.
    if (array[correctValueIndex] !== value) {
      swap(array, correctValueIndex, i);
    } else {
      i++;
    }
  }
  return array;
};

console.log(sort([1, 5, 6, 4, 3, 2]));

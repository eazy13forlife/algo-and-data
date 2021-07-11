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
    // The whole purpose, is to make sure the value at the index we're on, is in the correct index if not already. So, looking at the value of our current index,which is equal to the variable,value, we check if the index that should contain this value actually does contain it. So, if it does great, this value is in the correct index, so we move on to check to see if the value at the next index is in its correct index. If it doesn't, we swap the index that should contain this value with our current index, so that the index that should contain this value ends up containing it. And now we want to check if the new number at our current index is in its correct index, and repeat the process.When it is all said and done, our array will be sorted.
    if (array[correctValueIndex] !== value) {
      swap(array, correctValueIndex, i);
    } else {
      i++;
    }
  }
  return array;
};

console.log(sort([1, 5, 6, 4, 3, 2]));

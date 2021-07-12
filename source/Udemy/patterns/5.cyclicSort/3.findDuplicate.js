const swap = (array, index1, index2) => {
  const value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

// the duplicate ends up at the end of our array, since there is only one duplicate, Every number will be in its correct index,besides the duplicate, which will be at the end,
//so we can do it this wayy

const findDuplicate = (array) => {
  let i = 0;
  while (i < array.length) {
    const value = array[i];
    //if the correct index doesn't contain the value it should(which is the current value our i is on), then it swaps.
    if (array[value - 1] !== value) {
      swap(array, value - 1, i);
    } else {
      i++;
    }
  }

  return array.pop();
};

//this other appraoch checks to see if the correct index contains the value it should, which is the value our i  is on,and if the correct index is not the same index as the i we're on, then we have a duplicate value, so we return this duplicate value.
const findDuplicate = (array) => {
  let i = 0;
  while (i < array.length) {
    const value = array[i];
    //if the correct index doesn't contain the value it should(which is the current value our i is on), then it swaps.
    if (array[value - 1] !== value) {
      swap(array, value - 1, i);
    } else {
      //but if correct index does coontain the value it should(which is the current value or i is on) and if the indices are not the same, then we have a duplicate
      if (i !== value - 1) {
        return value;
      }
      i++;
    }
  }
};

console.log(findDuplicate([2, 1, 3, 3, 5, 4]));

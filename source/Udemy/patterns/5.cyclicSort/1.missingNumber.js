const swap = (array, index1, index2) => {
  const value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

const findMissing = (array) => {
  let i = 0;
  while (i < array.length) {
    let value = array[i];
    //first part means, if value is less than array.length,so the index exists
    if (value < array.length && array[value] !== value) {
      swap(array, value, i);
    } else {
      i++;
    }
  }

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (i !== value) {
      return i;
    }
  }
  return "all numbers exist";
};

/*not the optimal way because space complexity will be O(n)
const findMissing = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    newArray[value] = value;
  }

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === undefined) {
      return i;
    }
  }

  return false;
};
*/

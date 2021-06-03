//with selectionSort, we look at each number, so i is every  number in our array. And for each number, i, j looks at every number after that number in order to find the index  that contains the smallest value.(we also make the assumption that the index with the smallest value is the current i we are looking at) At the end of our j loop for that number, we swap the current i index with the j index that contained the smallest value. Also, since j looks at every number after i, i goes until the second to last number in our array.

const swap = (array, index1, index2) => {
  const value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

// best way
const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < array.length - 1; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }
    if (smallestIndex !== i) {
      swap(array, i, smallestIndex);
    }
  }
  return array;
};

// not a good way
const selectionSort2 = (array) => {
  for (let i = array.length; i >= 1; i--) {
    let minIndex;
    let minValue = Infinity;
    for (let j = array.length - i; j < array.length; j++) {
      //for each j, we compare its value with the current minimumvalye
      const minimumValue = Math.min(minValue, array[j]);
      if (minimumValue === array[j]) {
        //if its the new minimum value, we change minIndex to the index of this small value and minValue to this new value
        minIndex = j;
        minValue = array[j];
      }
      if (j === array.length - 1) {
        //at the very end, we swap the current i, with the index of the smallest value
        swap(array, array.length - i, minIndex);
      }
    }
  }
  return array;
};

//best case scenarior is 0(n^2) because outer loop runs o(n) times and inner loop runs o(n) times as well. There is nothing that lets us leave the loop like there is with bubbleSort and insertionSort. an if statement counts as running and a for loop counts as running.

console.log(selectionSort([0, 1, 2, 3, 4, 5, 6]));

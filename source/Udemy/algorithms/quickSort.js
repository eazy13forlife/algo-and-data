//big o is o(nlogn).because on average, the pivot gets moved to the middle each time, so we compare the left and right and have less comparisons to make. But again ,for each decomposition we have to make n comparisons with the number of items in the array

//quickSort using the same index pivot each time
const swap = (array, index1, index1) => {
  const value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

const reorderPivot = (array, start = 0, end = array.length - 1) => {
  const pivot = start;
  let indexSwap = pivot;
  for (let i = pivot + 1; i <= end; i++) {
    if (array[i] < array[pivot]) {
      indexSwap++;
      swap(array, indexSwap, i);
    }
  }
  swap(array, indexSwap, pivot);
  return indexSwap;
};

const quickSort = (array, start = 0, end = array.length - 1) => {
  if (start >= end) {
    return;
  }
  const index = reorderPivot(array, start, end);
  const left = quickSort(array, start, index - 1);
  const right = quickSort(array, index + 1, end);
  return array;
};

//randomized version of quickSort where we use a different pivot each time.
const reorderPivotRandom = (
  array,
  pivot,
  start = 0,
  end = array.length - 1
) => {
  let pivotIndex = pivot;
  let indexSwap = pivotIndex;
  for (let i = start; i <= end; i++) {
    if (pivotIndex > i) {
      if (array[i] > array[pivotIndex]) {
        swap(array, pivotIndex, i);
        pivotIndex = i;
        indexSwap = pivotIndex;
      }
    } else if (i > pivotIndex) {
      if (array[i] <= array[pivotIndex]) {
        indexSwap++;
        swap(array, indexSwap, i);
      }
    }
  }
  swap(array, pivotIndex, indexSwap);
  return indexSwap;
};

const quickSortRandom = (array, start = 0, end = array.length - 1) => {
  if (start >= end) {
    return array;
  }
  const randomPivot = Math.ceil(Math.random() * (end - start)) + start;
  const index = reorderPivotRandom(array, randomPivot, start, end);
  quickSort(array, start, index - 1);
  quickSort(array, index + 1, end);
  return array;
};

//another way, probably easier. So quickSort2 takes in an array and chooses the last item as the pivot.(and if  array is a single element, quickSort returns this array because there is nothing else to sort.) Then it looks at our array and all the  numbers less than the pivot value, go inside a left array and all the numbers greater than the pivot value go inside a right array. Then we return an array, where the pivotValue is in the middle(aka the correct spot, since all the numbers less than it are to the left and all the numbers greater than it are to the right. So we have one element in its correct location) and we call quickSort2 on the left array and on the right array, making sure to use spread operator.(Since, it returns an array, we want to get the item out of the array). so in the end, we will have a single array where all the pivot values are in the correct order and arrays of one element are returned.

const quickSort2 = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let pivotValue = array.length - 1;
  let left = [];
  let right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[pivotValue]) {
      left.push(array[i]);
    } else right.push(array[i]);
  }
  return [...quickSort2(left), pivotValue, ...quickSort2(right)];
};

//randomized version of quickSort2
const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const left = [];
  const right = [];
  const start = 0;
  const end = array.length - 1;
  const pivotIndex = Math.ceil(Math.random() * (end - start)) + start;
  for (let i = 0; i < array.length; i++) {
    if (i !== pivotIndex) {
      if (array[i] < array[pivotIndex]) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }
  return [...quickSort(left), array[pivotIndex], ...quickSort(right)];
};

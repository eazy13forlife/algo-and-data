//with bubbleSort, with each iteration, we are moving the largest number to the top/end of our array.And the number of iterations,i, depends on the number of items in our array that need to be rearranged. So, if 8 items in our array, 8 items need to be rearranged, so 8 total iterations. And for each iteration, the j loop runs, meaning we are comparing the current number with the one right after it, making sure we keep swapping the largest number with number after it, till it gets to the top.

//Optimzation:when we go through an iteration without making any swaps, that means we are finished sorting. We don't need to continue with the other iterations. So, for each iteration, we set swap equal to false and if we do swap, we change swap to true. After the iteration has completed, we check to see if swap is false. If it is and we haven't swapped, we are done.

const swap = (array, index1, index2) => {
  let value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

const bubbleSort = (array) => {
  let didSwap;
  for (let i = array.length; i >= 1; i--) {
    didSwap = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        didSwap = true;
      }
    }
    if (didSwap === false) {
      break;
    }
  }
  return array;
};

console.log(bubbleSort([3, 7, 4, 1, 4, 6, 0]));

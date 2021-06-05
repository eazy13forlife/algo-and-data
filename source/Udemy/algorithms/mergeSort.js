//merge sort takes an array of however many elements and keeps splitting it until we have only arrays of one or 0 element. Then we merge each single element array back together(sorting it while we do so) until we have one large sorted array. In order to do this, we create a recursive function called mergeArrays, which takes two sorted arrays and merges them in the correct sorted order. Our mergeSort recursive function takes an array and keeps splitting it into the left and right half until we are left with an array of only only element. Then what we return from this funciton is mergeArrays(singleElementLeftArray,singleElementRightArray)

const mergeArrays = (array1, array2) => {
  const result = [];
  let firstPointer = 0;
  let secondPointer = 0;

  while (firstPointer < array1.length && secondPointer < array2.length) {
    if (array1[firstPointer] < array2[secondPointer]) {
      result.push(array1[firstPointer]);
      firstPointer++;
    } else if (array2[secondPointer] < array1[firstPointer]) {
      result.push(array2[secondPointer]);
      secondPointer++;
    } else {
      result.push(array1[firstPointer]);
      result.push(array2[secondPointer]);
      firstPointer++;
      secondPointer++;
    }
  }

  if (firstPointer >= array1.length) {
    return [...result, ...array2.slice(secondPointer)];
  } else if (secondPointer >= array2.length) {
    return [...result, ...array1.slice(firstPointer)];
  }
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const middleIndex = Math.floor((array.length - 1) / 2);
  const leftHalf = mergeSort(array.slice(0, middleIndex + 1));
  const rightHalf = mergeSort(array.slice(middleIndex + 1));
  return mergeArrays(leftHalf, rightHalf);
};

console.log(mergeSort([3, 6, 7, 2]));

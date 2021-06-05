//merge sort takes an array of however many elements and keeps splitting it until we have only arrays of one or 0 element. Then we merge each single element array back together(sorting it while we do so) until we have one large sorted array. In order to do this, we create a recursive function called mergeArrays, which takes two sorted arrays and merges them in the correct sorted order. Our mergeSort recursive function takes an array and keeps splitting it into the left and right half until we are left with an array of only only element. Then what we return from this funciton is mergeArrays(singleElementLeftArray,singleElementRightArray)

//big(o) is o(nlogn) because if we have 32 elements we have to do 5 decompositons to get to arrays of 1 elements. And then when we merge, for each decomposition we made,  we have n  comparisons to make at each level. so logn *n . * means nested. For each decomposition, we make n comparisons. so logn tells us number of decompositions and for each we do n comparisons. so logn *n or nlogn. If it was a for loop thats 0(n) and for each item we did n comparisons then it would be 0(n*n) which is n^2.

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

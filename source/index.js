const mergeArrays = (array1, array2) => {
  const result = [];
  let firstPointer = 0;
  let secondPointer = 0;

  while (firstPointer < array1.length && secondPointer < array2.length) {
    if (array1[firstPointer].name < array2[secondPointer].name) {
      result.push(array1[firstPointer]);
      firstPointer++;
    } else if (array2[secondPointer].name < array1[firstPointer].name) {
      result.push(array2[secondPointer]);
      secondPointer++;
    } else {
      result.push(array1[firstPointer].name);
      result.push(array2[secondPointer].name);
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

console.log(
  mergeSort([
    {
      name: "Nike Air Force 1 Crater FlyKnit",
      price: 110,
    },
    {
      name: "Air Jordan 1 Mid",
      price: 115,
    },
    {
      name: "Nike Air Max Plus",
      price: 160,
    },
    {
      name: "Nike Air Zoom Tempo NEXT%",
      price: 200,
    },
    {
      name: "Jordan MA2",
      price: 125,
    },
    {
      name: "Jordan 4 G NRG",
      price: 200,
    },
    {
      name: "KD14",
      price: 150,
    },
    {
      name: "Nike Air Max 90 Exeter Edition",
      price: 130,
    },
    {
      name: "Nike Air Raid",
      price: 140,
    },
    {
      name: "Nike Air Vapormax Evo",
      price: 200,
    },
    {
      name: "Nike Crater Impact",
      price: 100,
    },
    {
      name: "Nike Pegasus Trail 2",
      price: 130,
    },
    {
      name: "Nike SB Zoom Blazer Mid Premium",
      price: 110,
    },
    {
      name: "Nike Winflo 8",
      price: 90,
    },
    {
      name: "PG 5",
      price: 110,
    },
    {
      name: "Zion 1",
      price: 120,
    },
  ])
);

const swap = (array, index1, index2) => {
  const value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

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

  swap(array, pivot, indexSwap);

  return indexSwap;
};

const quickSortRandom = (array, start = 0, end = array.length - 1) => {
  if (start >= end) {
    return array;
  }
  const randomPivot = Math.ceil(Math.random() * (end - start)) + start;
  const index = reorderPivot(array, randomPivot, start, end);
  quickSort(array, start, index - 1);
  quickSort(array, index + 1, end);
  return array;
};

console.log(quickSort([5, 6, 2, 1, 5, 7, 9, 0.3, 0.5]));

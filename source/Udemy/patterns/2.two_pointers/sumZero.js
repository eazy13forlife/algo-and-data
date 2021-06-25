// we are writing a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is zero and retrun the array that includes both values that sum to zero or undefined if a pair does not exist.

//ex: [-3, -2, -1, 0, 1, 2, 3];

// so since this is a sorted array. we can have two points. one starts at the first number and the other starts at the last number. if the sum is greater than 0, we cant move the first pointer up, because that is creating a bigger number, so we have to move the second pointer downn 1. If the sum is less than 0, we cant move the second pointer down 1, because that is creating a smaller number,so we have to move the first pointer up one

const sumZero = (array) => {
  let i = 0;
  let j = array.length - 1;
  while (i !== j) {
    const sum = array[i] + array[j];
    if (sum === 0) {
      return [array[i], array[j]];
    } else if (sum > 0) {
      j -= 1;
    } else if (sum < 0) {
      i += 1;
    }
  }

  return undefined;
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

// write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// ex: [1,2,5,2,8,1,5],2 =>10 because 2 and 8 are two consecutive integers in the array that lead to the maximum sum in the array

const maxSubArraySum = (array, consecutiveNumber) => {
  let maxSum = 0;
  let tempSum = 0;

  // so if the length of the array is less than the number of consecutive numbers that we want added together, we can already return undefined, because not possible.
  if (array.length < consectuveNumber) {
    return undefined;
  }
  let i = 0;
  let j = i + 1;

  while (j < array.length) {
    66;
  }
};

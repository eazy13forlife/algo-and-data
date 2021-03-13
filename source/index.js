// write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// ex: [1,2,5,2,8,1,5], 2 =>so, we need to find the maximum sum of 2 consecutive integers in our array. 10 because 2 and 8 are two consecutive integers in the array that lead to the maximum sum in the array

const maxSubArraySum = (array, length) => {
  let maxSum = 0;
  let currentSum = 0;
  let startWindow = 0;
  let endWindow = 0;

  while (startWindow < array.length && endWindow < array.length) {
    if (startWindow === array.length - 1) {
      return maxSum;
    } else if (endWindow < length - 1) {
      currentSum += array[endWindow];
      endWindow += 1;
    } else if (endWindow === length - 1) {
      currentSum += array[endWindow];
      maxSum = Math.max(maxSum, currentSum);
      startWindow += 1;
      endWindow = startWindow;
    }
  }

  return maxSum;
};
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));

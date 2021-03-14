// write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// ex: [1,2,5,2,8,1,5], 2 =>so, we need to find the maximum sum of 2 consecutive integers in our array. 10 because 2 and 8 are two consecutive integers in the array that lead to the maximum sum in the array
/*
const maxSubArraySum = (array, consecutiveNumber) => {
  let maxSum = 0;
  let tempSum = 0;

  // so if the length of the array is less than the number of consecutive numbers that we want added together, we can already return undefined, because not possible.
  if (array.length < consecutiveNumber) {
    return undefined;
  }

  // looking at our example to do this problem, we start by summing the first two numbers(since that is what our consecutiveNumber value is) and store that as our maxSum
  for (let i = 0; i < consecutiveNumber; i++) {
    maxSum += array[i];
  }

  //so initially, tempSum is equal to maxSum
  tempSum = maxSum;

  // now we start a loop from the third number(if theyre looking for 2 consecutive numbers), because we already have the sum of the first two numbers.
  for (let i = consecutiveNumber; i < array.length; i++) {
    // so, we already have 1+2= 3 as our max and tempSum
    // now the new sum we want begins at 5, which is the secondIndex(and also ends up being the value for consecutiveNumber) so i=num and we will run this loop till the end of our array.
    // what we do in the loop is to find the new tempSum, we look at the current tempSum and if we're currently at the third integer, we subtract the very first integer, which is in our case 1 and we get that by doing array[i-num] which initially is array[0], which is the first item in our array and we add the current integer were on. so array[i], so we add 2+5 and we get 7, for the next consecutive sum of two integers
    tempSum = tempSum - array[i - consecutiveNumber] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};
*/

// so they want a continous subarray so we use sliding window;
// they give us a specific size of this window, so we can incorporate this
const maxSubArrayK = (array, size) => {
  // we need a variable for our startingWindow, which will be set to 0,
  // we need to keep track of sum, so we need a variable for that,
  // we need maximum, so we will track that too in a variable.
  let startWindow = 0;
  let maxSum = 0;
  let currentSum = 0;

  // we are looking for a continous subarray, so our endWindow will start at the first item in our array  and over time go all the way till we reach last item in outarray
  for (let endWindow = 0; endWinodw < array.length; endWindow++) {
    // whenever our for loop runs, our endWindow will increase by 1 and we will calculate the new currentSUm
    currentSum += array[endWindow];

    // if our endWindow is equal to the index of our size variable-1, we are now at the size of our window. So we first stop and reassess. We calculate the maxSum currently of this window(so we can compare with other sums of size 5). and then we will begin to create our new window. So we subtract the value going out of our window, which is whatever value of the current startWindow and then we increase the startWindow by 1. when our for loop runs again, the endWindow will increase by 1, making a new window. and since our endWindow will be greater than size-1, the if statement will run again.( so we again stop and reassess this new window of 5. we find the max sum and begin to make our new window.)
    if (endWindow >= size - 1) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= array[startWindow];
      startWindow += 1;
    }
  }
};

console.log(maxSubArrayK([2, 1, 5, 1, 3, 2], 2));

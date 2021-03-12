// write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// ex: [1,2,5,2,8,1,5],2 =>10 because 2 and 8 are two consecutive integers in the array that lead to the maximum sum in the array

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

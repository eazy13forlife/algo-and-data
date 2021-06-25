/*
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]
*/

// the largest squared values could be  on the ends of the array, if the array is going from negative to positive values, like [-3,-2,-1,0,1,2]. and the smaller numbers will be towards the middle. So we start from the opposite ends, using a left and right pointer. whichever squared value is bigger, we will add to our resultArray. and then we converge towards the middle, putting the greatest values first. So when we finally get to the middle number, it is the smallest value. After we are done looping we return our array in reverse, so it  goes from lowest to highest. if the array is just all positive numbers. The end value wiill always be larger, so our end pointer will keep going down till we get to the first index, at which point, we just put that value in.
const squaringSortedArray = (array) => {
  let left = 0;
  let right = array.length - 1;
  const resultArray = [];
  while (left <= right) {
    //since we want the square of all the numbers, at some point, the left and right index will have to be equal, so the only restriction is left cant be greater than the right pointer
    const leftValue = array[left] ** 2;
    const rightValue = array[right] ** 2;
    if (leftValue < rightValue) {
      resultArray.push(rightValue);
      right--;
    } else if (leftValue >= rightValue) {
      resultArray.push(leftValue);
      left++;
    }
  }
  return resultArray.reverse();
};

console.log(squaringSortedArray([1, 2, 3, 4, 5]));

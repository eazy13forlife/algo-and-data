/*
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Example 1:

Input: [-1, 0, 2, 3], target=3
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
Example 2:

Input: [-1, 4, 2, 1, 3], target=5
Output: 4
Explanation: There are four triplets whose sum is less than the target:
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]


*/

const subarraysProduct = (array, target) => {
  let startWindow = 0;
  let resultArray = [];
  let result = 1;

  for (let endWindow = 0; endWindow < array.length; endWindow++) {
    let number = array[endWindow];
    result *= number;
    while (result >= target && startWindow < array.length) {
      let startNumber = array[startWindow];
      result = result / startNumber;
      startWindow += 1; //since out startWindow is incrementing by 1 if the result is greater than or equal to target, we have to set restriction that we run this while loop while  startWindow is less than array length
    }
    //const length=endWindow-startWindow+1
    //result+=length  we keep adding the length of the array.
    const subArray = array.slice(startWindow, endWindow + 1);
    resultArray.push(subArray);
  }
  return resultArray;
};

console.log(subarraysProduct([8, 2, 6, 5], 50));

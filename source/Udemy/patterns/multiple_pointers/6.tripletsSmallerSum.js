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

const tripletSmallerSum = (array, target) => {
  let result = 0;
  array.sort((a, b) => a - b);
  for (let i = 0; i <= array.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    let firstValue = array[i];
    //this is the sum that array[rightPointer]+array[leftPointer] has to be so when added to firstValue, it equals the target. But since we want a total sum less than target, we want array[rightPointer]+array[leftPointer] to be less than this neededSum when we do our calculations.
    let neededSum = target - firstValue;

    while (leftPointer < rightPointer) {
      const sum = array[leftPointer] + array[rightPointer];
      //if sum is less than neededSuum, we found a triplet.  Since, we are looking for triplets less than this target, If array[i]+array[leftPonter]+array[rightPointer] is less than our target, since it is a sorted array that means we can replace array[rightPonter] with any number between leftPonter and rightPointer to get a sum less than targetSum. so ex: if our array is [-1,1,2,3,4] and target is 5. if array[i] is -1, array[leftPointer] is 1, and array[rightPointer] is 4, the sum is 4, which is less than our target of 5.  if array[right] is 3, our summ will still be less than the target. If array[right] is 2 our sum will still be less than target, so there are 3 numbers that array[right] can be. so our result variable is the old result =(rightPointer-leftPointer)
      if (sum < neededSum) {
        result += rightPointer - leftPointer;
        leftPointer++;
      } else if (sum >= neededSum) {
        rightPointer--;
      }
    }
  }
  return result;
};

console.log(tripletSmallerSum([-1, 4, 2, 1, 3], 5));

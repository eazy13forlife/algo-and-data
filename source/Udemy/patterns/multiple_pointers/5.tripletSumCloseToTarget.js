/*
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.



*/

const triplet_sum_close_to_target = function (array, target) {
  array.sort((a, b) => a - b);
  let smallestDifference = Infinity;
  for (let i = 0; i < array.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    const firstValue = array[i];

    let neededSum;

    neededSum = target - firstValue;

    while (leftPointer < rightPointer) {
      //so we have our targetNumber and we subtract all of our values to see the difference from the targetNumber. A difference of -1 and 1 is the same btw. So, we have to do Math.abs(targetDifference) later on.
      const targetDifference =
        target - array[i] - array[leftPointer] - array[rightPointer]; // subtracting negative and positive is same. just subtract. Same with adding, just add.
      if (targetDifference === 0) {
        return target; //if the difference is 0,this sum is the exact same as the targetNumber, so  just return the sum of all the numbers, which is the target.
      }

      // here, we save the closest difference. A target difference of -1 and 1  is same. We use absolute value because the smallest differnec of -5 and 5 are the same in terms of difference.
      if (Math.abs(targetDifference) < Math.abs(smallestDifference)) {
        smallestDifference = targetDifference;
      }

      //if the target difference is less than the smallest diffrence, save that targetDifference, but if theyre equal then only save it when the targetDifference is greater than the smallestDifference without absolute value. So that when we return our sum, which is  target-smallestDifferece smallestDifference is equal to the larger sum, we will get a smaller sum
      if (
        Math.abs(targetDifference) === Math.abs(smallestDifference) &&
        targetDifference > smallestDifference
      ) {
        smallestDifference = targetDifference;
      }

      if (array[leftPointer] + array[rightPointer] > neededSum) {
        rightPointer -= 1; // we need a triplet with a bigger sum
      } else {
        leftPointer += 1;
        // we need a triplet with a smaller sum
      }
    }
  }
  return target - smallestDifference;
};
console.log(getSumTriplet([-3, -1, 1, 2], 1));

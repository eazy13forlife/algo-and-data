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
  //we need to keep track of the smallestDifference wherever our pointers are, so we initially set it equal to Infnity.
  //in order to get the sum of the triplet which is as close to the target number as possible,  we do sum=target-difference because sum+difference=target
  let smallestDifference = Infinity;
  //then we sort our array, so we can use multiple pointers, because leftPonter will be one index ahead of our current index and rightPointer will be the last index of our array
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    const firstValue = array[i];

    let neededSum;
    // needed sum is the combined value that array[leftPointer] +array[rightPonter] needs to have in order to equal our target when added to the value of array[i].
    neededSum = target - firstValue;

    while (leftPointer < rightPointer) {
      //we begin by finding the current difference of all our values from the target. We will call this targetDifference.  we want to keep track of the targetDifference wherever our ponters are, so later on we can update our smallestDifference variable if absolute value of targetDifference is less than absolute value of smallestDifference because (-2 and 2 are same distance from target).
      const targetDifference =
        target - array[i] - array[leftPointer] - array[rightPointer]; // subtracting negative and positive is same. just subtract. Same with adding, just add.
      if (targetDifference === 0) {
        return target; //if the difference is 0,this sum is the exact same as the targetNumber, so  just return the sum of all the numbers, which is the target.
      }

      // if the targetDifference does not equal 0, then if the absolute value of our targetDifference is less than the current absolute value of our smallestDifference here, then smallestDifference now equals our targetDifference (without the absolute, because remember to find the sum, we do target-smallestDifference, so smallestDifference neeeds to be its actual value, not the absolute version)
      if (Math.abs(targetDifference) < Math.abs(smallestDifference)) {
        smallestDifference = targetDifference;
      }

      //if  the absolute targetDifference is equal to absolute smalllestDifference, then they are the same difference from target. Our question says, if they are the same then return smallest sum. and since in the end sum is target-smallestDifference, here we make smallestDifference equal targetDifference only when targetDIfference is greater than smallestDifference (without absolutes). because the bigger smallestDifference is, the smaller our sum, which is what we want.
      if (
        Math.abs(targetDifference) === Math.abs(smallestDifference) &&
        targetDifference > smallestDifference
      ) {
        smallestDifference = targetDifference;
      }

      // after we have found the differences and everything, we move our pointers based on how close their value is to neededSum
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

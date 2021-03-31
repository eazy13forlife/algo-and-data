/*

Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
*/

/* HOW DUPLICATES WORK

If we have [-1, -1, -1, 0, 0, 0, 1, 1, 1] we will find a solution when current = 0, left = 3 and right = 8

then if we increment left and decrement right we will find a duplicate at current = 0, left = 4 and right = 7 so instead we should increment the left pointer index until the list value != 0, and decrement the right pointer index until the list value != 1. this will only happen when left < right which finishes the while loop in this case

now, if we increment current to index 1 and reset our left and right pointers we will end up with the same solution set. since the list is sorted we have already solved for when current has a list value of -1 so we apply the same principle to increment the current pointer
*/

const searchTripletsNew = (array) => {
  // first, we sort array from lowest to highest;
  array.sort((a, b) => a - b);
  // create our variable to hold resultsArray
  const resultsArray = [];
  console.log(array);

  // now we run a loop from beginning to end of array
  for (let i = 0; i <= array.length - 2; i++) {
    // if the value of array[i] that we are currently on is equal to the value of the array[i-1], then we have a duplicate number, so we want to skip this. Also if i is 0, there is no value of array[i-1] and that is why we also put the condition if i>0;
    if (i > 0 && array[i] === array[i - 1]) {
      continue;
    }
    // the targetSum of our left and rightPointers, has to be whatever value array[i] is but negative. so if array[i] =4. The sum of left and right pointers has to be -4.
    const targetSum = -array[i];
    // left pointer is the index after our current i
    let leftPointer = i + 1;
    // right pointer will be at the end of our array. Since its sorted, now its back to two pointers (left and right) which we are comfortable with.
    let rightPointer = array.length - 1;

    // left pointer has to be less than rightPointer, so that they cant ever be the same value(otherwise it wouldnt be a triplet) and also so that left pointer can't exceed right pointer, since if we find a triplet, we increase left and decrease right(so ths is where left could be greater than right, which we don't want) so we run this while loop, where we put all unique triplets in the resultsArray for each i we are on.
    while (leftPointer < rightPointer) {
      console.log(leftPointer);
      console.log(rightPointer);
      const currentSum = array[leftPointer] + array[rightPointer];
      if (currentSum === targetSum) {
        resultsArray.push([array[i], array[leftPointer], array[rightPointer]]);
        // ever time we find when our currentSum equals the target we need, after pushing in all three numbers, we need to incremenet leftPointer and decrement rightPointer. Now, when we increment leftPointer, if it even exists and its value is the same as the value that came before it, we keep incrementing leftPointer. We do the same when we decrement rightPointer. This is all to avoid duplicates.
        leftPointer++;
        rightPointer--;

        while (
          leftPointer < rightPointer &&
          array[leftPointer] === array[leftPointer - 1]
        ) {
          leftPointer++;
        }

        while (
          leftPointer < rightPointer &&
          array[rightPointer] === array[rightPointer + 1]
        ) {
          rightPointer--;
        }
      } else if (currentSum < targetSum) {
        leftPointer++;
      } else if (currentSum > targetSum) {
        rightPointer--;
      }
    }
  }

  return resultsArray;
};

console.log(searchTripletsNew([-3, 0, 1, 2, -1, 1, -2]));

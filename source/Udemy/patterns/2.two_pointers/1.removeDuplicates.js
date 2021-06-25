/*
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
*/

const removeDuplicated = (array) => {
  let start = 0;
  let end = start + 1;

  //while our window does not leave the length of our array
  while (end < array.length) {
    // if the value of our array[end pointer] and array[start pointer] is different, just move the start pointer up one and replace its value with the array[end] value. Then increase end pointer. this will result in an array that contains no duplicates from the 0 index to wherever the start pointer index ends up being. because the start pointer will be on the index of the last number that is not duplicated.
    if (array[end] !== array[start]) {
      start++;
      array[start] = array[end];
    }
    end++;
  }
  return start + 1;
};

console.log(removeDuplicated([2, 3, 3, 3, 6, 9, 9]));

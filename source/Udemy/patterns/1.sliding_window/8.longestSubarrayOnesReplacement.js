/*
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
Example 2:

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
*/

// so this gist of this problem is the length of our window subtraced from the number of 1's equals the number of 0's that we need to replace. If this number of 0s is within the number of 0s we can replace with 1 to have the longest contigous subarray with 1, GREAT> we find the current max length and increase our window. But, if this number of 0s is greater than the amount that we can replace, we shrink our window to continue finding the  longest contigious subarray having all 1s. But we dont want to redo everything that we just did, so we start from this new shortened length and see if this length meets our criteria, if we doesn't we shrink our window and repeat process until a length does meet our criteria and then we can increase the window to see if we can get an even longer length and so on.

const longestSubArrayZero = (array, target) => {
  let maxLength = -Infinity;
  let startWindow = 0;
  let frequencyObject = {};
  let lengthOf1;

  for (let endWindow = 0; endWindow < array.length; endWindow++) {
    let number = array[endWindow];
    if (!frequencyObject[number]) {
      frequencyObject[number] = 1;
    } else {
      frequencyObject[number] += 1;
    }

    lengthOf1 = frequencyObject[1];

    while (endWindow - startWindow + 1 - lengthOf1 > target) {
      let startNumber = array[startWindow];
      frequencyObject[startNumber] -= 1;
      if (frequencyObject[startNumber] === 0) {
        delete frequencyObject[startNumber];
      }
      startWindow += 1;
      lengthOf1 = frequencyObject[1];
    }

    maxLength = Math.max(maxLength, endWindow - startWindow + 1);
  }
  return maxLength;
};

console.log(longestSubArrayZero([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));

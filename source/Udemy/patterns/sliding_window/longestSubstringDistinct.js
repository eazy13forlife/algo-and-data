// Given a string, find the length of the longest substring in it with no more than K distinct characters.
/*
 Example 1:
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

const longestSubstringDistinct = (string, targetNumber) => {
  let startWindow = 0;
  let endWindow = 0;
  let maxLength = -Infinity;
  let uniqueObject = {};

  while (startWindow < string.length && endWindow < string.length) {
    if (
      Object.keys(uniqueObject).length === targetNumber &&
      !uniqueObject[endWindow]
    ) {
      maxLength = Math.max(endWindow - startWindow + 1, maxLength);
      startWindow += 1;
      endWindow = startWindow;
      uniqueObject = {};
    } else {
      uniqueObject[string[endWindow]] = true;
      endWindow++;
      console.log(uniqueObject);
    }
  }
  return maxLength;
};

console.log(longestSubstringDistinct("araaci", 2));

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

const longestSubstringDistinct = (array) => {
  let startWindow = 0;
  let endWindow = 0;
  let maxTree1 = -Infinity;
  let maxTree2 = -Infinity;
  let unique1 = {};
  let unique2 = {};
  while (startWindow < array.length && endWindow < array.length) {
    if (Object.keys(unique1).length === 1 && !unique1[array[endWindow]]) {
      if (Object.keys(unique2).length === 1 && !unique2[array[endWindow]]) {
        const values1 = Object.values(unique1);
        const values2 = Object.values(unique2);

        maxTree1 = Math.max(values1[0], maxTree1);
        maxTree2 = Math.max(values2[0], maxTree2);
        unique1 = {};
        unique2 = {};
        startWindow += 1;
        endWindow = startWindow;
      } else {
        const values1 = Object.values(unique1);
        maxTree1 = Math.max(values1[0], maxTree1);
        unique2[array[endWindow]] = unique2[array[endWindow]]
          ? ++unique2[array[endWindow]]
          : 1;
        endWindow += 1;
      }
    } else {
      const values2 = Object.values(unique2);
      maxTree2 = Math.max(values2[0], maxTree2);
      unique1[array[endWindow]] = unique1[array[endWindow]]
        ? ++unique1[array[endWindow]]
        : 1;

      endWindow += 1;
    }
  }
  return [unique1, unique2];
};

console.log(longestSubstringDistinct(["A", "B", "C", "A", "C"]));

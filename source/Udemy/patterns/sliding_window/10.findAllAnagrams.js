/* Look at example 9.
Given a string and a pattern, find all anagrams of the pattern in the given string.

Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Example 1:

Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
Example 2:

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
*/

const returnIndexAnagram = (string, pattern) => {
  let startWindow = 0;
  let resultArray = [];
  let patternsFrequency = {};
  let keyMatch = 0;

  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    if (!(letter in patternsFrequency)) {
      patternsFrequency[letter] = 1;
    } else {
      patternsFrequency[letter] += 1;
    }
  }

  for (let endWindow = 0; endWindow < string.length; endWindow++) {
    const letter = string[endWindow];
    if (letter in patternsFrequency) {
      patternsFrequency[letter] -= 1;
      if (patternsFrequency[letter] === 0) {
        keyMatch += 1;
      }
    }

    // if the length of our window is equal to the pattern length, that means we check to see if a permuation exists, and this is checked when we compare the length of our keyMatch, the numbers of keys we have fully accounted for and the number of keys in our patternsFrequency. if they are equal, we have a permuatation. Now after we check, if there is a permuation, great. we shrink our window to see if we can find another substring. if no permutation, then obvs, one or more letters in this substring is not part of the pattern, so we shrink our substring again.
    if (endWindow - startWindow + 1 === pattern.length) {
      if (keyMatch === Object.keys(patternsFrequency).length) {
        resultArray.push(startWindow);
      }
      const startLetter = string[startWindow];
      startWindow += 1;
      if (startLetter in patternsFrequency) {
        if (patternsFrequency[startLetter] === 0) {
          keyMatch -= 1;
        }
        patternsFrequency[startLetter] += 1;
      }
    }
  }

  //in the end , we want to return our results array
  return resultArray;
};

console.log(returnIndexAnagram("abbcabc", "abc"));

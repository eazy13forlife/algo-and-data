/*
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:


Example 1:

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.
Example 2:

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.
Example 3:

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.
Example 4:

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.

*/

const permutationString = (string, pattern) => {
  let startWindow = 0;
  const patternFrequencyObject = {};
  let keyMatch = 0;

  // let us create our patternFrequencyObject for our pattern. So each letter becomes a key. And the value for the key is how many times the letter appears in our patter.
  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    if (!patternFrequencyObject[letter]) {
      patternFrequencyObject[letter] = 1;
    } else {
      patternFrequencyObject[letter] += 1;
    }
  }

  // then, we run our endWindow from the beginning to the end of our string
  for (let endWindow = 0; endWindow < string.length; endWindow++) {
    // we begin by checking if patternFrequencyObject has that letter as a key. if it does, we decrement its value by 1, because if it equals 0, that means we have found every single one of that letter in our string, meaning we have a full keyMatch for that key. For example if there are 4 a's in our pattern and we have all 4as in our string, we have a keyMatch for a. But, if there are 4 a's and we only found one A, there is still 3 more to go.
    const letter = string[endWindow];

    if (letter in patternFrequencyObject) {
      patternFrequencyObject[letter] -= 1;
      if (patternFrequencyObject[letter] === 0) {
        keyMatch += 1;
      }
    }
    // if the number of keyMatch equals the number of keys in our patternFrequencyObject, then we have a permutation. so if our patters is aaaaccb, there are 3 keys. but for there to be a keymatch, we need to have all 4a's match for a keyMatch of a. both c's for a keymatch of c. and one b for a keymatch of b. then the number of keyMatch is 3, which is the number of keys in our patternFrequencyObject, so we are good and we have a permuation
    if (keyMatch === Object.keys(patternFrequencyObject).length) {
      return true;
    }

    // now if the size of our window is equal to our pattern length, and we still dont have a permutation, this means that one or more letters in our window isnt a part of the pattern. so, we shrink the window, to see if the next window contains a permutation. But the value that is going out of our window, if its  a key in our frequencyPatternObject, we need to increment its value again since we still need to account for this key in our future windows to check for a permuation. and if the key had a value of 0, meaning it was a keyMatch, we inrement the match by 1 meaning we still have to match that key since we have put it back in our frequencyObject.
    if (endWindow - startWindow + 1 === pattern.length) {
      const startLetter = string[startWindow];
      startWindow += 1;
      if (startLetter in patternFrequencyObject) {
        if (patternFrequencyObject[startLetter] === 0) {
          keyMatch -= 1;
        }
        patternFrequencyObject[startLetter] += 1;
      }
    }
  }
  return false;
};
console.log(permutationString("aaacb", "abc"));

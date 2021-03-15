//Given a string, find the length of the longest substring, which has no repeating characters.

/*
Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
*/

//they want substring, so we know its going to need to be continous, so we use slidingWindow
//so conceptually, we will put each letter in  an object as a key. if that letter has a value>1 in our object, then we don't want to find the maxLength of our array. we instead shrink the window and check if the new window size has no objects with a key value greater than 1.
const longestSubstring = (string) => {
  let startWindow = 0;
  let maxLength = 0;
  const uniqueObjects = {};

  for (let endWindow = 0; endWindow < string.length; endWindow++) {
    // begin by putting each letter in our uniqueObjects.
    const letter = string[endWindow];
    if (!uniqueObjects[letter]) {
      uniqueObjects[letter] = 1;
    } else {
      uniqueObjects[letter] += 1;
    }

    //if that letter we just put in has a value greater than 1, we remove the letter going out of our window and increause our startWindow, so we can have a new window
    while (uniqueObjects[letter] > 1) {
      const startLetter = string[startWindow];
      uniqueObjects[startLetter] -= 1;
      if (uniqueObjects[startLetter] === 0) {
        delete uniqueObjects[startLetter];
      }
      startWindow += 1;
    }

    maxLength = Math.max(maxLength, endWindow - startWindow + 1);
  }
  return maxLength;
};

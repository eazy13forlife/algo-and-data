/*
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
Example 2:

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
*/

// so they want longest substring, so we can use sliding window;
const longestSubstring = (string, amount) => {
  let startWindow = 0;
  let maxLength = 0;
  // our frequency object tells us how many of a specific letter there are
  let frequencyObject = {};
  // we need to know the max amount of times the letter we are looking at (which is always the first letter in our window) is repeated, so if we subtract (size of window-numbers of times first letter is repeated) we will get how many letters need to be replaced with the first letter in window to create the longest substring( because they are different from the first letter.) And if this amount is greater than the amount that we can replace we will shrink our window and check this window. Otherwise, we can find current length and increase our endWindow
  let maxRepeatLetterCount;

  for (let endWindow = 0; endWindow < string.length; endWindow++) {
    // this code adds the letter into our frequencyObject and increases its count appropriately.
    const letter = string[endWindow];
    if (!frequencyObject[letter]) {
      frequencyObject[letter] = 1;
    } else {
      frequencyObject[letter] += 1;
    }

    //we have to find the count of the first letter in our startWindow.
    maxRepeatLetterCount = frequencyObject[letter];

    // the size of our window minus maxtimesthefirstletterinourwindowrepeats tells us the number of letters that are different from the first letter. so, these will have to be replaced . And if this amount is greater than the maxamount asked of us, we shrink our window, increase startWindow and find new maxRepeat of the first letter in our new window. And then our while loop runs again to find next substring lenght where we replace no more than "amount" letters to get the longest substring having the same letter.
    while (endWindow - startWindow + 1 - maxRepeatLetterCount > amount) {
      const startLetter = string[startWindow];
      frequencyObject[startLetter] -= 1;
      if (frequencyObject[startLetter] === 0) {
        delete frequencyObject[startLetter];
      }
      startWindow += 1;
      maxRepeatLetterCount = frequencyObject[string[startWindow]];
    }

    // if the letters to replace is less than amount,calculate the current length
    maxLength = Math.max(maxLength, endWindow - startWindow + 1);
  }
  return maxLength;
};

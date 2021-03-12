// write a function called findLongestSubstring which accepts a string and return sthe length of the longest consective substring with all distinct characters;
// ex: thecatinthehat=>7 because hecatin is the longest consecutive substring of unique characters.

const findLongestSubstring = (string) => {
  if (!string.length) {
    return 0;
  }
  // so from the getgo,  our uniqueString variable, which keeps track of our unique letters is empty.
  let uniqueString = "";

  //  current maxLength of our unique letters is 0
  let maxLength = 0;

  // the startWindow is the 0 index;
  let startWindow = 0;

  // the endWindow is also the 0 index. Our while loop will begin with trying to see if this 0 index is unque.
  let endWindow = 0;

  while (startWindow < string.length && endWindow < string.length) {
    // if our uniqueString variable doesn't include the value where our endWindow is at in our string variable, then we add this value to our uniqueString variable, because it is a uniqueValue. Also, if this is the first item in our uniqueString vairable, we set its maxLength equal to 1. We don't keep setting it equal to 1 when we have a uniqueString, becuase we And, then we calculate the new consecutive maxLength of the unique letters in our uniqueString. And then we go ahead and increase our endWindow by 1 so our while loop can check to see if the new window created results in a longer substring of distinct characters than before;
    if (!uniqueString.includes(string[endWindow])) {
      uniqueString += string[endWindow];

      // the new maxLength is either equal to our current maxLength or equal to the length of our new window, which is endWindow-startWindow and then we add 1 so we can get length, otherwise we are dealing with index
      maxLength = Math.max(maxLength, endWindow - startWindow + 1);

      // then we increase our endWindow by 1, so when our while loop runs again it can check to see if this new window contains a longer length of consecutive unique letter
      endWindow += 1;

      // if uniqueString does include the letter that our endWindow is at, it means our uniqueString has already reached its current maximum number of consecutive uniqueLetters. So, we increase our startWindow by 1, make our endWindow equal to our startWindow plus 1 make our unqueString variable just has the value of our startWindow in there, and then make our endWindow equal to our startWindow. This way, we are creating a whole new window just shifted up 1 from our original startWindw to find the new longest length of consecutive unique letter. And we also have to make our uniqueString empty again if our first uniqueString was the first 6 letters and the seventh letter wasnt unique, then we would start from the second letter and find how many unique letters after that and over and over.
    } else if (uniqueString.includes(string[endWindow])) {
      startWindow += 1;
      endWindow = startWindow;
      uniqueString = "";
    }
  }

  return maxLength;
};

console.log(findLongestSubstring("rithmschool"));

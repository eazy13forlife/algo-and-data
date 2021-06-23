/*
Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

Example 1:

Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".
*/

const smallestSubstring = (string, words) => {
  const frequencyObject = {};
  const wordLength = words[0].length;
  const totalWords = words.length;
  const resultArray = [];

  // put each word that is in the words array and its frequency in the frequencyObject.
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word in frequencyObject) {
      frequencyObject[word] += 1;
    } else {
      frequencyObject[word] = 1;
    }
  }

  // so the concept is we are looking at our string and checking for substrings of  concatenation of all the words, and also, important note, each word has same length. So, if we have 3 words and each have length of 4, then we look at the first 12 letters in our string and see if we have a concatentation. Then we look at the second 12 letters and see. Then third and so on. So we run an outler loop until we get to the index, that if we count 11 ahead(making 12) we reach the last letter in our string. So looking at our example, we have two words. cat and fox. each have a length of 3. so that is 6 letters. Our string has a length of 9. 9-6=3. so if we start from 3rd index, and count 5 ahead, (making 6) we reach the last letter in our string, making us done with our outer loop. so i begins at 0 and goes till <=string.length-(wordLength*totalWords)<--this will give us the last index we can start at and still count the number of letters needed to reach our concatenation. So this means, i will be c, a t and f. another explanation: for each index in our string, we want to look at the length of words euqal to wordCount times length to see if there is a possible concatentation in that string
  for (let i = 0; i <= string.length - wordLength * totalWords; i++) {
    // since we dont want any overlapping of words, lets create a seenWords object which holds a word and how many times it is in the substring we are looking at.
    const seenWords = {};

    // each j is the word in our words Array. so we have 2 words in our words array, cat and fox.
    for (let j = 0; j < words.length; j++) {
      // the index of the first word in our string begins at i+(j*wordLength). j is the idnex of our first word and we want the length of that word. and then we add it to our current index. So, initially it is 0+(0*3)=0. and then when we run j loop again, it is 0+(1*3)=3, so the letters c and f respectively.
      const wordIndex = i + j * wordLength;

      // our wordIndex, tells us the index of where a word in our string begins. So once, we find that index, we can find the entire word using string.substring(wordIndex,wordIndex+wordLength), so if i is 0 and j is 0, we get wordIIndex is 0 of the first word and that substring is string.substrng(0,0+3) and we get cat. if i was 0 and j was 1, the second word in our string, would begin at the index of 3 and the substring would be fox.
      const word = string.substring(wordIndex, wordIndex + wordLength);

      // if this word isnt in our frequencyObject we break from this inner loop because obvs a concatenation cant happen if our string doesnt even include the world. Then we start from the next i
      if (!(word in frequencyObject)) {
        break;
      }

      // now since we dont want any overlap, we check if the word is in our seenWords object. If it is, we increment it (because maybe our words array has 3 of the same words so in the case we need to count all the times weve seen that word in our given substring, so when we exceed it, we know we have a problem) and otherwise we set it equal to 1
      if (word in seenWords) {
        seenWords[word] += 1;
      } else {
        seenWords[word] = 1;
      }

      if (seenWords[word] > frequencyObject[word]) {
        break;
      }

      // j tells us the index of the word we are on and index+1 tells us the length. so if we are at the same length of words as total Words and we havent broken out of our loop yet, add i to our resultsArray
      if (j + 1 === totalWords) {
        resultsArray.push(i);
      }
    }
  }
  return resultsArray;
};

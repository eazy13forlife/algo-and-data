// whole point of a frequency counter is to compare the values and frequency of values when you have multiple pieces of data. So, an anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema and icemean. So in order for 2 inputs to be an anagram, they need to have the same values AND the the frequency of those values have to be the same. So main concept is two create two frequencyCounter objects for each word. the key is the letter in the word and the value for the key is how many times the letter shows up in the word. Then, in the end we can compare and all that.

const anagram = (word1, word2) => {
  // if their lengths arent even the same, then it's clear that we dont even have an anagram
  if (word1.length !== word2.length) {
    return false;
  }
  const word1Frequency = {};
  const word2Frequency = {};

  // now, lets populate word1Frequency and word2Frequency objects

  //for every word in word1 array
  for (let i = 0; i < word1.length; i++) {
    // we get its value
    const value = word1[i];
    // make that value a key in our word1Frequency and the actual value is 1 if that value isnt already a key in the object. if it already is, we just add 1 to the current value
    word1Frequency[value] = word1Frequency[value] ? ++word1Frequency[value] : 1;
  }

  for (let i = 0; i < word2.length; i++) {
    const value = word2[i];
    word2Frequency[value] = word2Frequency[value] ? ++word2Frequency[value] : 1;
  }

  //now everything is populated

  //so we have to check 2 things. Every value in word1Frequency shows up the same amount of times as the value in word2Frequency AND every value in word1Frequency exists in word2Frequency

  const keys1 = Object.keys(word1Frequency);

  //for every key in our keys1 arrayl
  for (let i = 0; i < keys1.length; i++) {
    const value = keys1[i];

    // if the value doesnt even exist in our word2Frequency object, return false
    if (!word2Frequency[value]) {
      return false;
    }

    //if the number of times the value appears in word1Frequency isnt the same number of times it appears in word2Frequency, return false;
    if (word1Frequency[value] !== word2Frequency[value]) {
      return false;
    }
  }

  // if the prior for loop did not return any falses, then we can return true
  return true;
};

console.log(anagram("car", "rbc"));

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

  return true;
};

console.log(anagram("car", "rbc"));

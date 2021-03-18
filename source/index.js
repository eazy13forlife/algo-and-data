const smallestWindowSubstring = (string, pattern) => {
  let minLength = Infinity;
  let startWindow = 0;
  let frequencyMatch = 0;
  let subStart = 0; // keeps track of which index our min substring starts
  const patternFrequencyObject = {};

  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    if (letter in patternFrequencyObject) {
      patternFrequencyObject[letter] += 1;
    } else {
      patternFrequencyObject[letter] = 1;
    }
  }

  for (let endWindow = 0; endWindow < string.length; endWindow++) {
    const letter = string[endWindow];
    if (letter in patternFrequencyObject) {
      patternFrequencyObject[letter] -= 1;
      //we count every matching of a character, not only when all the frequencies of a key have been matched. So in this case, if patternFrequencyObject has 5 a's, and if the first letter is an a, then we only have 4 more a's to match. But, we will increment our frequencyMatch, meaning we matched one letter already. We only do this if the frequency of the letter is >=0. It can be less than 0 though, because the substring just needs to have all the characters of the given patter, but it can have more though
      if (patternFrequencyObject[letter] >= 0) {
        frequencyMatch += 1;
      }
    }

    // so now, if the frequencyMatch, which just tells us how many characters we have matched is equal to the length of the pattern. so if the pattern is "abc", the length is 3 and if we have 2 a's in our string, after the first a, we decrement our partternFrequencyObject[letter] and its result is 0, so we increment our frequencyMatch, meaning we have maatched one a. But the second a, after we decrement our patternFrequencyObject[letter] the result is negative, because there are more a's in our string than pattern. Since, its negative, we dont increment our frequencyMatch. while this is equal, our condition is met, so we find the min Length and then shrink our window.
    while (frequencyMatch === pattern.length) {
      minLength = Math.min(minLength, endWindow - startWindow + 1);
      subStart = startWindow; // our subStart begins where our startWindow is
      const startLetter = string[startWindow];
      startWindow += 1;
      // if the letter leaving our window is inside our patternFrequencyObject. we will decrement the matched count ofnly if the frequency of the character is 0 in our patternFrequencyObject, meaning it is a useful character. because, the thing is we could have redudant matchning characters, so we dont want to decrement all the time, because we're not sure. And we only need  1 charcter  from our pattern to appear in our string
      if (startLetter in patternFrequencyObject) {
        if (patternFrequencyObject[startLetter] === 0) {
          frequencyMatch -= 1;
        }
        // we will also increment the startLetter in patternfrequencyObject. the way our code is set up, as long as an instance of a letter is matched, we wil increase our frequencyMatch
        patternFrequencyObject[startLetter] += 1;
      }
    }
  }
  // if our minimum length exceeds the size of our string,then obviously, we dont have a substring inside our string that works.
  if (minLength > string.length) {
    return "";
  }
  return string.substring(subStart, subStart + minLength);
};

console.log(smallestWindowSubstring("aabdec", "abc"));

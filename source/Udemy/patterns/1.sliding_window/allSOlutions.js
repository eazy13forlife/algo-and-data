//Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

const averageContinousSubarray = (array, target) => {
  let startWindow = 0;
  let sum = 0;
  const result = [];
  for (let endWindow = 0; endWindow < array.length; endWindow++) {
    sum += array[endWindow];
    if (endWindow - startWindow + 1 === target) {
      result.push(sum / target);
      sum -= array[startWindow];
      startWindow += 1;
    }
  }
  return result;
};

const max_sub_array_of_size_k = function (target, array) {
  let startWindow = 0;
  let maxSum = -Infinity;
  let sum = 0;
  for (let endWindow = 0; endWindow < array.length; endWindow++) {
    sum += array[endWindow];
    if (endWindow - startWindow + 1 === target) {
      maxSum = Math.max(maxSum, sum);
      sum -= array[startWindow];
      startWindow++;
    }
  }
  return maxSum;
};

const smallestContigSum = (array, target) => {
  let startWindow = 0;
  let sum = 0;
  let minLength = Infinity;
  for (let endWindow = 0; endWindow < array.length; endWindow++) {
    sum += array[endWindow];
    while (sum >= target) {
      minLength = Math.min(minLength, endWindow - startWindow + 1);
      sum -= array[startWindow];
      startWindow += 1;
    }
  }
  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
};

const longestSubstringuniqueCharacters = (string, target) => {
  let startWindow = 0;
  const unique = {};
  let longestLength = -Infinity;
  for (let endWindow = 0; endWindow < string.length; endWindow++) {
    const letter = string[endWindow];
    if (!unique[letter]) {
      unique[letter] = 1;
    } else {
      unique[letter] += 1;
    }
    while (Object.keys(unique).length > target) {
      let startValue = string[startWindow];
      if (unique[startValue]) {
        unique[startValue] -= 1;
        if (unique[startValue] === 0) {
          delete unique[startValue];
        }
      }
      startWindow++;
    }

    longestLength = Math.max(longestLength, endWindow - startWindow + 1);
  }
  return longestLength;
};

const fruitBasket = (array) => {
  let startWindow = 0;
  const unique = {};
  let maxFruits = -Infinity;
  for (let endWindow = 0; endWindow < array.length; endWindow++) {
    const letter = array[endWindow];
    if (!(letter in unique)) {
      unique[letter] = 1;
    } else {
      unique[letter] += 1;
    }

    while (Object.keys(unique).length > 2) {
      const startLetter = array[startWindow];
      if (startLetter in unique) {
        unique[startLetter] -= 1;
        if (unique[startLetter] === 0) {
          delete unique[startLetter];
        }
      }
      startWindow++;
    }
    maxFruits = Math.max(maxFruits, endWindow - startWindow + 1);
  }
  return maxFruits;
};

const longestSubstringReplaceNoMorethanKLetters = (string, target) => {
  let startWindow = 0;
  let longestLength = -Infinity;
  const charFreq = {};
  for (let endWindow = 0; endWindow < string.length; endWindow++) {
    const letter = array[endWindow];
    if (!(letter in charFreq)) {
      charFreq[letter] = 1;
    } else {
      charFreq[letter] += 1;
    }
    while (endWindow - startWindow + 1 - charFreq[letter] > target) {
      const startLetter = array[startWindow];
      if (startLetter in charFreq) {
        charFreq[startLetter] -= 1;
        if (charFreq[startLetter] === 0) {
          delete charFreq[startLetter];
        }
      }
      startWindow++;
    }
    longestLength = Math.max(longestLength, endWindow - startWindow + 1);
  }
  return longestLength;
};

const longestSubarrayHavingAll1s = (array, target) => {
  let startWindow = 0;
  const charFreq = {};
  let longestLength = -Infinity;
  for (let endWindow = 0; endWindow < array.length; endWindow++) {
    let number = array[endWindow];
    if (!(number in charFreq)) {
      charFreq[number] = 1;
    } else {
      charFreq[number] += 1;
    }

    while (charFreq[0] && charFreq[0] > target) {
      let startNumber = array[startWindow];
      if (startNumber in charFreq) {
        charFreq[startNumber] -= 1;
        if (charFreq[startNumber] === 0) {
          delete charFreq[startNumber];
        }
      }
      startWindow++;
    }
    longestLength = Math.max(longestLength, endWindow - startWindow + 1);
  }
  return longestLength;
};
console.log(
  longestSubarrayHavingAll1s([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
);

const permuationString = (string, pattern) => {
  let startWindow = 0;
  let characterMatch = 0;
  const patternFrequency = {};
  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    if (!(letter in patternFrequency)) {
      patternFrequency[letter] = 1;
    } else {
      patternFrequency[letter] += 1;
    }
  }

  for (let endWindow = 0; endWindow < string.length; endWindow++) {
    const letter = string[endWindow];
    if (letter in patternFrequency) {
      patternFrequency[letter] -= 1;
      if (patternFrequency[letter] === 0) {
        characterMatch += 1;
      }
    }

    if (endWindow - startWindow + 1 === pattern.length) {
      if (characterMatch === Object.keys(patternFrequency).length) {
        return true;
      } else {
        const startLetter = string[startWindow];
        if (startLetter in patternFrequency) {
          if (patternFrequency[startLetter] === 0) {
            characterMatch -= 1;
          }
          patternFrequency[startLetter] += 1;
        }
        startWindow += 1;
      }
    }
  }
  return false;
};

const allPermuationsString = (string, pattern) => {
  let startWindow = 0;
  let characterMatch = 0;
  const patternFrequency = {};
  const result = [];
  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    if (!(letter in patternFrequency)) {
      patternFrequency[letter] = 1;
    } else {
      patternFrequency[letter] += 1;
    }
  }

  for (let endWindow = 0; endWindow < string.length; endWindow++) {
    const letter = string[endWindow];
    if (letter in patternFrequency) {
      patternFrequency[letter] -= 1;
      if (patternFrequency[letter] === 0) {
        characterMatch += 1;
      }
    }

    if (endWindow - startWindow + 1 === pattern.length) {
      if (characterMatch === Object.keys(patternFrequency).length) {
        result.push(startWindow);
      }
      const startLetter = string[startWindow];
      if (startLetter in patternFrequency) {
        if (patternFrequency[startLetter] === 0) {
          characterMatch -= 1;
        }
        patternFrequency[startLetter] += 1;
      }
      startWindow += 1;
    }
  }
  return result;
};

const smallestWindowContainingSubarray = (string, pattern) => {
  let startWindow = 0;
  let characterMatch = 0;
  const patternFrequency = {};
  let smallestLength = Infinity;
  let substring;
  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    if (!(letter in patternFrequency)) {
      patternFrequency[letter] = 1;
    } else {
      patternFrequency[letter] += 1;
    }
  }

  for (let endWindow = 0; endWindow < string.length; endWindow++) {
    const letter = string[endWindow];
    if (letter in patternFrequency) {
      patternFrequency[letter] -= 1;
      if (patternFrequency[letter] === 0) {
        characterMatch += 1;
      }
    }

    while (characterMatch === Object.keys(patternFrequency).length) {
      smallestLength = Math.min(smallestLength, endWindow - startWindow + 1);
      if (smallestLength === endWindow - startWindow + 1) {
        substring = string.slice(startWindow, endWindow + 1);
      }
      const startLetter = string[startWindow];
      if (startLetter in patternFrequency) {
        if (patternFrequency[startLetter] === 0) {
          characterMatch -= 1;
        }
        patternFrequency[startLetter] += 1;
      }
      startWindow += 1;
    }
  }
  return substring;
};

const concat = (string, words) => {
  const resultsArray = [];
  let startWindow = 0;
  const wordsFrequency = {};
  const wordLength = words[0].length;
  const totalNumberOfWords = words.length;
  const totalLetters = wordLength * totalNumberOfWords;
  let wordMatch = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!(word in wordsFrequency)) {
      wordsFrequency[word] = 1;
    } else {
      wordsFrequency[word] += 1;
    }
  }

  /*while (endWindow < string.length)*/
  for (
    let endWindow = startWindow + wordLength - 1;
    endWindow < string.length;
    endWindow += wordLength
  ) {
    const word = string.slice(endWindow - (wordLength - 1), endWindow + 1);
    if (word in wordsFrequency) {
      wordsFrequency[word] -= 1;
      if (wordsFrequency[word] === 0) {
        wordMatch += 1;
      }
    }

    if (endWindow - startWindow + 1 === totalLetters) {
      if (wordMatch === Object.keys(wordsFrequency).length) {
        resultsArray.push(startWindow);
      }
      const startWord = string.slice(startWindow, startWindow + wordLength);
      if (startWord in wordsFrequency) {
        if (wordsFrequency[startWord] === 0) {
          wordMatch -= 1;
        }
        wordsFrequency[startWord] += 1;
      }

      startWindow += wordLength;
    }
  }
  return resultsArray;
};

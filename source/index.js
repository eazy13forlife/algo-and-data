const longestSubstring = (array, target) => {
  let maxArrayLength = -Infinity;
  let startWindow = 0;
  const frequencyObject = {};
  let frequencyOf1;

  for (let endWindow = 0; endWindow < array.length; endWindow++) {
    let number = array[endWindow];
    if (number in frequencyObject) {
      frequencyObject[number] += 1;
    } else {
      frequencyObject[number] = 1;
    }
    frequencyOf1 = frequencyObject[1];

    while (endWindow - startWindow + 1 - frequencyOf1 > target) {
      let startNumber = array[startWindow];
      startWindow += 1;
      if (startNumber in frequencyObject) {
        frequencyObject[startNumber] -= 1;
        if (frequencyObject[startNumber] === 0) {
          delete frequencyObject[startNumber];
        }
      }
      frequencyOf1 = frequencyObject[1];
    }

    maxArraylength = Math.max(maxArrayLength, endWindow - startWindow + 1);
  }
  return maxArrayLength;
};

console.log(longestSubstring("aabccbb"));

const smallestSubarraysum = (array, targetNumber) => {
  let startWindow = 0;
  let endWindow = 0;
  let minLength = Infinity;
  let currentLength = 0;
  let sum = 0;

  while (startWindow < array.length && endWindow < array.length) {
    if (sum + array[endWIndow] < targetNumber) {
      sum += array[endWindow];
      endWindow += 1;
    } else {
      minLength = Math.min(minLength, endWindow - startWindow);
      sum = 0;
      startWindow += 1;
      endWindow = startWindow;
    }
  }
  return minLength;
};

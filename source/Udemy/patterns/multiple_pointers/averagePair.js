// very similar to sumZero.js so look at that if need any help.

const averagePair = (array, targetAverage) => {
  let i = 0;
  let j = array.length - 1;

  while (i !== j) {
    const average = (array[i] + array[j]) / 2;
    if (average === targetAverage) {
      return true;
    } else if (average > targetAverage) {
      j -= 1;
    } else if (average < targetAverage) {
      i += 1;
    }
  }
  return false;
};

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

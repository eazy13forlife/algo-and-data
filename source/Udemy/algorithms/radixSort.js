// we need three  helper functions. Get digit takes a number and gets the digit at a specific position.The 0 position is the last digit, the 1 position is the second to last digit and so on. O is the last digit because when we run a for loop, which starts from 0, we want 0 to correspond with the last digit because this is how radixSort works.
const getDigit = (number, position) => {
  const numString = number.toString();
  const numArray = numString.split("");
  return +numArray[numArray.length - 1 - position];
};

// digitCount takes in a number and returns the number of digits in this number
const digitCount = (num) => {
  if (typeof num === "string") {
    return;
  }
  return num.toString().split("").length;
};

// mostDigits takes in an array of numbers and returns the number of digits of the largest number in the list
const mostDigits = (numArray) => {
  let maxDigits = -Infinity;
  for (let i = 0; i < numArray.length; i++) {
    const numOfDigits = digitCount(numArray[i]);
    maxDigits = Math.max(numOfDigits, maxDigits);
  }
  return maxDigits;
};

const radixSort = (array) => {
  // we look at our array of numbers and find the number of digits of the largest number in our array.
  const maxDigit = mostDigits(array);
  // for each position,i. So, if the number with the most digits is 9, we will sort the 0 position, the 1 position, the 2 position, the 3 position and so on until we get to 8th and final position of the largest number we need to sort. Remember 9 digits means 8 positions when the position begins at 0, just like an index. So i goes from 0 to <maxDigit.
  for (let i = 0; i < maxDigit; i++) {
    const digitsArray = Array.from({ length: 10 }, () => []);
    // j looks at each number in our array,(array[j]) and gets the digit at the position,i that we are currently on. Then we add this digit to our to the index that corresponds with this digit in our digitsArray.
    for (let j = 0; j < array.length; j++) {
      const digit = getDigit(array[j], i);
      digitsArray[digit].push(array[j]);
    }
    // concat combines multiple arrays and strings, numbers, into one single array. It returns this new single array.
    array = [].concat(...digitsArray);
  }
  return array;
};

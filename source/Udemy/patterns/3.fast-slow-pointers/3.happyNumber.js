//using fast and slow pointers
const getSumDigits = (number) => {
  let sum = 0;
  const numberArray = number.toString().split("");
  for (let i = 0; i < numberArray.length; i++) {
    sum += +numberArray[i];
  }
  return sum;
};

const findHappyNumber = (number) => {
  let slow = number;
  let fast = number;
  while (slow !== fast) {
    slow = getSumDigits(number);
    fast = getSumDigits(getSumDigits(number));
  }
  if (fast === 1) {
    return true;
  }
  return false;
};

//recursive way
const findHappyNumber2 = (number) => {
  let result = [];
  let isHappy;
  const addSum = (number) => {
    const numberArray = number.toString().split("");
    let sum = 0;
    for (let i = 0; i < numberArray.length; i++) {
      const number = +numberArray[i];
      sum += number * number;
    }
    if (sum === 1) {
      isHappy = true;
      return;
    } else if (result.includes(sum)) {
      isHappy = false;
      return;
    } else if (!result.includes(sum)) {
      result.push(sum);
      addSum(sum);
    }
  };
  addSum(number);
  return isHappy;
};

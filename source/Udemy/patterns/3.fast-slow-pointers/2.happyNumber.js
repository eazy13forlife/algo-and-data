//using fast and slow pointers
const getSumDigits = (number) => {
  let sum = 0;
  const numberArray = number.toString().split("");
  for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i];
    sum += number * number;
  }
  return sum;
};

const findHappyNumber = (number) => {
  let slow = number;
  let fast = number;
  //slow and fast equal the same thing right out of the gate, (so i can't try to do while(slow!==fast) and then run if(slow===1)once while loop stops running(meaning they're now equal,so i can check if they equal 1 or some other number)) because they're equal from the start, so while loop wouldn't even run in the first place. Since, they're going to equal each other at some point, I just run a loop while(true) and then once they're equal, I find what im looking for and end the loop.
  while (true) {
    slow = getSumDigits(slow);
    fast = getSumDigits(getSumDigits(fast));
    if (slow === fast) {
      if (slow === 1) {
        return true;
      }
      return false;
    }
  }
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

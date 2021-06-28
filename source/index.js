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
  //slow and fast equal the same thing right out of the gate, so i can't do while(slow!==fast) and then run my code when theyre equal, because they're equal from the start, so while loop wouldn't even run. Since, they're going to equal each other at some point, I just run a loop while(true) and then once they're equal, i find what im looking for and end the loop.
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

console.log(getSumDigits(30));

// write a function called minSubArrayLenghtm which accepts two parameters. An array of positive integers and a positive integer. This function should return the minimal length of a contigous subarray of which the sum if greater than or equal to the integer passed to the function. if there isn't one, return 0 instead.

// ex ([2,3,1,2,4,3], 7)=>2 because 4+3 is 7 and this is the smallest length where the sum is greater than or equal to 7.2+3+1+2 is 8. which works and this length is 4. 3+1+2+4 is 10 which works, and this length is 4. 1+2+4 is 7 works and this length is 3. 2+4+3 is 9 which works and this length is 3. 4+3 is 7 which works and this length is 2, which is the answer because it is the smallest length where the sum is greater than or equal to 7.

const minSubArrayLength = (array, targetNumber) => {
  // so we need a startWindow, endWindow,minArrayLength count, and sum variables;

  //our startWindow will be the first item in our array, the 0 index.
  let startWindow = 0;

  //our endWindow will also equal the startWindow, the first item in our array
  let endWindow = startWindow;

  //we need a minArrayLength to return. Since we will be using Math.min, the initial minArrayLength we compare with has to be Infinity, so any number we compare it with will be the new minArrayLength. Otherwise if minArrayLength is super small already like 0, and we use Math.min, no number wwe find will be less than 0, so our code won't work
  let minArrayLength = Infinity;

  //we need a currentSum variable to keep track of our sums
  let currentSum = 0;

  // so we will run this loop while both startWindow and endWindow arent greater than the length of our array
  while (startWindow < array.length && endWindow < array.length) {
    // so we begin by checking if the sum of our window is less than the targetNumber. So the sum of our window is the currentSum plus the value our endWindow is at
    if (currentSum + array[endWindow] < targetNumber) {
      // if it less than our targetNumber, let's firs find the new currentSum with this current window. then, we can increase the size of our window by 1 because ultimately we want to find the minimum arrayLength where the currentSum is greater than or equal to our targetNumber.
      currentSum += array[endWindow];
      endWindow += 1;
      // if the currentSum is greater than or equal to our targetNumber, then we  have found one window where this is the case. So we find the length of this current window that led to the sum being greater than or equal to the targetnumber. So we can go ahead and check the next window. so we increase our startWindow up by 1, make our endWindow equal to our startWindow again and make the currentSum 0 again, so we can repeat the process.
    } else if (currentSum + array[endWindow] >= targetNumber) {
      minArrayLength = Math.min(minArrayLength, endWindow - startWindow + 1);
      startWindow += 1;
      endWindow = startWindow;
      currentSum = 0;
    }
  }

  return minArrayLength;
};

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
// so they want continous subarray, so we will use slidingWindow;
//they dont give us a specfic  target window, so we will have to create is as we go
const smallestSubarrayLength = (array, targetNumber) => {
  if (!array.length) {
    return 0;
  }
  //we need to keep track of startWindow, so we need a variable for that;
  // we need to keep track of sum so we need a variable for that;
  // we need to track track on minArray length;

  let startWindow = 0;
  let sum = 0;
  let minArrayLength = Infinity;

  // our endWindow will initially begin at the first item in our array and end at the last item our array, because we want to test out all possibilites.
  for (let endWindow = 0; endWindow < array.length; endWindow++) {
    sum += array[endWindow];

    // so if the sum is greater than or equal to the targetNumber, we met our rule. So we stop and reassess. we find the minArrayLength. then we want to begin creating our new window to see if we can find an even smaller window where sum is greater than or equal to targetNumber, so we want to start from the second number now and find a continous array for where sum is greater than or qual to taargetNumber. We remove the value going out of our window(which is just the value of startWindow) and inrease startWindow by 1. if this new startWindow and the same endWindow from before is still greater than or equal to the targetNumber, we repeat the while loop (aka stop and reassess) because our condition has been met again. SO, we find the new length of this array and begin creating our new window to see if there is an even smaller window where sum is greater than or equal to targetNumber. So we start at thr third number now and try to find  acontinous array for where sum is greater than or equal to targetNumber by subtracting the value of startWindow and increasing our startWindow by 1. it is only when then sum of our current window is less than or equal to targetNumber where our for loop runs again,causing our endWindow to increase by 1 and us finding the new current sum.
    while (sum >= targetNumber) {
      minArrayLength = Math.min(Infinity, endWindow - startWindow + 1);
      sum -= array[startWindow];
      startWindow += 1;
    }

    return minArrayLength;
  }
};
console.log(minSubArrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));

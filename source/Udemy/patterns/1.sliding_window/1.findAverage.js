// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
// ex: Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
const findAverage = (array, size) => {
  const averagesResult = [];
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += array[i];
  }

  averagesResult.push(sum / size);
  for (let i = size; i < array.length; i++) {
    sum = sum - array[i - size] + array[i];
    averagesResult.push(sum / size);
  }
  return averagesResult;
};

// so we know its continous so we'll be using sliding window
// also they give us a specific window length

const findAverage = (array, size) => {
  // so we need a variable for start Window
  // we also need a variable for the thing we are tracking, which is the average(i will keep track of sum and just divide by size).
  let startWindow = 0;
  let sum = 0;
  let resultArray = [];

  // we will run a for loop. our end window is going to begin at the 0 index in the beginning and end at the last element in our array at some point. So everytime our for loop runs, the endWindow will increase by 1.
  for (let endWindow = 0; endWindow < array.length; endWindw++) {
    // every time our for loop runs, we begin with adding the sum of the value of the endWindow
    sum += array[endWindow];

    //Once we reach the index of our size variable-1, we are now at the end of our winode. So we stop and reassess. So we find the current average and add it to our resultArray.To begin creating the next window, we subtract the value going out of our window, which is the value of whatever the startWindow is and then we increase our start window by 1, so the new window currently is [3,2,6,-1]. So when our loop runs again, our endWindow is going to increase in size by 1 (and we are going to find the new sum),meaning we are now at our new window, so the if statement will run again.
    if (endWindow >= size - 1) {
      resultArray.push(sum / size);
      sum -= array[startWindow];
      startWindow += 1;
    }
  }

  return resultArray;
};
console.log(findAverage([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

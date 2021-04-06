/*
Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

Example 1:

Input: [2, 5, 3, 10], target=30
Output: [2], [5], [2, 5], [3], [5, 3], [10]
Explanation: There are six contiguous subarrays whose product is less than the target.
Example 2:

Input: [8, 2, 6, 5], target=50
Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]
Explanation: There are seven contiguous subarrays whose product is less than the target.


*/

const findSubarrays = (array, targetNumber) => {
  let startWindow = 0;
  let results = 0;
  let resultsArray = [];
  let product = 1;
  for (let endWindow = 0; endWindow < array.length; endWindow++) {
    let firstNumber = array[endWindow];
    product *= firstNumber;

    // if product  is greater than or eequal to targetNumber, this doesnt meet our requirement, so we want to shrink our window. However if our startWindow exceeds our endWindow, we need to
    while (product >= targetNumber && startWindow < endWindow) {
      let firstNumber = array[startWindow];
      product /= firstNumber;
      startWindow += 1;
    }
    // if product is less than the targetNumber, we create an exmpty array in order to create our substrings
    let tempList = [];
    //if we are looking at [2,5,3,10]. when endWindow and startWindow is both 0, the number of subarrays less than 10 is just 1. When endWindow is 5 and startWindow is 2, te number of subarrays is 3:[2],[5], and [2,5]. When endWindow is 3 and startWindow is 2, number of subarrays is [2],[5].[3],[2 5][5,3],[2,5,5] which is 6. So, everytime a subarray matches we end up getting an additional endWindow-startWindow +1 subarrays.
    //results += endWindow - startWindow + 1;

    //since the product of all numbers from left to right in current window is less than the tagret, all subarrays fromm left to right will have a product less than the target too. We start from endWindow and go down to startWindow because for our example if we start from startWindow. and use push instead of unshift, we first push in 2 to results Array. and then when our window is [2,5], we push in 2 again and add that to resultsArray before pushing in 5 and then 2,5 gets added because we join and split. That is a duplicate we dont want. So ths way. we first unshift 5. and then when window is [2,5], we unshift 2 first.
    for (let i = endWindow; i >= startWindow; i--) {
      tempList.unshift(array[i]);
      resultsArray.push(tempList.join("").split(""));
    }
  }
  return resultsArray;
};

console.log(findSubarrays([2, 5, 3, 10], 30));

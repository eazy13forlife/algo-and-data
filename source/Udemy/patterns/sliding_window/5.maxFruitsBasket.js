/*
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.
*/

/*
Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
*/

//so we know to use slidingWindow because it is contiguous. it says we can start with any tree, but we can't skip a tree once we've started.
//so looking at example 1. A goes into first basket, B goes into second Basket. So  first basket can only have A and second basket can only have B. C isn't in either, so currently our max length of fruits is 2. 1A and 1B.  So now, lets start from B. but we dont want to repeat everything from B, so we subtract A. So we still have second basket have B. and the first Basketba has C now. So we add A. A isn't in either, so again the max length is 2 and we repeat
const maxFruitsBasket = (array) => {
  let startWindow = 0;
  const uniqueObjects = {};
  let maxLength = 0;
  const resultObject = {};

  for (let endWindow = 0; endWindow < array.length; endWindow++) {
    //we begin by adding the letter to our uniqueObejcts array, which keeps track of our letters and how many of them there are
    const letter = array[endWindow];
    if (!uniqueObjects[letter]) {
      uniqueObjects[letter] = 1;
    } else {
      uniqueObjects[letter] += 1;
    }

    // if the length of distinct keys is greater than 2, we won't find the max length. Instead, we will start from the second letter and see if there are no more than 2 distinct characters from the second letter to where our endWindow is. If there are more than 2 distinct characteers in this window, we again shrink window and recheck. If there are no more than 2 distinct characters, then we can find the maximum length and our for loop will increase endWindow by 1.
    while (Object.keys(uniqueObjects).length > 2) {
      const startLetter = array[startWindow];
      uniqueObjects[startLetter] -= 1; //our uniqueObjects contained the frequency of the distinct letters in our window, but since we are removing this letter from our window, we decrement it from our uniqueObject
      if (uniqueObjects[startLetter] === 0) {
        delete uniqueObjects[startLetter];
      }
      startWindow += 1;
    }

    maxLength = Math.max(maxLength, endWindow - startWindow + 1);
  }
};

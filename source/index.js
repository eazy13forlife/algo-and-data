/*
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

Example 1:

Input: [1, 0, 2, 1, 0]
Output: [0 0 1 1 2]
Example 2:

Input: [2, 2, 0, 1, 2, 0]
Output: [0 0 1 2 2 2 ]


*/

// while iterating, we will move all 0s before the low pointer and all 2s after the high pointer so that in the end, all the 1s will be between low and high. So, we will have a lowPointer that keeps track of all the 0s adn it will start from idnex of 0. We will also have a highPointer that keeps track of all the 2s and it will start at the end of our array. We will use a variable called i to work our way from start to end of array and just swap any of its 0 or 2 values with the lowPointer or high Pointer.So, essentially, this i will keep track of 1s.

const swap = (array, firstIndex, secondIndex) => {
  let value = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = value;
};
const dutchFlag = (array) => {
  let lowPointer = 0;
  let highPointer = array.length - 1;
  let i = 0;
  // we run a while loop while i is less than or equal to the highPointer, which keeps track of all our 2s. So anything past the highPointer contains 2.
  while (i <= highPointer) {
    //if the value of array[i] is 0, we want to swap this value with array[lowPointer] which keeps track of all the 0s. And then we incremenet array[lowPointer] to keep track of the next 0 in our array. Once array[lowPointer] gets swapped with a 0, it increments to keep track of the next 0. So in the end, everything below our lowPointer will equal 0. Once we swap, the value of array[i] is going to be greater than 0, so we can increment i  and lowPointer will deal this. but when we swap with a 2, the value of i can be 0 or 1. So we can't increment. If its zero, we need to swap again
    if (array[i] === 0) {
      swap(array, i, lowPointer);
      i += 1;
      lowPointer += 1;
      //if i is 1, we dont swap with either low or high because low only keeps track of 0 and high keeps track of 2s. So we just increment i to check for the next value to see if it needs to swap.
    } else if (array[i] === 1) {
      i += 1;
    } else if (array[i] === 2) {
      //if the value of array[i] is 2, we want to swap this value with array[highPointer] which keeps track of all the 2s. And then we decremenet array[highPointer] to keep track of the next 2 in our array. So, once array[highPointer] gets swapped with a 2, it decrements to keep track of the next 2. So in the end, everything after our highPointer will equal 2. when we swap, we dont move i. We want to check what this new value is and see if it needs to be swapped.
      swap(array, i, highPointer);
      highPointer -= 1;
    }
  }
};

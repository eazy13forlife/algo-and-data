// implement a function called countUniqueValues, which accepts a sorted array and counts the number of unique vales in the array;

// ex: [1,1,1,1,1,12] has 2 unique values:1 and 2

// so we will use 2 pointers. One will start at the first index and the other at the second index. If they are the same values, we keep moving the second pointer up 1 till we get to a different value. Since we've now reached a different value we can increment our  uniquecounter by 1,(meaning everything before this  new unique value was the same unique value). Then, we move the left pointer to this new different value and then increase the second pointer by 1 until we find the new unique value. Also remember, if the second pointer is at the last index in the array and the values of the first and second pointer are different, that means we increment the unique counter by 1, because we are at a different value, meaning everything before this different value was the same unique value. And also we increment by  1 again since no numbers come after this last unique value our second pointer is at.

const countUniqueValues = (array) => {
  if (array.length === 1) {
    return 1;
  }
  let i = 0;
  let j = 1;
  let uniqueCounter = 0;

  while (j < array.length) {
    if (array[i] === array[j]) {
      j++;
    } else if (array[i] !== array[j]) {
      if (j === array.length - 1) {
        uniqueCounter += 2;
        return uniqueCounter;
      } else {
        uniqueCounter += 1;
        i = j;
        j += 1;
      }
    }
  }
  return uniqueCounter;
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

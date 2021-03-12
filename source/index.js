// we are writing a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is zero and retrun the array that includes both values that sum to zero or undefined if a pair does not exist.

//ex: [-3, -2, -1, 0, 1, 2, 3];

// so since this is a sorted array. we can have two points. one starts at the first number and the other starts at the last number. if the sum is greater than 0, we cant move the first pointer up, because that is creating a bigger number, so we have to move the second pointer downn 1. If the sum is less than 0, we cant move the second pointer down 1, because that is creating a smaller number,so we have to move the first pointer up one

const isSubsequence = (string1, string2) => {
  const string1New = string1.split(" ").join("");
  const string2New = string2.split(" ").join("");
  let i = 0;
  let j = 0;

  while (i < string1New.length) {
    if (string1New[i] === string2New[j]) {
      i++;
      j++;
    } else if (string1New[i] !== string2New[j]) {
      if (!string2New[j]) {
        return false;
      }
      j++;
    }
  }
  return true;
};

console.log(isSubsequence("abc", "acb"));

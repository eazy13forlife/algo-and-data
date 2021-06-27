const compareStrings = (string1, string2) => {
  `    let left = 0;
    let right = 0;
    while (left < string1.length && right < string2.length) {
      if (string1[left] === string2[right]) {
        left++;
        right++;
      } else if (string1[left] === "#" && string2[right] !== "#") {
        left++;
      } else if (string1[left] !== "#" && string2[right] === "#") {
        right++;
      } else {
        return false;
      }
    }
    return true;`;
};

const removeBackspace = (string) => {
  const stringArray = string.split("");
  let left = 0;
  let right = 1;
  while (right < stringArray.length) {
    if (stringArray[right] !== "#") {
      left++;
      right++;
    } else {
      stringArray.splice(left, 2);
      left -= 1;
      right = left + 1;
    }
  }
  return stringArray.join("");
};

const checkEqual = (string1, string2) => {
  const word1 = removeBackspace(string1);
  const word2 = removeBackspace(string2);
  if (word1 === word2) {
    return true;
  } else {
    return false;
  }
};

const checkSorted = (actualArray, subArray, startWindow, endWindow) => {
  subArray.sort((a, b) => {
    return a - b;
  });
  const left = actualArray.slice(0, startWindow);
  console.log(left);
  const middle = subArray;
  console.log(middle);
  const right = actualArray.slice(endWindow + 1);
  console.log(right);
  const newArray = [...left, ...middle, ...right];

  for (let i = 0; i < newArray.length; i++) {
    if (i > 0) {
      if (newArray[i] >= newArray[i - 1]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

const lengthSmallestArray = (array) => {};

/*
const left = actualArray.slice(0, startWindow);
const middle = subArray;
const right = actualArray.slice(endWindow + 1);
const newArray = [...left, ...middle, ...right];
for (let i = 0; i < newArray.length; i++) {
  if (i > 0) {
    if (newArray[i] >= newArray[i - 1]) {
      continue;
    } else {
      return false;
    }
  }
}
return true;
};

const shortest_window_sort = function(array) {
 let smallestLength = Infinity;
let startWindow = 0;
const result = [];
for (let endWindow = 0; endWindow < array.length; endWindow++) {
  result.push(endWindow);
  let sorted = checkSorted(array, result, startWindow, endWindow);
  while (sorted) {
    smallestLength = Math.min(smallestLength, endWindow-startWindow+1);
    result.shift();
    startWindow++;
    sorted = checkSorted(array, result, startWindow, endWindow);
  }
}
return smallestLength;
*/

const lengthSmallestSub = (array) => {
  let startWindow = 0;
  let endWindow = array.length - 1;
  let min = Infinity;
  let max = -Infinity;
  while (startWindow <= endWindow) {
    if (array[startWindow + 1] > array[startWindow]) {
      startWindow++;
    } else {
      break;
    }
  }

  while (startWindow <= endWindow) {
    if (array[endWindow - 1] < array[endWindow]) {
      endWindow--;
    } else {
      break;
    }
  }

  for (let i = startWindow; i <= endWindow; i++) {
    min = Math.min(min, array[i]);
    max = Math.max(max, array[i]);
  }

  for (let i = startWindow - 1; i >= 0; i--) {
    if (array[i] > min) {
      startWindow = i;
    }
  }
  for (let i = endWindow + 1; i < array.length; i++) {
    if (array[i] < max) {
      endWindow = i;
    }
  }
  return endWindow - startWindow + 1;
};
console.log(lengthSmallestSub([1, 2, 5, 3, 0, 12, 13, 8, 15, 18]));

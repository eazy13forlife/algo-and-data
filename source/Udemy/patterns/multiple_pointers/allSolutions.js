const pairEqualsTarget = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  let results = [];
  while (left < right) {
    if (array[left] + array[right] === target) {
      results.push(left, right);
      break;
    } else {
      if (array[left] + array[right] > target) {
        right--;
      } else if (array[left] + array[right] < target) {
        left++;
      }
    }
  }
  return results;
};

const removeDuplicates = (array) => {
  let left = 0;
  let right = 0;
  while (right < array.length) {
    if (array[left] === array[right]) {
      right++;
    } else if (array[left] !== array[right]) {
      left++;
      array[left] = array[right];
      right++;
    }
  }
  return left + 1;
};

const squaresOfAllNumbers = (array) => {
  const result = [];
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const leftValue = array[left] ** 2;
    const rightValue = array[right] ** 2;
    if (rightValue >= leftValue) {
      result.unshift(rightValue);
      right--;
    } else if (leftValue > rightValue) {
      result.unshift(leftValue);
      left++;
    }
  }
  return result;
};

const uniqueTriplets0 = (array) => {
  array.sort((a, b) => {
    return a - b;
  });
  const results = [];

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] === array[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = array.length - 1;
    let value = array[i];
    let sumOtherTwo = value * -1;

    while (left < right) {
      if (array[left] + array[right] === sumOtherTwo) {
        results.push([array[i], array[left], array[right]]);
        left++;
        while (array[left] === array[left - 1]) {
          left++;
        }
        right--;
        while (array[right] === array[right] + 1) {
          right--;
        }
      } else if (array[left] + array[right] > sumOtherTwo) {
        right--;
      } else if (array[left] + array[right] < sumOtherTwo) {
        left++;
      }
    }
  }
  return results;
};

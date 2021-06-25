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

//4 my favorite solution, easier for me to understand.
const tripletSumCloseTarget = (array, target) => {
  array.sort((a, b) => {
    return a - b;
  });
  let smallestDifference = Infinity;
  let smallestSum = Infinity;
  const result = [];
  for (let i = 0; i < array.length - 2; i++) {
    let number = array[i];
    let left = i + 1;
    let right = array.length - 1;
    let sumToTarget = target - number;
    while (left < right) {
      const tripletSum = array[i] + array[left] + array[right];
      result.push({
        array: [array[i], array[left], array[right]],
        sum: tripletSum,
        difference: Math.abs(target - tripletSum),
      });
      if (array[left] + array[right] === sumToTarget) {
        left++;
        right--;
        //or we could just return target since this is the closese sum to the target, hell it is the target.
      } else if (array[right] + array[left] > sumToTarget) {
        right--;
      } else if (array[right] + array[left] < sumToTarget) {
        left++;
      }
    }
  }

  //look in our results and find the smallest difference
  result.forEach((object) => {
    smallestDifference = Math.min(smallestDifference, object.difference);
  });

  //get all the objects with this same smallest difference and put them in newResult
  const newResult = result.filter((object, index) => {
    return object.difference === smallestDifference;
  });

  //if length is 1, we just return the sum of the item in there
  if (newResult.length === 1) {
    return newResult[0].sum;
  } else {
    // if length is not 1, we look at each object and find the smallest sum
    newResult.forEach((object) => {
      smallestSum = Math.min(smallestSum, object.sum);
    }); //we return the smallest sum
    return smallestSum;
  }
};

//4 alternate solution
const tripletSumCloseTarget = (array, target) => {
  array.sort((a, b) => {
    return a - b;
  });
  let smallestDifference = Infinity;
  for (let i = 0; i < array.length - 2; i++) {
    let number = array[i];
    let left = i + 1;
    let right = array.length - 1;
    let sumToTarget = target - number;
    while (left < right) {
      const currentDifference = target - array[i] - array[left] - array[right];
      if (array[left] + array[right] === sumToTarget) {
        return target;
      }

      if (Math.abs(currentDifference) < Math.abs(smallestDifference)) {
        smallestDifference = currentDifference;
      }

      if (
        Math.abs(currentDifference) < Math.abs(smallestDifference) ||
        (Math.abs(currentDifference) === Math.abs(smallestDifference) &&
          currentDifference > smallestDifference)
      ) {
        smallestDifference = currentDifference;
      }
      if (array[right] + array[left] > sumToTarget) {
        right--;
      } else if (array[right] + array[left] < sumToTarget) {
        left++;
      }
    }
  }
  return target - smallestDifference;
};

//5. my favorite way
function triplet_with_smaller_sum(array, target) {
  array.sort((a, b) => a - b);
  let result = 0;
  for (i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    let number = array[i];
    const sumToEqual = target - number;
    while (left < right) {
      //if current sum is less than sumToEqual then everything between left and Right will be smaller than sumToEqual, since we're in order. So result is currentResult+(right-left) and then we increase leftPointer to look for new smaller sums with this new position for leftPointer. We don't move right and put it at end of array like in previous function, we leave it. Because we decremented right  because sum was too big with it. So, now if we increment it again AND move the smaller left up, totalSum will be even bigger than before we decremented right, which is not what we want.
      if (array[right] + array[left] < sumToEqual) {
        result += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

//5 one way of doing it. If sum is less than the target, then we increment results,because we have a solution. But, whether it is less than or greater than or equal to target, we still need to decrement right pointer regardless, in order to see if we can find a smaller pair. And if left equals right, we need to move up left and replace rightPointer at the end of the array to compare new possibilities with the new left pointer for the same i index. But i fear this takes too much time, moving right to the end of the array each time, so solution above is better.
const tripletsWithSmallerSum = (array, target) => {
  array.sort((a, b) => {
    return a - b;
  });
  let results = 0;
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    let number = array[i];
    let sumToEqualTarget = target - number;
    while (left < right) {
      if (array[left] + array[right] < sumToEqualTarget) {
        results += 1;
      }
      right--;
      if (left === right) {
        left++;
        right = array.length - 1;
      }
    }
  }
  return results;
};

//6
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

    let tempList = [];

    for (let i = endWindow; i >= startWindow; i--) {
      tempList.unshift(array[i]);
      resultsArray.push(tempList.join("x").split("x"));
    }
  }
  return resultsArray;
};

//6 unorthodox way
const findSubarrays2 = (array, target) => {
  const result = [];
  const newResult = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i <= j) {
        result.push(array.slice(i, j + 1));
      }
    }
  }
  result.forEach((array) => {
    const product = array.reduce((total, number) => {
      return total * number;
    });
    if (product < target) {
      newResult.push(array);
    }
  });
  return newResult;
};

const dutch = (array) => {
  let left = 0;
  let right = array.length - 1;
  let i = 0;
  while (i <= right) {
    if (array[i] === 0) {
      swap(array, left, i);
      left++;
      i++;
    } else if (array[i] === 2) {
      swap(array, right, i);
      right--;
    } else {
      i++;
    }
  }
  return array;
};

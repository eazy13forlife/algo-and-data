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

console.log(tripletSumCloseTarget([-2, 0, 1, 2], 2));

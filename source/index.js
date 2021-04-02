/*
const getSumTriplet = (array, target) => {
  const resultArray = [];
  let neededSum;
  let minLength = Infinity;
  let sumResultsInMin;
  array.sort((a, b) => a - b);
  for (let i = 0; i <= array.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    const firstValue = array[i];

    if (firstValue >= 0) {
      neededSum = target - firstValue;
    } else {
      neededSum = target + firstValue * -1;
    }

    while (leftPointer < rightPointer) {
      const currentSum = array[leftPointer] + array[rightPointer];
      if (currentSum > neededSum) {
        rightPointer--;
        if (leftPointer === rightPointer) {
          resultArray.push(
            array[i] + array[leftPointer] + array[rightPointer + 1]
          );
        }
      } else if (currentSum < neededSum) {
        leftPointer++;
        if (leftPointer === rightPointer) {
          resultArray.push(
            array[i] + array[leftPointer - 1] + array[rightPointer]
          );
        }
      } else if (currentSum === neededSum) {
        return target;
      }
    }
    console.log(resultArray);
  }

  for (let i = 0; i < resultArray.length; i++) {
    let difference = array[i] > 0 ? target - array[i] : target + array[i] * -1;
    minLength = Math.min(minLength, difference);
    if (minLength === difference) {
      sumResultsInMin = resultArray[i];
    }
  }
  return sumResultsInMin;
};
*/

const getTripletSum = (array, target) => {
  array.sort((a, b) => a - b);
  const smallestDifference = Infinity;
  for (let i = 0; i < array.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    const firstValue = array[i];

    if (firstValue >= 0) {
      neededSum = target - firstValue;
    } else {
      neededSum = target + firstValue * -1;
    }
    while (leftPointer < rightPointer) {
      //so we have our targetNumber and we subtract all of our values to see the difference from the targetNumber. A difference of -1 and 1 is the same btw. So, we have to do Math.abs(targetDifference) later on.
      const targetDifference = target - (array[i] + array[left] + array[right]); // subtracting negative and positive is same. just subtract. Same with adding, just add.
      if (targetDifference === 0) {
        return target; //if the difference is 0,this sum is the exact same as the targetNumber, so  just return the sum of all the numbers, which is the target.
      }

      // here, we save the closest difference. A target difference of -1 and 1  is same. We use absolute value because the smallest differnec of -5 and 5 are the same in terms of difference.
      if (Math.abs(targetDifference) < Math.abs(smallestDifference)) {
        smallestDifference = targetDifference;
      }

      //if the target difference is less than the smallest diffrence, save that targetDifference, but if theyre equal then only save it when the targetDifference is greater than the smallestDifference without absolute value. So that when we return our sum, which is  target-smallestDifferece smallestDifference is equal to the larger sum, we will get a smaller sum
      if (
        Math.abs(targetDifference) < Math.abs(smallestDfference) ||
        (Math.abs(targetDfference) === Math.abs(smallestDifference) &&
          targetDifference > smallestDifference)
      ) {
        smallestDifference = targetDifference;
      }
    }
  }
  return target - smallestDifference;
};
console.log(getSumTriplet([-3, -1, 1, 2], 1));

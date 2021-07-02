const cycleCircularArray = (array) => {
  if (array.length <= 1) {
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    let slow = i;
    let fast = i;
    let isPositive = array[slow] > 0; //keep track of whether we can only have positive or negative movements for this iteration;
    while (true) {
      //circular array so fast will never hit null, so we need to break out of this loop when we feel its necessary to.
      slow = getNext(array, slow, isPositive); //move slow up one
      if (slow === false) {
        break;
      }
      fast = getNext(array, fast, isPositive); //move fast and return the nextindex
      if (fast === false) {
        break;
      }
      fast = getNext(array, fast, isPositive); //using the previous nextIndex, move fast again
      if (fast === false) {
        break;
      }
      if (slow === fast) {
        return true;
      }
    }
  }
  return false;
};

//function to get the next index, starting from a currentIndex;
const getNext = (array, currentIndex, direction) => {
  let nextIndex = currentIndex + array[currentIndex];

  if (nextIndex >= array.length) {
    nextIndex = nextIndex % array.length;
  } else if (nextIndex < 0) {
    const number = Math.abs(nextIndex) % array.length;
    if (number === 0) {
      nextIndex = 0;
    } else {
      nextIndex = array.length - number;
    }
  }
  const isPositive = array[nextIndex] >= 0;
  //if this nextIndex number isn't the same sign as what slow and start is starting out, we return false, because the cycle cannot contains both forward and backward movements.
  if (isPositive !== direction) {
    return false;
  }

  //if the nextIndex we jump to is equal to the currentIndex, then we return false, because the cycle should have more than one element.
  if (nextIndex === currentIndex) {
    return false;
  }

  return nextIndex;
};

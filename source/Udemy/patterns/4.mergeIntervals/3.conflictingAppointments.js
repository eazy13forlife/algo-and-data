const canAttend = (intervalsArray) => {
  intervalsArray.sort((a, b) => {
    return a[0] - b[0];
  });
  let currentStart = intervalsArray[0][0];
  let currentEnd = intervalsArray[0][1];
  for (let i = 1; i < intervalsArray.length; i++) {
    let interval = intervalsArray[i];
    //usually we do if interval start is less than or equal to new intervals end, because we are looking for overlap/intersection and we want to merge and two of the same numbers is an overlap/intersection. however from 4-5 and 5-6 is not conflicting, because after something ends from 4-5, you can go to the 5-6 time. So, this is why we only check if start is less than ends time. not start is less than or equal to ends time.
    if (interval[0] < currentEnd) {
      return false;
    } else {
      currentStart = interval[0];
      currentEnd = interval[1];
    }
  }
  return true;
};

console.log(
  canAttend([
    [4, 5],
    [2, 3],
    [3, 6],
  ])
);

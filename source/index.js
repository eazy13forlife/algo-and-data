class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const insertInterval = (intervalsArray, newInterval) => {
  const result = [];
  let index = 0;

  //add all the  intervals that have an end less than the start of the newInterval we're adding, to our results array. This means that it's less than our newInterval, so no overlap. Also lets increment index, so we know the index of where the next item begins.
  for (let i = 0; i < intervalsArray.length; i++) {
    if (intervalsArray[i][1] < newInterval[0]) {
      result.push(intervalsArray[i]);
      index++;
    }
  }

  //merge all intervals from the current index onwards that overlap with our newInterval to newInterval by changing the start and end of newInterval to account for the overlaps
  for (let i = index; i < intervalsArray.length; i++) {
    //if the start of the interval we are looking at is less than the end of the newInterval, then there is overlap. so we find the start and end of this overlap, which is what newInterval becomes.
    if (intervalsArray[i][0] <= newInterval[1]) {
      newInterval[0] = Math.min(intervalsArray[i][0], newInterval[0]);
      newInterval[1] = Math.max(intervalsArray[i][1], newInterval[1]);
      index++;
    }
  }

  //insert this newInterval that has all the overallping factored in
  result.push(newInterval);

  //insert the rest of the intervals from intervalsArray to our results. these intervals don't have a start that is less than or equal to newIntervals's end, so there wont be any overlap.
  for (let i = index; i < intervalsArray.length; i++) {
    result.push(intervalsArray[i]);
  }
  return result;
};

console.log(
  insertInterval(
    [
      [2, 3],
      [5, 7],
    ],
    [1, 4]
  )
);

//instead of having to deal with 0 or 1 for start and end and possibly getting confused that way,lets create a class, that pushes in an object with a start property and end property

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const mergeIntervals = (intervals) => {
  const results = [];
  //i create a newIntervals array so I can use my interval class that has a start and end property so it's easier to identify,so I wont have to do  0 and 1 index to refer to start and end each time. However, it doesn't matter.
  const newIntervals = [];

  //populate newIntervals array with the items in our current intervals array
  intervals.forEach((array, index) => {
    newIntervals.push(new Interval(array[0], array[1]));
  });

  //sort newIntervals array from lowest startTime to highest startTime because we want a.start<=b.start
  newIntervals.sort((a, b) => {
    return a.start - b.start;
  });

  //get the start and end of our firstInterval that is sorted,(this will be A).This will be the interval that we begin comparing to.
  let currentStart = newIntervals[0].start;
  let currentEnd = newIntervals[0].end;

  //for each interval after our sorted first interval that we are comparing to,
  for (let i = 1; i < newIntervals.length; i++) {
    const interval = newIntervals[i];
    //if the start of the interval we are looking at is less than the end of the interval we're comparing to, we have an overlap, so we adjust the end of the interval we're comparing to
    if (interval.start <= currentEnd) {
      currentEnd = Math.max(interval.end, currentEnd);
      //otherwise, this means that the interval we are currently looking at doesn't overlap with the interval we're comparing to, so we push in the interval we're comparing to to our results, essentially saying that interval is done, and  the new interval we are comparing to is the interval we are currently looking at.
    } else {
      results.push(new Interval(currentStart, currentEnd));
      currentStart = interval.start;
      currentEnd = interval.end;
    }
  }
  //when our loop is done, we need to make sure to push in the current interval we are comparing to,since there are no more elements to compare to it anymore. it is the finals interval
  results.push(new Interval(currentStart, currentEnd));
  console.log(results);
};

console.log(
  mergeIntervals([
    [7, 9],
    [2, 5],
    [1, 4],
  ])
);

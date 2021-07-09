const employeeFreeTime = (interval1, interval2) => {
  //combine the intervals and sort them from earliest start to latest start
  const allIntervals = [...interval1, ...interval2];
  allIntervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let currentStart = allIntervals[0][0];
  let currentEnd = allIntervals[0][1];
  let freeTime = [];
  //now we will take the first interval and look at the rest of the intervals to see if they overlap with this first interval.If they overlap, it means that interval, both will be working at some point, so is this is not a free interval where both arent working. If they don't overap, that means between our current overlap interval and the interval we are looking at, there is free time between them.
  for (let i = 1; i < allIntervals.length; i++) {
    let interval = allIntervals[i];
    //find if they overlap,if they do get the new end of the overlap, so at some point during this overalp interval, both employees will be working same time.
    if (interval[0] <= currentEnd) {
      currentEnd = Math.max(currentEnd, interval[1]);
      //if they dont that means the current overlap and this new interval don't overlap, so the space between then is free time where neither employee is working, so lets get the space between them and add it to freeTime array and then check to see what overlaps with this current interval
    } else {
      freeTime.push([currentEnd, interval[0]]);
      currentStart = interval[0];
      currentEnd = interval[1];
    }
  }
  return freeTime;
};

console.log(
  employeeFreeTime(
    [
      [1, 3],
      [5, 6],
    ],
    [
      [2, 3],
      [6, 8],
    ]
  )
);

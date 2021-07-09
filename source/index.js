class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

/*
const merge = (intervals) => {
  intervals.sort((a, b) => {
    return a.start - b.start;
  });
  let currentStart = intervals[0].start;
  let currentEnd = intervals[0].end;
  const results = [];
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= currentEnd) {
      currentEnd = Math.max(interval.end, currentEnd);
    } else {
      results.push(new Interval(currentStart, currentEnd));
      currentStart = interval.start;
      currentEnd = interval.end;
    }
  }
  results.push(new Interval(currentStart, currentEnd));
  return results;
};
*/

/*
const insert = (intervals, newInterval) => {
  console.log(newInterval);
  let index = 0;
  const results = [];
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.end < newInterval.start) {
      results.push(interval);
      index++;
    } else {
      break;
    }
  }

  for (let i = index; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= newInterval.end) {
      newInterval.start = Math.min(interval.start, newInterval.start);
      newInterval.end = Math.max(interval.end, newInterval.end);
      console.log(newInterval);
      index++;
    } else {
      break;
    }
  }
  results.push(newInterval);

  for (let i = index; i < intervals.length; i++) {
    results.push(intervals[i]);
  }
  return results;
};

*/

const intersection = (interval1, interval2) => {
  let i = interval1;
  let j = interval2;
  let results = [];
  while (i < interval.length && j < interval2.length) {
    let aoverlapsb =
      interval1[i].end >= interval2[j].start &&
      interval1[i].start <= interval2[j].end;
    let intersectionStart = Math.max(interval1[i].start, interval2[j].start);
    let intersectionEnd = Math.min(interval1[i].end, interval2[j].end);
    results.push(new Interval(intersectionStart, intersectionEnd));
    if (interval1[i].end < interval2[j].end) {
      i++;
    } else {
      j++;
    }
  }
  return results;
};
console.log(
  insert(
    [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
    new Interval(4, 6)
  )
);

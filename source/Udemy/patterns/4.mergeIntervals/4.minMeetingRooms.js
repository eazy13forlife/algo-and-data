//this is our bad binary heap
class Heap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.head.sort((a, b) => {
      //a-b is low to high and b-a is high to low, so we want the earliest end time to the highest end time for our min binary heap
      a[1] - b[1];
    });
  }
  extractMin() {
    this.heap.shift();
  }
}

//so, the minimum number of rooms is the number of meetings happening at the same time.
//so we will create a min binary heap that will hold all our current meetings going on at once, which means our answer is just the maximum size of this binary heap
//A meeting happens at the same time if the end of one interval is not before the start of another interval, so this means that they will need to be in different rooms
//so our min binary heap, which has the number of meetings going on at once, will have the earliest end time at the top and latest end times at the bottom, so that before we add interval to our heap, we check our earliest end time in the heap and if its shorter than the current interval, it means that meeting has finished, so we remove it. we keep doing this and when its not the case anymore, then we add our interval to the heap meaning this is the current meeetings going on. Everything finished has been removed.
//Why do we need a heap?can we look at all the end items in an array and remove the ones less than our interval for each interval? we could but we would do this repeatedly for one interval creating a huge big(0). so a min binary heap, which is 0(logn) for each removal and insert, is wayy better.

const minMeetingRooms = (intervalsArray) => {
  intervalsArray = intervalsArray.sort((a, b) => {
    return a[0] - b[0];
  });

  const heap = new Heap();
  //for sure we will need one room
  let roomsNeeded = 1;

  //lets add the first meeting to our heap
  heap.insert(intervalsArray[0]);

  //now, lets look at all the intervals after this loop and  poppulate our heap, which holds the current active meetings
  for (let i = 1; i < intervalsArray.length; i++) {
    let interval = intervalsArray[i];
    let heapFirstItem = heap.heap[0];
    //we begin by looking at our end times, which are sorted from lowest to highest and if the firstItem in our heap has an end less than or equal to our interval's start, it means the meeting is done,so we remove from heap. We keep doing this until we remove all the intervals from heap that have ended,because our heap contains current meetings happening.
    while (heap.heap.length > 0 && heapFirstItem[1] <= interval[0]) {
      heap.extractMin();
    }
    //then, we add in our interval to the heap because this is a current meeting happening
    heap.insert(interval);

    //roomsNeeded will equal the maximum number of meetings happening at once, which is just the length of our heap.
    roomsNeeded = Math.max(roomsNeeded, heap.heap.length);
  }
  return roomsNeeded;
};

/* bad solution
const minMeetingRooms = (intervalsArray) => {
  intervalsArray = intervalsArray.sort((a, b) => {
    return a[0] - b[0];
  });
  let result = -Infinity;
  let minimumRooms = 1;
  let start = intervalsArray[0][0];
  let end = intervalsArray[0][1];
  for (let i = 1; i < intervalsArray.length; i++) {
    let interval = intervalsArray[i];
    if (interval[0] < end) {
      start = Math.max(interval[0], start);
      end = Math.min(interval[1], end);
      minimumRooms += 1;
    } else {
      result = Math.max(result, minimumRooms);
      minimumRooms = 1;
      start = interval[0];
      end = interval[1];
    }
  }
  return result;
};
*/
console.log(
  minMeetingRooms([
    [4, 5],
    [2, 3],
    [2, 4],
    [3, 5],
  ])
);

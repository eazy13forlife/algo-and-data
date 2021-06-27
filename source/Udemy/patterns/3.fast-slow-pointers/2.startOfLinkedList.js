const lengthOfCycle = (head) => {
  let fast = head;
  let slow = head;
  // so the current fast needs to exists and its next needs to exist too. If it's next doesn't exist, then it is cleary not a cycle. and if the current fast doesn't exist, then its clearly not a cycle either.
  while (fast !== null && fast.next !== null) {
    //while(fast!==null) works as well
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      const meetingPoint = fast; //we could have used slow here as well. It doesn't matter
      let count = 1;
      let start = meetingPoint;
      //so while start.next does not equal the meeting point,we increase start and increment the count. if start.next equals the meeting point, this loop stops, meaning we dont increment count and start stays where it is.
      while (start.next !== meetingPoint) {
        start = start.next;
        count++;
      }
      return count;
    }
  }
  return false;
};

const startOfLoop = (head) => {
  const length = lengthOfCycle(head); //we could also let lenghOfCycle return the meetingPoint, as opposed to length, so we could set endPointer equal to that meetingPoint right away instead of having to do the i loop
  let startPointer = head;
  let endPointer = head;
  for (let i = 1; i <= length; i++) {
    endPointer = endPointer.next;
  }
  while (startPointer !== endPointer) {
    //so when this while loop sees that startPointer and endPointer are equal, thats when we stop the loop and either return startPointer or endPointer
    startPointer = startPointer.next;
    endPointer = endPointer.next;
  }
  return startPointer;
};

//this is a solution, but its 0(n) space complexity because we are using a string.
const palindrome2 = (head) => {
  let firstHalfWord = "";
  let secondHalfWord = "";
  let length = 0;
  let slow = head;
  let fast = head;
  let count = head;

  //find the length of our linked list
  while (count !== null) {
    length++;
    count = count.next;
  }

  //move fast and slow until slow gets to the middle and fast reaches end of list
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let leftIterator = head;
  let rightIterator;
  //if even length, then we want our rightIterator to include the node slow is on, so we can have an even left and right half, otherwise, we dont want rightIterator to include the node slow is on.
  if (length % 2 === 0) {
    rightIterator = slow;
  } else {
    rightIterator = slow.next;
  }

  while (leftIterator !== slow) {
    firstHalfWord += leftIterator.value;
    leftIterator = leftIterator.next;
  }

  while (rightIterator !== null) {
    secondHalfWord += rightIterator.value;
    rightIterator = rightIterator.next;
  }

  const secondHalfWordReversed = secondHalfWord.split("").reverse().join("");
  return firstHalfWord === secondHalfWordReversed;
};

//BETTER SOLUTION 0(1) space complexity;
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const palindrome = (head) => {
  let slow = head;
  let fast = head;
  while (head === null || head.next === null) {
    return true;
  }

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let headSecondHalf = reverse(slow);
  //we store the head of reversedPart, so we can reverse back ater, starting from this head.because the original headSecondHalf is going to iterate through list, so it will end up equaling something completely different by the end of the iteration.
  const copyHeadSecondHalf = headSecondHalf;

  //so we look at our current head and look at the head of the reversedPart, called headSecondHalf

  while (head !== null && headSecondHalf !== null) {
    if (head.value !== headSecondHalf.value) {
      reverse(copyHeadSecondHalf);
      return false;
    }
    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }

  if (
    (head === null && headSecondHalf === null) ||
    head === null ||
    headSecondHalf === null
  ) {
    reverse(copyHeadSecondHalf);
    return true;
  }
};

const reverse = (head) => {
  //takes the head and reverses everything starting from there to the end of the list. We get this new reversed head node back
  let prev = null;
  while (head !== null) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);
palindrome(head);

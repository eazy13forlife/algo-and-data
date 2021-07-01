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
const palindrome = (head) => {
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHead = reverse(slow);

  let secondHeadCopy = secondHead; //we store secondHead in secondHeadCopy because right now secondHead is the start of the reversed list,and as we iterate firstHead and secondHead secondHead will keep changing,but  at the end we need our list in its original form, so we want to call reverse with the original secondHead, not the secondHead thats been iterating and changing.

  let firstHead = head; //since we are going to be iterating both lists, firstHead and secondHead,if we dont store the original head inside firstHead and instead do  head=head.next, we will be setting the original head to equal something totally new in each iteration, which we don't want because the linkedList should be in its original form once the algorithm is finished. So, we store head in firstHead, so when we do firsthead=firstHead.next firstHead is equaling something new every iteration, and the originalHead keeps its same value in reference..

  while (firstHead !== null && secondHead !== null) {
    if (firstHead.value !== secondHead.value) {
      reverse(secondHeadCopy);
      return false;
    }
    firstHead = firstHead.next;
    secondHead = secondHead.next;
  }

  if (firstHead === null || secondHead === null) {
    reverse(secondHeadCopy);
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

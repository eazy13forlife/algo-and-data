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
      console.log(head);
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
    console.log(head);
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

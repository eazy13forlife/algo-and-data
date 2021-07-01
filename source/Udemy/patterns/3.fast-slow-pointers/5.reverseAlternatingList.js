class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const reorder = (head) => {
  if (head === null || head.next === null) {
    return;
  }

  let slow = head;
  let fast = head;
  let isEven = isEvenOrOdd(head);
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let secondHead = reverse(slow);
  //we put head in a new variable,firsthead, so we dont ever change the value of head,which is an object stored in reference. We can change the value of firstHead, but not head.
  let firstHead = head;

  while (true) {
    const firstHeadNext = firstHead.next;
    firstHead.next = secondHead;
    firstHead = firstHeadNext;
    if (isEven && secondHead.next === null) {
      return head;
    }

    const secondHeadNext = secondHead.next;
    secondHead.next = firstHead;
    secondHead = secondHeadNext;
    if (!isEven && firstHead.next === null) {
      return head;
    }
  }

  console.log(head);
};

const reverse = (head) => {
  let previous = null;
  while (head !== null) {
    const newNext = head.next;
    head.next = previous;
    previous = head;
    head = newNext;
  }
  return previous;
};

const isEvenOrOdd = (head) => {
  let currentHead = head;
  let count = 1;
  while (currentHead.next !== null) {
    currentHead = currentHead.next;
    count++;
  }
  if (count % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
console.log(reorder(head));

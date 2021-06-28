//brute force approach
const findMiddleIndex = (head) => {
  let start = head;
  let count = 0;
  while (start.next) {
    start = start.next;
    count++;
  }
  return Math.ceil(count / 2);
};

const getMiddleNode = (head) => {
  const middleIndex = findMiddleIndex(head);
  let specificNode = head;
  for (let i = 1; i <= middleIndex; i++) {
    specificNode = specificNode.next;
  }
  return specificNode;
};

//using slow and fast pointers;
const findMiddleNode = (head) => {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

const hasCycle = (head) => {
  let fast = head;
  let slow = head;
  // so the current fast needs to exist,otherwise we clearly don't have a cycle and its next needs to exist too(because if its next doesn't exist, when we move up 2 and do fast.next.next,it won't work because we can't do next of null).
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};

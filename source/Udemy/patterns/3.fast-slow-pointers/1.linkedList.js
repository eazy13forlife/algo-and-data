const hasCycle = (head) => {
  let fast = head;
  let slow = head;
  // so the current fast needs to exists and its next needs to exist too. If it's next doesn't exist, then it is cleary not a cycle. and if the current fast doesn't exist, then its clearly not a cycle either.
  while (fast !== null && fast.next !== null) {
    ///hile(fast!==null) works as well
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};

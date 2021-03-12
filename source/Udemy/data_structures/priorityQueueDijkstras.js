class PriorityQueueBasic {
  constructor() {
    this.values = [];
  }

  enqueue(vertex, priority) {
    this.values.push({ vertex, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

export default PriorityQueueBasic;

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertexEdge) => vertexEdge !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertexEdge) => vertexEdge !== vertex1
    );
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((vertexEdge) =>
      this.removeEdge(vertexEdge, vertex)
    );
    delete this.adjacencyList[vertex];
  }

  removeVertex2(vertex) {
    while (this.adjacencyList[vertex].length) {
      const vertexEdge = this.adjacencyList[vertex].pop();
      this.removeEdge(vertexEdge, vertex);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(startingVertex) {
    const resultArray = [];
    const visitedVertices = {};

    const depthFirstSearch = (vertex) => {
      if (!this.adjacencyList[vertex]) {
        return undefined;
      }

      resultArray.push(vertex);
      visitedVertices[vertex] = true;
      this.adjacencyList[vertex].forEach((vertexEdge) => {
        if (!visitedVertices[vertexEdge]) {
          depthFirstSearch(vertexEdge);
        }
      });
    };

    depthFirstSearch(startingVertex);
    return resultArray;
  }

  depthFirstIterative(startingVertex) {
    const resultArray = [];
    const inStack = { [startingVertex]: true };
    const stack = [startingVertex];
    while (stack.length) {
      const currentVertex = stack.pop();
      resultArray.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((vertexEdge) => {
        if (!inStack[vertexEdge]) {
          stack.push(vertexEdge);
          inStack[vertexEdge] = true;
        }
      });
    }
    return resultArray;
  }

  breadthFirstIterative(startingVertex) {
    const resultArray = [];
    const queue = [startingVertex];
    const inQueue = { [startingVertex]: true };

    while (queue.length) {
      const currentVertex = queue.shift();
      resultArray.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((vertexEdge) => {
        if (!inQueue[vertexEdge]) {
          queue.push(vertexEdge);
          inQueue[vertexEdge] = true;
        }
      });
    }
    return resultArray;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

g.removeEdge("A", "B");

console.log(g.depthFirstRecursive("A"));

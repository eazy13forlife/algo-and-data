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
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length !== 0) {
      const vertexEdge = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, vertexEdge);
    }
    delete this.adjacencyList[vertex];
  }
  /*
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((vertexEdge) =>
      this.removeEdge(vertexEdge, vertex)
    );
    delete this.adjacencyList[vertex];
  }
  */

  depthFirstRecursive(startingVertex) {
    const resultArray = [];
    const visitedVertices = {};
    const depthFirstSearch = (vertex) => {
      if (!this.adjacencyList[vertex].length) {
        return null;
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
    const stack = [startingVertex];
    const resultArray = [];
    const inStack = { [startingVertex]: true };
    while (stack.length) {
      let currentVertex = stack.pop();
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
    const resultsArray = [];
    const inQueue = { [startingVertex]: true };
    const queue = [startingVertex];
    while (queue.length) {
      const currentVertex = queue.shift();
      resultsArray.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((vertexEdge) => {
        if (!inQueue[vertexEdge]) {
          queue.push(vertexEdge);
          inQueue[vertexEdge] = true;
        }
      });
    }
    return resultsArray;
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
console.log(g.depthFirstRecursive("A"));
console.log(g.breadthFirstIterative("A"));

/*class Graph {
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
      (vertex) => vertex !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length !== 0) {
      const vertexEdge = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, vertexEdge);
    }
    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Miami");
g.addVertex("New York");
g.addVertex("Los Angeles");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Miami", "New York");
g.addEdge("Dallas", "Miami");
g.removeVertex("Dallas");
console.log(g);
*/

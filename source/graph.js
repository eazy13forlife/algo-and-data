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

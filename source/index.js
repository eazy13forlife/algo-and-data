import PriorityQueue from "../../algo-and-data/source/Udemy/data_structures/priorityQueue.js";

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ vertex: vertex2, weight: weight });
    this.adjacencyList[vertex2].push({ vertex: vertex1, weight: weight });
  }

  Dijkstras(startVertex, endVertex) {
    const distances = {};
    const previous = {};
    const path = [];
    const vertexQueue = new PriorityQueue();
    const vertices = Object.keys(this.adjacencyList);
    vertices.forEach((vertex) => {
      if (vertex !== startVertex) {
        distances[vertex] = Infinity;
        vertexQueue.enqueue(vertex, Infinity);
      } else {
        distances[vertex] = 0;
        vertexQueue.enqueue(vertex, 0);
      }
      previous[vertex] = null;
    });

    while (true) {
      // dequeue to get the vertex with the smallest distance from the start vertex
      let smallestVertex = vertexQueue.dequeue().value;
      // look at this vertex's edges to find the possibilities for the next smallest length
      if (smallestVertex === endVertex) {
        path.push(smallestVertex);
        while (previous[smallestVertex]) {
          path.push(previous[smallestVertex]);
          smallestVertex = previous[smallestVertex];
        }
        break;
      }
      this.adjacencyList[smallestVertex].forEach((vertexEdgeObject, index) => {
        //get the vertex and its weight and its current shortest distance from the startVertex
        const vertex = vertexEdgeObject.vertex;
        const vertexEdgeWeight = vertexEdgeObject.weight;
        const currentVertexDistance = distances[vertex];

        //get its new distance from the startVertex, which is weight of startVertex plus this vertices weight
        const newVertexDistance = distances[smallestVertex] + vertexEdgeWeight;
        if (newVertexDistance < currentVertexDistance) {
          distances[vertex] = newVertexDistance;
          previous[vertex] = smallestVertex;
          vertexQueue.enqueue(vertex, newVertexDistance);
        }
      });
    }

    return path.reverse();
  }
}

const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
console.log(g.Dijkstras("A", "E"));

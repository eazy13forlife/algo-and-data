import PriorityQueueBasic from "./priorityQueueDijkstras.js";

/*
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
*/
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

  Dijkstra(startVertex, endVertex) {
    const visitedVertices = [];
    const verticesQueue = new PriorityQueueBasic();
    const distances = {};
    const previous = {};
    // build up initial state

    const keys = Object.keys(this.adjacencyList);
    const values = Object.values(this.adjacencyList);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === startVertex) {
        distances[keys[i]] = 0;
        verticesQueue.enqueue(keys[i], 0);
      } else {
        distances[keys[i]] = Infinity;
        verticesQueue.enqueue(keys[i], Infinity);
      }
      previous[keys[i]] = null;
    }

    //we run a while loop as long as our verticesQueue is not empty
    while (verticesQueue.values.length) {
      const shortestPathVertex = verticesQueue.dequeue().vertex;
      if (shortestPathVertex === endVertex) {
        //we are done
        //we need to build path
      }

      if (shortestPathVertex || distances[shortestPathVertex] !== Infinity) {
        this.adjacencyList[shortestPathVertex].forEach((vertexEdge) => {
          //calculate the new distance to the vertexEdge from our shortestPathVertex
          let newLength =
            distances[shortestPathVertex] + distances[vertexEdge.weight];
            //so distances tells us the length of each vertex. so if newlength is less than distances[vertexedge.node] vertexEdge is an object, but we just the actual vertex
            if(newLength<distances[vertexEdge.node])
        });
      }
    }
    /*
    for (let vertex in this.adjacencyList) {
      if (vertex === startVertex) {
        distances[vertex] = 0;
      } else {
        distances[vertex] = Infinity;
      }
    }
    */
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
g.Dijkstra("A", "E");

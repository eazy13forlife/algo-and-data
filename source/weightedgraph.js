import PriorityQueue from "./priorityQueue.js";

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex() {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ vertex: vertex2, weight: weight });
    this.adjacencyList[vertex2].push({ vertex: vertex1, weight: weight });
  }

  Dijkstra(startVertex, endVertex) {
    const path = [];
    const vertexQueue = new PriorityQueue();
    // tells us the distance of each vertex from the startVertex
    const distances = {};
    const previous = {};

    // build up initial state

    const keys = Object.keys(this.adjacencyList);

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === startVertex) {
        distances[keys[i]] = 0;
        vertexQueue.enqueue(keys[i], 0);
      } else {
        distances[keys[i]] = Infinity;
        // might remove this
        vertexQueue.enqueue(keys[i], Infinity);
      }
      previous[keys[i]] = null;
    }

    // we run a while loop which we will manually break out of.
    while (true) {
      let shortestPathVertex = vertexQueue.dequeue().value;
      // if shortestPathVertex is equal to the endVertex, we dont look at the neighbors of the shortestpathvertex. we are already at the end vertex that we need to be at.and this shortestpathvertex was already a neighbor of something else, so we already have its shortes distance from the startvertex. Because of this, we are done and we can just in return our path
      if (shortestPathVertex === endVertex) {
        while (previous[shortestPathVertex]) {
          path.push(shortestPathVertex);
          shortestPathVertex = previous[shortestPathVertex];
        }
        // we are done, so we break just in case there are more vertices after our end vertex. we don't want to look at those ones
        break;
      }

      this.adjacencyList[shortestPathVertex].forEach((vertexObject) => {
        const vertexEdge = vertexObject.vertex;
        const vertexEdgeWeight = vertexObject.weight;
        // calculate the new distance to the vertexEdge from our startVertex. Since the first item to be dequeued from our vertexQueue is the startVertex, any of startingVertex' neighbors distance will include the distance from the startVertex and then their neighbor's neighbors will also include this distance from the startVertex as well
        const newDistance = distances[shortestPathVertex] + vertexEdgeWeight;
        if (newDistance < distances[vertexEdge]) {
          // updating the  distance of our vertexEdge to be this new smaller distance.
          distances[vertexEdge] = newDistance;
          // update the previous property of our vertexEdge to be the shortestPathVertex, because we know if this is the new shortest distance from our startVertex to get to this vertextEdge, then its previous is shortestPathVertex.
          previous[vertexEdge] = shortestPathVertex;
          // enqueue in priority queue with the new priority. Yes, there will be duplicate keys, since we are not updating our keys in the queue with its new priorities, but it doesnt matter. The smaller priorities will always be dequeued first, which could then create a new shortest distance for its edges, preventing the same key with a larger priority to do so.
          vertexQueue.enqueue(vertexEdge, newDistance);
        }
      });
    }
    console.log(path.concat(startVertex).reverse());
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

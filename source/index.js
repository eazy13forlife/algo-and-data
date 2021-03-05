import PriorityQueue from "./priorityQueue.js";
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
    const path = [];
    const distance = {};
    const previous = {};
    const confirmedShortest = {};
    const priorityQueue = new PriorityQueue();

    const vertices = Object.keys(this.adjacencyList);
    for (let i = 0; i < vertices.length; i++) {
      if (vertices[i] === startVertex) {
        distance[vertices[i]] = 0;
        previous[vertices[i]] = null;
        priorityQueue.enqueue(vertices[i], 0);
      } else {
        distance[vertices[i]] = Infinity;
        previous[vertices[i]] = undefined;
        priorityQueue.enqueue(vertices[i], Infinity);
      }
    }
    while (true) {
      let shortestPathVertex = priorityQueue.dequeue().value;
      confirmedShortest[shortestPathVertex] = true;
      if (shortestPathVertex === endVertex) {
        while (previous[shortestPathVertex]) {
          path.push(shortestPathVertex);
          shortestPathVertex = previous[shortestPathVertex];
        }
      } else {
        this.adjacencyList[shortestPathVertex].forEach((vertexEdgeObject) => {
          if (!confirmedShortest[vertexEdgeObject.vertex]) {
            const vertexEdge = vertexEdgeObject.vertex;
            const vertexEdgeWeight = vertexEdgeObject.weight;
            let newDistance = distance[shortestPathVertex] + vertexEdgeWeight;
            if (newDistace < distance[vertexEdge]) {
              distance[vertexEdge] = newDistance;
              previous[vertexEdge] = shortestpathVertex;
              priorityQueue.enqueue(vertexEdge, newDistance);
            }
          }
        });
      }
    }
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
console.log(g.Dijkstra("A", "E"));

/*
Dijkstra(startVertex, endVertex) {
  const path = [];
  const confirmedShortest = {};
  const priorityQueue = new PriorityQueue();
  const distances = {};
  const previous = {};

  const keys = Object.keys(this.adjacencyList);
  for (let i = 0; i < keys.length; i++) {
    // if the first key is the startVertex
    if (keys[i] === startVertex) {
      // set its property in the distances object equal to 0 since the distance from startvertex to startVertex is 0
      distances[keys[i]] = 0;
      // set its property in the previous object equal to null, since nothing comes before the startVertex, there is no value;
      previous[keys[i]] = null;
      // add this startVertex to our priorityQueue and give it a weight of 0,(we will add all our vertices in here with their correct shortest distance from A, so that our priorityQueue which uses a binary heap will bubble shortest distance to the top)
      priorityQueue.enqueue(keys[i], 0);
    } else {
      // every other vertex has a beginning shortest distance from A of infinity
      distances[keys[i]] = Infinity;
      // every other vertex has a previous value of undefined, since we dont know yet
      previous[keys[i]] = undefined;
      // we will put every other vertex in our priorityqueue as well, but with a weight of Infinity.
      priorityQueue.enqueue(keys[i], Infinity);
    }
  }
  while (true) {
    // lets find the vertex with the shortest distance,which initially will just be the startVertex, because it has a distance of 0 to itself.
    let shortestPathVertex = priorityQueue.dequeue().value;
    if (shortestPathVertex === endVertex) {
      while (previous[shortestPathVertex]) {
        path.push(shortestPathVertex);
        shortestPathVertex = previous[shortestPathVertex];
      }
      break;
    }

    // for each of the shortest path's neighbors(vertexEdge's)
    this.adjacencyList[shortestPathVertex].forEach((vertexEdgeObject) => {
      // we want to find the vertexEdge and its weight
      const vertexEdge = vertexEdgeObject.vertex;
      const vertexEdgeWeight = vertexEdgeObject.weight;

      // find the distance from the current shortestPathVertex,which initially has a distance of 0(because it is the startvertex), to its vertexEdge. And remember, newDistance ends up becoming the distance of the vertexEdge in the distances object (if it is indeed the smallest distance from the startVertex) so that means the VertexEdge will always be working with its current smallest distance  from the startVertex
      let newDistance = distances[shortestPathVertex] + vertexEdgeWeight;

      // if this distance,(which is initially the startVertex(0)+ its neghbors weight) is less than the original distance of that vertexEdge(which is originally Infinity in the distances object),
      if (newDistance < distances[vertexEdge]) {
        // set the new distance of the vertexEdge in the distances obejct equal to this new distance, so we can correctly dequeue the next shortest distance from the startVertex next time
        distances[vertexEdge] = newDistance;
        // set the previous property of that vertexEdge to be the shortestPathVertex, meaning the shortest path from the startVertex to that vertexEdge is through that shortestPathVertex
        previous[vertexEdge] = shortestPathVertex;
        // add this vertexEdge and its new distance to the priorityQueue, which will bubble up over its previous one where it had a distance of Infinity originally. so when we dequeue, if this is the new shortest distance, it will be the one returned to us.
        priorityQueue.enqueue(vertexEdge, newDistance);
      }
    });
  }
  // we have to add the startVertex because previous[startVertex] doest exist so our code above doesnt push it into our path array. Then we reverse so we get the correct order from startVertex to endVertex as opposed to other way.
  return path.concat(startVertex).reverse();
}
*/

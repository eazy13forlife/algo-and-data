class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // so we are using an adjacencyList to create our graph. So each key in our adjacencyList is a vertex and the value is an array of all its edges. Thus, when adding a vertex, we check if that key exists. If it does, we don't do anything, otherwise, we will set that key equal to an empty array
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Since we are creating an undirected graph, meaning all edges are bidrectional,(they go both ways) we add each vertex to the other vertex's array of edges, because  they share the same bidirectional connection.
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // removeEdge takes in two vertices,vertex1 and vertex2 and removes the edge between them. Remember, we are working with an undirected graph, meaning all edges are bidrectional. It looks at vertex1 and removes vertex2 from its list of edges. It then looks at vertex2 and removes vertex1 from its list of edges. Now, both of these vertices no longer share an edge. We can use filter method in order to get a new array with items we dont want removed from it. So, lets look at everything in the adjacencyList for vertex1 and if it includes vertex2, we return false,so now the filter method doesn't include vertex2 in the new array it returns to us. Then we do the same for vertex2
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex1
    );
  }

  // to remove a vertex from our adjacencyList, we first need to find that vertex in our adjacencyList. Now, we look at all of its edges, and since an undirected graph is bidirectional, each of its edges also has this vertex that we want to remove as one of their edges. So for each edge that the vertex we want to remove shares, we remove the connection between that edge and this vertex using our removeEdge function above, which removes both connections, since an undirected graph is biderectional. Once every edge connection has been removed between the vertex we want to remove and the edges it shares, we just delete the vertex we want to remove from our adjacencyList.
  removeVertex(vertex) {
    // while there are still edges for this vertex in our adjacencyList
    while (this.adjacencyList[vertex].length !== 0) {
      // we find the last edge and remove it as well(we're going to have to remove it at some point, might as well do it now)
      const vertexEdge = this.adjacencyList[vertex].pop();
      // we remove itss connection with the vertex we want to remove using our removeEdge function, which removes both connections since our graph is undirected.
      this.removeEdge(vertex, vertexEdge);
    }
    // finally, we delete this vertex from our adjacencyList
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

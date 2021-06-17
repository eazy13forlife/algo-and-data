class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      return undefined;
    }
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  //this works but it is 0(n2). only data structure that should have o(n2) is hashtable when we are looking for a specific value
  removeVertex2(vertex) {
    //we get all the keys
    const keys = Object.keys(this.adjacencyList);
    //we loop through each key
    for (let i = 0; i < keys.length; i++) {
      //for each key we want to loop through all the items in the array for that key, that is why we do this.adjacencyList[key[i]].length
      for (let j = 0; j < this.adjacencyList[keys[i]].length; j++) {
        //we see if that item equals the vertex and we remove it in place
        if (this.adjacencyList[keys[i]][j] === vertex) {
          this.adjacencyList[keys[i]].splice(j, 1);
        }
      }
    }
    //then we want to actually delete that vertex from our adjacencyList
    delete this.adjacencyList[vertex];
  }
  removeEdge(vertex1, vertex2) {
    const newVertex1Value = this.adjacencyList[vertex1].filter(
      (item, index) => {
        if (item !== vertex2) {
          return true;
        }
      }
    );

    const newVertex2Value = this.adjacencyList[vertex2].filter(
      (edge, index) => {
        if (edge !== vertex1) {
          return true;
        }
      }
    );
    this.adjacencyList[vertex1] = newVertex1Value;
    this.adjacencyList[vertex2] = newVertex2Value;
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const edgeRemoved = this.adjacencyList[vertex].pop();
      this.removeEdge(edgeRemoved, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstSearch(startingVertex) {
    const results = [];
    const visited = {};
    const addToResults = (vertex) => {
      if (!this.adjacencyList[vertex].length) {
        return null;
      }
      results.push(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach((edge, index) => {
        if (!visited[edge]) {
          addToResults(edge);
        }
      });
    };
    addToResults(startingVertex);
    return results;
  }
  breadthFirstSearch(vertex) {
    queue = [vertex];
    const inQueue = { [vertex]: true };
    const results = [];
    while (queue.length) {
      const firstVertex = queue.shift();
      results.push(firstVertex);
      this.adjacencyList[firstVertex].forEach((edge, index) => {
        if (!inQueue[edge]) {
          queue.push(edge);
          inQueue[edge] = true;
        }
      });
    }
    return results;
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

console.log(g);
console.log(g.depthFirstSearch("B"));

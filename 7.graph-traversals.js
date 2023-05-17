class Graph {
    constructor() {
      this.vertices = {};
    }
  
    addVertex(vertex) {
      if (!this.vertices[vertex]) {
        this.vertices[vertex] = [];
      }
    }
  
    addEdge(source, destination) {
      if (this.vertices[source] && this.vertices[destination]) {
        this.vertices[source].push(destination);
        this.vertices[destination].push(source);
      }
    }
  
    removeVertex(vertex) {
      if (this.vertices[vertex]) {
        while (this.vertices[vertex].length) {
          const adjacentVertex = this.vertices[vertex].pop();
          this.removeEdge(vertex, adjacentVertex);
        }
        delete this.vertices[vertex];
      }
    }
  
    removeEdge(source, destination) {
      if (
        this.vertices[source] &&
        this.vertices[destination] &&
        this.vertices[source].includes(destination) &&
        this.vertices[destination].includes(source)
      ) {
        this.vertices[source] = this.vertices[source].filter(
          (vertex) => vertex !== destination
        );
        this.vertices[destination] = this.vertices[destination].filter(
          (vertex) => vertex !== source
        );
      }
    }
  
    hasEdge(source, destination) {
      return (
        this.vertices[source] &&
        this.vertices[destination] &&
        this.vertices[source].includes(destination) &&
        this.vertices[destination].includes(source)
      );
    }
  
    getNeighbors(vertex) {
      return this.vertices[vertex] || [];
    }
  
    // Breadth-First Search (BFS)
    bfs(startingVertex) {
      const visited = {};
      const queue = [];
  
      visited[startingVertex] = true;
      queue.push(startingVertex);
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        console.log(currentVertex);
  
        const neighbors = this.getNeighbors(currentVertex);
        for (const neighbor of neighbors) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
    }
  
    // Depth-First Search (DFS)
    dfs(startingVertex) {
      const visited = {};
      this.dfsUtil(startingVertex, visited);
    }
  
    dfsUtil(vertex, visited) {
      visited[vertex] = true;
      console.log(vertex);
  
      const neighbors = this.getNeighbors(vertex);
      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          this.dfsUtil(neighbor, visited);
        }
      }
    }
  }
  
  // Example graph:
  const graph = new Graph();
  
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("B", "E");
  graph.addEdge("C", "E");
  graph.addEdge("D", "F");
  graph.addEdge("E", "F");
  
  console.log("BFS traversal:");
  graph.bfs("A");
  // Output: A, B, C, D, E, F
  
  console.log("DFS traversal:");
  graph.dfs("A");
  // Output: A, B, D, F, E, C
  
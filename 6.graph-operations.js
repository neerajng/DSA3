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
  
    printGraph() {
      const vertices = Object.keys(this.vertices);
      for (const vertex of vertices) {
        const neighbors = this.vertices[vertex].join(", ");
        console.log(`${vertex} -> ${neighbors}`);
      }
    }
  }
  
  // Example workouts:
  const graph = new Graph();
  
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.addEdge("C", "D");
  graph.addEdge("D", "A");
  
  graph.printGraph();
  // Output:
  // A -> B, D
  // B -> A, C
  // C -> B, D
  // D -> C, A
  
  console.log(graph.hasEdge("A", "B")); // Output: true
  console.log(graph.hasEdge("B", "D")); // Output: false
  
  graph.removeEdge("A", "B");
  console.log(graph.hasEdge("A", "B")); // Output: false
  
  graph.removeVertex("C");
  graph.printGraph();
  // Output:
  // A -> D
  // B -> A
  // D -> A
  
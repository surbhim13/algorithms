class Graph {
  constructor(n) {
    this.vertices = n;
    this.adjList = new Array(n);
    for (let i = 0; i < n; i++) {
      this.adjList[i] = [];
    }
  }
  addEdge(u, v, w) {
    this.adjList[u].push({ v: v, weight: w });
  }

  topologicalSortUtil(v, visited, stack) {
    visited[v] = true;
    for (let i = 0; i < this.adjList[v].length; i++) {
      //if node is already not visited
      if (!visited[this.adjList[v][i]["v"]]) {
        this.topologicalSortUtil(this.adjList[v][i]["v"], visited, stack);
      }
    }
    stack.push(v);
  }

  shortestPath(s) {
    let stack = [];
    let dist = new Array(this.vertices);
    let visited = new Array(this.vertices).fill(false);
    for (let i = 0; i < this.vertices; i++) {
      if (visited[i] == false) this.topologicalSortUtil(i, visited, stack);
    }

    for (let i = 0; i < this.vertices; i++) {
      dist[i] = Number.MAX_SAFE_INTEGER;
    }
    dist[s] = 0;

    while (stack.length > 0) {
      let u = stack.pop();
      if (dist[u] != Number.MAX_SAFE_INTEGER) {
        for (let i = 0; i < this.adjList[u].length; i++) {
          let node = this.adjList[u][i]["v"];
          let weight = this.adjList[u][i]["weight"];
          if (dist[node] > dist[u] + weight) {
            dist[node] = dist[u] + weight;
          }
        }
      }
    }

    return dist;
  }
}

module.exports = Graph;

const Graph = require("./Graph");

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  let G = new Graph(N);
  for (let i = 0; i < times.length; i++) {
    G.addEdge(times[i][0] - 1, times[i][1] - 1, times[i][2]);
  }
  let shortestDist = G.shortestPath(K - 1);
  let time = Math.max(...shortestDist);
  return time;
};

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1]
    ],
    4,
    2
  )
);

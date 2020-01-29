/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

//Intution to solve the problem
//Define dp[i] as minimum cost at any day i
// we can arrive at dp[i] by buying a day pass of cost1 after having been bought passes till dp[i-1]
// => dp[i] = min { dp[i - j] + cost1 } for j from 1 to 1
// or we can arrive at dp[i] by buying 7 day pass of cost2 with minimum value of dp[i-1], dp[i-2], dp[i-3]... dp[i-7]
// => dp[i] = min { dp[i - j] + cost2 } for j from 1 to 7
// or we can arrive at dp[i] by buying 30 day pass of cost3 with minimum value of dp[i-1],dp[i-2]....dp[i-30];
// => dp[i] = min { dp[i - j] + cost3 } for j from 1 to 30
// compute dp[i] as minimum of above three combinations

var mincostTickets = function(days, costs) {
  //initial setup of tickets with costs;
  const tickets = createTickets(costs);
  //get last day
  const lastDay = days[days.length - 1];
  //convert days array into a Set for constant search
  const daysSet = new Set(days);

  //initiliase dp array with 1+number of days
  const dp = new Array(lastDay + 1).fill(Number.MAX_SAFE_INTEGER);

  //base case where no ticket can be bought
  dp[0] = 0;

  for (let i = 1; i <= lastDay; i++) {
    //if I don't travel for the day - just return the previous day count so far
    if (!daysSet.has(i)) {
      dp[i] = dp[i - 1];
    } else {
      //get minimum of all three possible costs
      for (const [validDays, cost] of tickets) {
        dp[i] = Math.min(
          dp[i],
          (dp[i - validDays] >= 0 ? dp[i - validDays] : 0) + cost
        );
      }
    }
  }
  return dp[lastDay];
};

function createTickets(costs) {
  const [c1, c7, c30] = costs;
  const tickets = [
    [1, c1],
    [7, c7],
    [30, c30]
  ];
  return tickets;
}

module.exports = mincostTickets;

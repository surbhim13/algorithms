#Algorithm

Starting Triangle

> Define dp[i] as minimum cost on ending my travel at day i

1. If you are not travelling on day i, then there is no additional cost, just return the previous day cost, this will also take care of cases of not travelling for contiguous days

```js
dp[i] = dp[i - 1];
```

2. If you are travelling on day i, there could be multiple possibilities, you can arrive at dp[i] by buying a day pass of cost1 after having been bought passes till dp[i-1]

```js
dp[i] = min { dp[i - j] + cost1 } for j from 1 to 1
```

=>

> // or we can arrive at dp[i] by buying 7 day pass of cost2 with minimum value of dp[i-1], dp[i-2], dp[i-3]... dp[i-7]
> // => dp[i] = min { dp[i - j] + cost2 } for j from 1 to 7
> // or we can arrive at dp[i] by buying 30 day pass of cost3 with minimum value of dp[i-1],dp[i-2]....dp[i-30];
> // => dp[i] = min { dp[i - j] + cost3 } for j from 1 to 30
> // compute dp[i] as minimum of above three combinations

![Leetcode solution screenshot](/leetcodescreenshot.png)

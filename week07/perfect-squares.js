/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)

  dp[0] = 0

  for (let i = 0; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i - j * j] + 1, dp[i])
    }
  }

  return dp[n]
}

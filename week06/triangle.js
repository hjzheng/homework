/**
 * @param {number[][]} triangle
 * @return {number}
 */
// dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + a[i][j]
// 自底向上

var minimumTotal = function (triangle) {
  let rows = triangle.length

  let dp = Array.from(new Array(rows - 1), () => new Array(rows).fill(null))

  dp.push(triangle[rows - 1])

  for (let i = rows - 2; i >= 0; i--) {
    for (let j = rows - 1; j >= 0; j--) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
    }
  }

  return dp[0][0]
}

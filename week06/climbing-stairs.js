/**
 * @param {number} n
 * @return {number}
 */
// f(n) = f(n-1) + f(n-2)

var climbStairs = function (n) {
  if (n <= 2) return n

  let f1 = 1,
    f2 = 2,
    f3 = null

  for (let i = 3; i <= n; i++) {
    f3 = f1 + f2
    f1 = f2
    f2 = f3
  }

  return f3
}

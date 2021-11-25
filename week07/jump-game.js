/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 是否可以到达当前位置, 可以到达，那就取这个区间里可以到达的最远位置，否则，最远只能到上一个位置
// dp[i] = dp[i-1] >= i ? Math.max(dp[i-1], nums[i] + i) : dp[i-1]

var canJump = function (nums) {
  if (nums.length === 1) return true
  if (nums[0] >= nums.length - 1) return true

  let dp = [nums[0]]

  for (let i = 1; i < nums.length - 1; i++) {
    dp[i] = dp[i - 1] >= i ? Math.max(dp[i - 1], nums[i] + i) : dp[i - 1]

    if (dp[i] >= nums.length - 1) return true
  }

  return false
}

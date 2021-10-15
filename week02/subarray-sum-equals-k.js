/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0
  let n = nums.length
  let s = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    s[i] = s[i - 1] + nums[i - 1]
  }

  const mp = new Map()

  mp.set(0, 1)

  for (let i = 1; i <= n; i++) {
    if (mp.has(s[i] - k)) {
      count += mp.get(s[i] - k)
    }

    if (mp.has(s[i])) {
      mp.set(s[i], mp.get(s[i]) + 1)
    } else {
      mp.set(s[i], 1)
    }
  }
  return count
}

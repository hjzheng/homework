/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = []

  nums.sort((a, z) => a - z)

  function helper(level, nums, sub, visited) {
    // visited 存索引
    if (level >= nums.length) {
      res.push(sub)
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !visited.has(i - 1)) continue

      if (visited.has(i)) continue

      visited.add(i)
      helper(level + 1, nums, [...sub, nums[i]], visited)
      visited.delete(i)
    }
  }

  helper(0, nums, [], new Set())

  return res
}

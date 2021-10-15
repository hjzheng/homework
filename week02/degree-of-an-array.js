/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let map = new Map() // 统计元素个数
  let startMap = new Map() // 记录元素开始位置
  let dMap = new Map() // 统计元素的度
  let max = 0 // 保存元素最大个数

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
      dMap.set(num, i - startMap.get(num) + 1)
    } else {
      map.set(num, 1)
      startMap.set(num, i)
    }

    max = Math.max(max, map.get(num))
  }

  let items = []

  for (let [key, value] of map) {
    if (value === max) {
      items.push(key)
    }
  }

  return Math.min(...items.map(i => (dMap.get(i) ? dMap.get(i) : 1)))
}

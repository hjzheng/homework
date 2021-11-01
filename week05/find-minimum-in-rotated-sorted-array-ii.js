/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1

  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] < nums[right]) {
      right = mid
    } else if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      // 重复元素
      right--
    }
  }

  return nums[right]
}

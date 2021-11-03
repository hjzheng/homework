/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  // days: 总共有 days 天时间, shipWeight: 船的承重
  function validate(weights, days, shipCapacityWeight) {
    let needDay = 1,
      totalPackageWeight = 0

    for (const weight of weights) {
      // 连续累积的 package 小于总重船的最大承重
      if (totalPackageWeight + weight <= shipCapacityWeight) {
        totalPackageWeight += weight
      } else {
        // 当天运送不完，需要多一天，totalPackageWeight 加当天package重量
        needDay++
        totalPackageWeight = weight
      }
    }

    return needDay <= days
  }

  let left = 0,
    right = 0
  for (const weight of weights) {
    left = Math.max(left, weight)
    right += weight
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    if (validate(weights, days, mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return right
}

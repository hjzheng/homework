/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length,
    temp = 0 // 是否进位, 默认无

  for (let i = len - 1; i >= 0; i--) {
    let curr = temp + digits[i]

    if (i === len - 1) {
      // 加 1
      curr += 1
    }

    if (curr >= 10) {
      // 超过10，需要进位
      digits[i] = curr % 10
      temp = 1
    } else {
      // 无需进位
      digits[i] = curr
      temp = 0
    }
  }

  // 说明还需要进位 例如 [9] + 1 => [1, 0]
  if (temp === 1) {
    digits.unshift(1)
  }

  return digits
}

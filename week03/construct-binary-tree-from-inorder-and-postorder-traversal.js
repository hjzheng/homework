/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  function build(l1, r1, l2, r2) {
    if (l2 > r2) return null

    let root = new TreeNode(postorder[r2])

    let mid = l1

    while (inorder[mid] !== root.val) mid++

    // 左子数 l1 ~ mid - 1
    // 右子数 mid + 1 ~ r1 (利用右边)

    // r2 - r1 + mid

    root.left = build(l1, mid - 1, l2, r2 - r1 + mid - 1)
    root.right = build(mid + 1, r1, r2 - r1 + mid, r2 - 1)

    return root
  }

  return build(0, inorder.length - 1, 0, postorder.length - 1)
}

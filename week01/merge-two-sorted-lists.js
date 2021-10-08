/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let h1 = l1,
    h2 = l2,
    header = new ListNode(-101),
    preHeader = header

  while (h1 !== null && h2 !== null) {
    if (h1.val >= h2.val) {
      header.next = h2
      h2 = h2.next
    } else {
      header.next = h1
      h1 = h1.next
    }

    header = header.next
  }

  header.next = h1 === null ? h2 : h1

  return preHeader.next
}

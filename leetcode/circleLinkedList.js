/**141. 环形链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false
  var fastNode = head
  var slowNode = head
  while (fastNode && fastNode.next) {
    fastNode = fastNode.next.next
    slowNode = slowNode.next
    if (fastNode === slowNode) {
      return true
    }
  }
  return false
};

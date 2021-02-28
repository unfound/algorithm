/** 24. 两两交换链表中的节点
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  var curr = head
  var next = head && head.next
  var prev = null
  while (curr && next) {
    const nnext = next.next
    curr.next = next.next
    next.next = curr
    if (prev) {
      prev.next = next
    } else {
      head = next
    }
    prev = curr
    curr = nnext
    next = nnext && nnext.next
  }

  return head
};

var swapPairs2 = function(head) {
  var myHead = new ListNode(0)
  myHead.next = head
  var prev = myHead
  while (prev.next && prev.next.next) {
    var node1 = prev.next
    var node2 = prev.next.next
    node1.next = node2.next
    node2.next = node1
    prev.next = node2
    prev = node1
  }

  return myHead.next
};

var swapPairs3 = function (head) {
  if (!head || !head.next) {
    return head
  }

  var next = head.next
  head.next = swapPairs3(next.next)
  next.next = head
  return next
};

/**
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
var reverseList = function(head) {
  if (!head) return head
  var prevNode = null
  while (head.next) {
    var nextNode = head.next
    head.next = prevNode
    prevNode = head
    head = nextNode
  }
  head.next = prevNode
  return head
};

var reverseListDouble = function (head) {
  var curr = head
  var prev = null
  while (curr) {
    var nextNode = curr.next
    curr.next = prev
    prev = curr
    curr = nextNode
  }
  return prev
}

var reverseList2 = function(head) {
  if (!head) return head
  function reverse (node, nextNode) {
    if (!nextNode) return node
    var nnextNode = nextNode.next
    nextNode.next = node
    return reverse(nextNode, nnextNode)
  }
  return reverse(null, head)
};

var reverseList2Single = function (head) {
  if (!head || !head.next) return head

  var newHead = reverseList2Single(head.next)
  head.next.next = head
  head.next = null
  return newHead
}

function ListNode (val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var head = new ListNode(1)
var last = head

for (var i = 2; i < 6; i++) {
  last.next = new ListNode(i)
  last = last.next
}
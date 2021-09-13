var copyRandomList = function(head) {
  const newHead = null
  while (head) {
    newHead.val = head.val
    newHead.next = Object.assign({}, head.next)
    newHead.random = Object.assign({}, head.random)
    head = head.next
  }
  return newHead
};

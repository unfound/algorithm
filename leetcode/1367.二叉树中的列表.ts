export {}

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function bfs (head: ListNode | null, root: TreeNode | null): boolean {
    if (!head) return true
    if (!root) return false
    if (head.val !== root.val) return false
    return bfs(head.next, root.left) || bfs(head.next, root.right)
}

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
    if (!root) return false
    return bfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right)
};

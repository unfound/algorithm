/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function levelOrder(root: TreeNode | null): number[][] {
  let queue = []
  let res = []
  if (root) {
    queue.push(root)
  }

  while (queue.length > 0) {
    let length = queue.length
    let levelNodes = []
    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      levelNodes.push(node.val)

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }

    res.push(levelNodes)
  }

  return res
};

function levelOrder2(root: TreeNode | null): number[][] {
  let res = []

  function traverse (root: TreeNode | null, level: number) {
    if (!root) return
    if (!res[level]) {
      res[level] = []
    }
    res[level].push(root.val)
    traverse(root.left, level + 1)
    traverse(root.right, level + 1)
  }

  traverse(root, 0)

  return res
};
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

function maxDepth(root: TreeNode | null): number {
  function traverse (root, level) {
    if (!root) return level

    level++

    let leftLevel = traverse(root.left, level)
    let rightLevel = traverse(root.right, level)

    return Math.max(leftLevel, rightLevel)
  }

  return traverse(root, 0)
};
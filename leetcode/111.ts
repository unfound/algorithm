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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0

  let leftLevel = minDepth(root.left)
  let rightLevel = minDepth(root.right)

  if (leftLevel === 0) {
    return rightLevel + 1
  }

  if (rightLevel === 0) {
    return leftLevel + 1
  }

  return Math.min(leftLevel, rightLevel) + 1
};

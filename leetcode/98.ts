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

function isValidBST(root: TreeNode | null): boolean {
  let preNode = null
  function traverse (root: TreeNode | null):boolean {
      if (!root) return true
      if (!traverse(root.left)) {
          return false
      }
      if (preNode && preNode.val >= root.val) {
          return false
      }
      preNode = root
      return traverse(root.right)
  }

  return traverse(root)
};

function isValidBST(root: TreeNode | null): boolean {
  let preNode = null
  function isValid (root: TreeNode, min?: Number, max?: Number):boolean {
      if (!root) return true

      if (min !== undefined && min >= root.val) {
          return false
      }

      if (max !== undefined && max <= root.val) {
          return false
      }

      return isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
  }

  return isValid(root)
};

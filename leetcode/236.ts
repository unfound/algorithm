export {}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let parentNode = root
  
  function pqIsInChildTree (root: TreeNode | null): Boolean {
    if (!root) return false

    let isInLeft = pqIsInChildTree(root.left)
    let isInRight = pqIsInChildTree(root.right)

    // 如果根节点被找到，则返回true
    if (root.val === p?.val || root.val === q?.val) {
      // 如果根节点等于p或q，那么左右子树中有一个包含p或q则该节点就是最近公共祖先
      if (isInLeft || isInRight) {
        parentNode = root
      }
      return true
    } else {
      // 如果根节点不等于p或q，那么左右子树中必须各包含有pq，该节点才是最近公共祖先
      if (isInLeft && isInRight) {
        parentNode = root
      }
      // 如果根节点没找到，但是左右子树里有也返回true
      return isInLeft || isInRight
    }
  }

  pqIsInChildTree(root)

  return parentNode
};
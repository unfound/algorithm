class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isBalanced(root: TreeNode | null): boolean {
    let flag = true
    function getTreeDeep (root: TreeNode | null): number {
        if (!root) return 0

        let leftDeep = getTreeDeep(root.left) + 1
        let rightDeep = getTreeDeep(root.right) + 1
        
        if (Math.abs(leftDeep - rightDeep) > 1) flag = false

        return Math.max(leftDeep, rightDeep)
    }
    getTreeDeep(root)
    return flag
}

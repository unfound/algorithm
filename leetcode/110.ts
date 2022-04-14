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

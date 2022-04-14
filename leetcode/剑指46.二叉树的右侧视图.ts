import { TreeNode, BinaryTree } from './BinaryTree'

function rightSideView(root: TreeNode | null): number[] {
    let maxDeep = 0
    let currentDeep = 0
    const result: number[] = []

    function traverse (root: TreeNode | null) {
        if (!root) return
        currentDeep++
        if (currentDeep > maxDeep) {
            result.push(root.val)
        }
        traverse(root.right)
        traverse(root.left)
        maxDeep = Math.max(currentDeep, maxDeep)
        currentDeep--
    }

    traverse(root)

    return result
}

const b = new BinaryTree([1,2,3,4])
console.log(rightSideView(b.root))
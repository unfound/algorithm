export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export class BinaryTree {
    root: TreeNode | null
    constructor(nodeList?: Array<number | null> | null) {
        this.root = this.create(nodeList)
    }

    create(nodeList?: Array<number | null> | null) {
        if (nodeList == void 0 || nodeList.length <= 0) return null
        const rootVal = nodeList.shift()
        if (!rootVal) return null
        const root = new TreeNode(rootVal)
        const storage = [root]
        let last = 0
        while (nodeList.length > 0) {
            const leftVal = nodeList.shift()
            const rightVal = nodeList.shift()

            if (leftVal) {
                const left = new TreeNode(leftVal)
                storage[last].left = left
                storage.push(left)
            }
            if (rightVal) {
                const right = new TreeNode(rightVal)
                storage[last].right = right
                storage.push(right)
            }
            last++
        }

        return root
    }
}

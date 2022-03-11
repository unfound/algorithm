export {}

class Node {
    val: number
    children: Node[]
    constructor(val?: number) {
        this.val = (val===undefined ? 0 : val)
        this.children = []
    }
}

function preorder(root: Node | null): number[] {
    const result: number[] = []
    function traverse (root: Node | null) {
        if (!root) return
        result.push(root.val)
        root.children.forEach(node => {
            traverse(node)
        })
    }
    traverse(root)
    return result
};
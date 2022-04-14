import { TreeNode } from './BinaryTree'

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return binaryArrayToBST(nums, 0, nums.length - 1)
}

function binaryArrayToBST (nums: number[], start: number, end: number): TreeNode | null {
    if (start > end) {
        return null
    }

    const mid = Math.floor((start + end) / 2)
    const root = new TreeNode(nums[mid])
    root.left = binaryArrayToBST(nums, start, mid - 1)
    root.right = binaryArrayToBST(nums, mid + 1, end)

    return root
}

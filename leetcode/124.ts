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
let max

function maxPath (root: TreeNode | null): number {
    if (!root) return 0

    var leftMax = Math.max(0, maxPath(root.left))
    var rightMax = Math.max(0, maxPath(root.right))
    // 因为上面小于0被过滤了，所以左右最小值为0，这里的存储的最大值
    // 就是中左，中右，左中右三种路径的最大值
    max = Math.max(max, leftMax + rightMax + root.val)
    // 要注意的是这里的返回是中左或者中右两种路径的最大值
    return Math.max(leftMax, rightMax) + root.val
}

function maxPathSum(root: TreeNode | null): number {
    // 在这里不初始化一下的话，会有问题
    max = -Infinity
    maxPath(root)
    return max
};

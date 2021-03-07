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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map = new Map<number, number>()
  // 将先序排列数组与中序排列数组的下标对应关系存在Map中方便查询
  preorder.forEach(item => {
      var inorderIndex = inorder.indexOf(item)
      map.set(item, inorderIndex)
  })

  return buildChildrenTree(preorder, 0, preorder.length - 1,
                          inorder, 0, inorder.length - 1, map)
};

function buildChildrenTree (
  preorder: number[],
  preStart: number,
  preEnd: number,
  inorder: number[],
  inStart: number,
  inEnd: number,
  map: Map<number, number>
): TreeNode | null {
  if (preStart > preEnd || inStart > inEnd) return null

  const root = new TreeNode(preorder[preStart])
  // 这边就是查找当前节点对应在中序遍历数组中的位置
  // 其左边就是该节点的左子树
  let preInInorderIndex = map.get(preorder[preStart])
  let leftTreeCount = preInInorderIndex - inStart

  root.left = buildChildrenTree(preorder, preStart + 1, preStart + leftTreeCount,
                              inorder, inStart, preInInorderIndex - 1, map)
  root.right = buildChildrenTree(preorder, preStart + leftTreeCount + 1, preEnd,
                              inorder, preInInorderIndex + 1, inEnd, map)

  return root
}
class TreeNode {
  constructor (val, left = null, right = null) {
    this.val = val,
    this.left = null,
    this.right = null
  }
}

class BinaryTree {
  constructor (arr = []) {
    this.root = this.build(arr)
  }

  build (arr) {
    if (arr.length <= 0) return null
    var root = new TreeNode(arr.shift())
    var storage = [root]
    var last = 0
    while (arr.length > 0) {
      var leftVal = arr.shift()
      var rightVal = arr.shift()

      if (leftVal) {
        var left = new TreeNode(leftVal)
        storage[last].left = left
        storage.push(left)
      }
      if (rightVal) {
        var right = new TreeNode(rightVal)
        storage[last].right = right
        storage.push(right)
      }
      last++
    }

    return root
  }

  /**
   * D=Degree 节点
   * L=Left 左节点
   * R=Right 右节点
   * 先序遍历 DLR
   * 中序遍历 LDR
   * 后序遍历 LRD
   */
  traverse (root, type = 'LDR') {
    // 终止条件
    if (!root) return

    /** 先序遍历 */
    if (type === 'DLR') console.log(root.val)
    // 遍历左子树
    this.traverse(root.left, type)

    /** 中序遍历 */
    if (type === 'LDR') console.log(root.val)
    // 遍历右子树
    this.traverse(root.right, type)

    /** 后序遍历 */
    if (type === 'LRD') console.log(root.val)
  }

  // 层序遍历
  traverse_level (root) {
    // 这里吧queue当成队列使用，入队列是push，出队列是shift
    var queue = []
    queue.push(root)
    while (queue.length > 0) {
      var root = queue.shift()
      // 输出root
      console.log(root.val)

      if (root.left) queue.push(root.left)
      if (root.right) queue.push(root.right)
    }
  }

  traverse_no_recursion_DLR (root) {
    var stack = [null]
    var p = root

    while (stack.length > 0) {
      // 将所有左节点放入stack中
      while (p) {
        console.log(p.val)
        stack.push(p)
        p = p.left
      }

      p = stack.pop()
      p = p && p.right
    } 

  }

  traverse_no_recursion_LDR (root) {
    var stack = [null]
    var p = root

    while (stack.length > 0) {
      // 将所有左节点放入stack中
      while (p) {
        stack.push(p)
        p = p.left
      }

      p = stack.pop()
      console.log(p && p.val)
      p = p && p.right
    } 

  }

  traverse_no_recursion_LRD (root) {
    var stack = [null]
    var p = root

    while (stack.length > 0) {
      // 将所有左节点放入stack中
      while (p) {
        stack.push(p)
        p = p.left
      }

      var lastNode = stack[stack.length - 1]
      if (lastNode && !lastNode.visited && lastNode.right) {
        p = lastNode.right
        // 这里添加一个已经访问过右子树的标志，不加标志的话，会在对右子树的访问陷入无限循环中
        lastNode.visited = true
      } else {
        var node = stack.pop()
        console.log(node.val)
      }
    } 

  }
}

var binaryTree = new BinaryTree([4,2,5,1,6,3])
binaryTree.traverse_no_recursion_LRD(binaryTree.root)

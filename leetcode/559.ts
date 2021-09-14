class Node {
  val: number;
  children: Node[];
  constructor(val?: number, children?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

function maxDepth(root: Node | null): number {
  if (!root) return 0;
  let depth = 1;
  root.children.forEach((node) => {
    depth = Math.max(maxDepth(node) + 1, depth);
  });

  return depth;
}

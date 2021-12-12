import { MaybeNode } from "./treenode.ts";

export function minDepth<T>(root: MaybeNode<T>): number {
  if (root === null) return 0;

  const leftDepth = 1 + minDepth(root.left);
  const rightDepth = 1 + minDepth(root.right);

  if (leftDepth === 1) return rightDepth;
  if (rightDepth === 1) return leftDepth;

  return Math.min(leftDepth, rightDepth);
}

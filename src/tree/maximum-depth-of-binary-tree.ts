import { MaybeNode } from "./treenode.ts";

export function maxDepth<T>(root: MaybeNode<T>): number {
  if (root === null) return 0;

  const leftDepth = 1 + maxDepth(root.left);
  const rightDepth = 1 + maxDepth(root.right);

  return Math.max(leftDepth, rightDepth);
}

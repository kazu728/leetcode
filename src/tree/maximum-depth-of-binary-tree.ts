import { MaybeNode } from "./treenode.ts";

export function maxDepth<T>(root: MaybeNode<T>): number {
  return root === null
    ? 0
    : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

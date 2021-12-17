import { MaybeNode } from "./treenode.ts";

export function hasPathSum(root: MaybeNode<number>, sum: number): boolean {
  const sub = sum - (root ? root.val! : 0);

  if (root === null) {
    return false;
  } else if (sub === 0) {
    return true;
  } else {
    return hasPathSum(root.left, sub) || hasPathSum(root.right, sub);
  }
}
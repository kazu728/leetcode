import { MaybeNode, TreeNode } from "./treenode.ts";

export function mergeTrees<T extends number>(
  r1: MaybeNode<T>,
  r2: MaybeNode<T>
): MaybeNode<number> {
  return merge(r1, r2);
}

const merge = <T extends number>(r1: MaybeNode<T>, r2: MaybeNode<T>) => {
  if (!r1 && !r2) return null;
  if (r1 && !r2) return r1;
  if (!r1 && r2) return r2;

  const node: TreeNode<number> = new TreeNode(r1!.val! + r2!.val!);

  node.left = merge(r1!.left, r2!.left);
  node.right = merge(r1!.right, r2!.right);

  return node;
};

import { assertEquals } from "../deps.ts";
import { TreeNode } from "./treenode.ts";
import { hasPathSum } from "./path-sum.ts";

Deno.test("Should have path sum", () => {
  const input = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
  const target = 22;

  const node = TreeNode.createCompleteBinaryTree(input);

  assertEquals(hasPathSum(node, target), true);
});

Deno.test("Should have path sum", () => {
  const input = [1, 2, 3];
  const target = 5;

  const node = TreeNode.createCompleteBinaryTree(input);

  assertEquals(hasPathSum(node, target), false);
});

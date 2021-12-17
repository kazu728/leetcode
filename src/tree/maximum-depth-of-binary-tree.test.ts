import { assertEquals } from "../deps.ts";
import { maxDepth } from "./maximum-depth-of-binary-tree.ts";
import { TreeNode } from "./treenode.ts";

Deno.test("Should be depth of 3", () => {
  const input = [3, 9, 20, null, null, 15, 7];
  const output = 3;

  assertEquals(maxDepth(TreeNode.createCompleteBinaryTree(input)), output);
});

Deno.test("Should be depth of 2", () => {
  const input = [1, null, 2];
  const output = 2;

  assertEquals(maxDepth(TreeNode.createCompleteBinaryTree(input)), output);
});
Deno.test("Should be depth of 0", () => {
  const input: number[] = [];
  const output = 0;

  assertEquals(maxDepth(TreeNode.createCompleteBinaryTree(input)), output);
});

Deno.test("Should be depth of 1", () => {
  const input = [0];
  const output = 1;

  assertEquals(maxDepth(TreeNode.createCompleteBinaryTree(input)), output);
});

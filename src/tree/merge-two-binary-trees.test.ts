import { assertEquals } from "../deps.ts";
import { TreeNode } from "./treenode.ts";
import { mergeTrees } from "./merge-two-binary-trees.ts";

Deno.test("Should be merged", () => {
  const root1 = [1, 3, 2, 5];
  const root2 = [2, 1, 3, null, 4, null, 7];

  const root1Node = TreeNode.createCompleteBinaryTree(root1);
  const root2Node = TreeNode.createCompleteBinaryTree(root2);

  const output = [3, 4, 5, 5, 4, null, 7];
  const outputNode = TreeNode.createCompleteBinaryTree(output);

  assertEquals(mergeTrees(root1Node, root2Node), outputNode);
});

Deno.test("Should be merged only root summarized", () => {
  const root1 = [1];
  const root2 = [1, 2];

  const root1Node = TreeNode.createCompleteBinaryTree(root1);
  const root2Node = TreeNode.createCompleteBinaryTree(root2);

  const output = [2, 2];
  const outputNode = TreeNode.createCompleteBinaryTree(output);

  assertEquals(mergeTrees(root1Node, root2Node), outputNode);
});

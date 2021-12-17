import { assertEquals } from "../deps.ts";
import { minDepth } from "./minimum-depth-of-binary-tree.ts";
import { TreeNode } from "./treenode.ts";

Deno.test("Should be depth of 2", () => {
  const input = [3, 9, 20, null, null, 15, 7];
  const output = 2;

  const node = TreeNode.createCompleteBinaryTree(input);

  assertEquals(minDepth(node), output);
});

Deno.test("Should be depth of 5", () => {
  const input = [2, null, 3, null, 4, null, 5, null, 6];
  const output = 5;

  const initialNode = TreeNode.createInitilaNode(input)!;

  let node = new TreeNode();
  for (let i = 1; i < input.length; i++) {
    node = initialNode.insert(initialNode, input[i]!);
  }

  assertEquals(minDepth(node), output);
});

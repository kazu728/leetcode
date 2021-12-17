import { assertEquals } from "../deps.ts";
import { TreeNode } from "./treenode.ts";

Deno.test("Should be created intial node", () => {
  const input = [3, 9, 20, null, null, 15, 7];
  const output = new TreeNode(3);

  assertEquals(TreeNode.createInitilaNode(input), output);
});

Deno.test("Should be returned null", () => {
  const input = [null, null, 15, 7];
  const output = null;

  assertEquals(TreeNode.createInitilaNode(input), output);
});

Deno.test("Should be created tree node with depth of 3", () => {
  const input = [3, 9, 20, null, null, 15, 7];
  const output = new TreeNode(
    3,
    new TreeNode(9, null, null),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );

  assertEquals(TreeNode.createCompleteBinaryTree(input), output);
});

Deno.test("Should be created tree node with depth of 2", () => {
  const input = [1, null, 2];
  const output = new TreeNode(1, null, new TreeNode(2, null, null));

  assertEquals(TreeNode.createCompleteBinaryTree(input), output);
});

Deno.test("Should be created tree node with depth of 0", () => {
  const input: number[] = [];
  const output = null;

  assertEquals(TreeNode.createCompleteBinaryTree(input), output);
});

Deno.test("Should be created tree node with depth of 1", () => {
  const input = [0];
  const output = new TreeNode(0);

  assertEquals(TreeNode.createCompleteBinaryTree(input), output);
});

Deno.test("Should be created tree node with depth of 5", () => {
  const input = [2, null, 3, null, 4, null, 5, null, 6];
  const output = new TreeNode(
    2,
    null,
    new TreeNode(
      3,
      null,
      new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))
    )
  );

  const initialNode = TreeNode.createInitilaNode(input)!;

  let result;
  for (let i = 1; i < input.length; i++) {
    result = initialNode.insert(initialNode, input[i]!);
  }

  assertEquals(result, output);
});

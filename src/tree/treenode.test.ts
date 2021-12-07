import { assertEquals } from "../deps.ts";
import { TreeNode } from "./treenode.ts";

Deno.test("Should be created tree node with depth of 3", () => {
  const input = [3, 9, 20, null, null, 15, 7];
  const output = new TreeNode(
    3,
    new TreeNode(9, null, null),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );

  assertEquals(TreeNode.createInstanceFromArray(input), output);
});

Deno.test("Should be created tree node with depth of 2", () => {
  const input = [1, null, 2];
  const output = new TreeNode(1, null, new TreeNode(2, null, null));

  assertEquals(TreeNode.createInstanceFromArray(input), output);
});

Deno.test("Should be created tree node with depth of 0", () => {
  const input: number[] = [];
  const output = null;

  assertEquals(TreeNode.createInstanceFromArray(input), output);
});

Deno.test("Should be created tree node with depth of 1", () => {
  const input = [0];
  const output = new TreeNode(0);

  assertEquals(TreeNode.createInstanceFromArray(input), output);
});

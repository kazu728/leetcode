import { assertEquals } from "../deps.ts";
import { ListNode } from "./list-node.ts";
import { deleteDuplicates } from "./remove-duplicates-from-sorted-list.ts";

Deno.test("Shoud remove 1", () => {
  const input = [1, 1, 2];
  const inputNode = ListNode.createListNode(input, -1);
  const outputNode = ListNode.createListNode([1, 2], -1);

  assertEquals(deleteDuplicates(inputNode), outputNode);
});

Deno.test("Shoud remove 1 and 3", () => {
  const input = [1, 1, 2, 3, 3];
  const inputNode = ListNode.createListNode(input, -1);
  const outputNode = ListNode.createListNode([1, 2, 3], -1);

  assertEquals(deleteDuplicates(inputNode), outputNode);
});

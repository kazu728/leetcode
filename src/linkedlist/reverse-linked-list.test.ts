import { assertEquals } from "../deps.ts";
import { ListNode } from "./list-node.ts";
import { reverseList } from "./reverse-linked-list.ts";

Deno.test("Shoud be reversed", () => {
  const input = [1, 2, 3, 4, 5];
  const output = [5, 4, 3, 2, 1];

  const inputNode = ListNode.createListNode(input, -1);
  const ouputNode = ListNode.createListNode(output, -1);

  assertEquals(reverseList(inputNode), ouputNode);
});

Deno.test("Shoud return unchanged node", () => {
  const input = [5];
  const inputNode = ListNode.createListNode(input, -1);
  const outputNode = ListNode.createListNode(input, -1);

  assertEquals(reverseList(inputNode), outputNode);
});

Deno.test("Shoud return null", () => {
  assertEquals(reverseList(null), null);
});

import { assertEquals } from "../deps.ts";
import { ListNode } from "./list-node.ts";
import { hasCycle } from "./linkedlist-cycle.ts";

Deno.test("Shoud have cycle", () => {
  const head = [3, 2, 0, -4];
  const pos = 1;

  const listNode = ListNode.createListNode(head, pos);

  assertEquals(hasCycle(listNode), true);
});

Deno.test("Shoud not have cycle", () => {
  const head = [3, 2, 0, -4];
  const pos = -1;

  const listNode = ListNode.createListNode(head, pos);

  assertEquals(hasCycle(listNode), false);
});

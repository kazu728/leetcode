import { ListNode } from "./list-node.ts";

Deno.test("Shoud be created List node", () => {
  const head = [3, 2, 0, -4];
  const pos = 1;

  const listNode = ListNode.createListNode(head, pos);
  console.log(listNode);
});

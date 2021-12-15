import { MaybeNode } from "./list-node.ts";

export function reverseList<T>(head: MaybeNode<T>): MaybeNode<T> {
  if (head === null || head.next === null) return head;

  const reversedNode = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return reversedNode;
}

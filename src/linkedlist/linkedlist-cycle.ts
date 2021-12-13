import { ListNode, MaybeNode } from "./list-node.ts";

export function hasCycle<T>(head: ListNode<T> | null): boolean {
  if (head === null) return false;

  let fast: MaybeNode<T> = head.next;
  let slow: MaybeNode<T> = head;

  while (fast && fast.next && slow) {
    if (fast === slow) return true;
    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
}

import { MaybeNode } from "./list-node.ts";

export function deleteDuplicates<T>(head: MaybeNode<T>): MaybeNode<T> {
  if (head === null) return null;

  if (head.val === head.next?.val) {
    head.next = head.next.next;
    deleteDuplicates(head.next);
  }

  deleteDuplicates(head.next);

  return head;
}

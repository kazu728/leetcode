export type MaybeNode<T> = ListNode<T> | null;
export type MaybeValue<T> = T | null;

export class ListNode<T> {
  val: MaybeValue<T>;
  next: MaybeNode<T>;

  constructor(val?: T, next?: MaybeNode<T>) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }

  // FIXME
  static createListNode<T>(input: T[], pos: number): MaybeNode<T> {
    if (input.length === 0) return null;

    const headNodes = input.map((h: T) => new ListNode(h));

    const linkNextNode = (node: ListNode<T>, i: number): ListNode<T> => {
      const isLastElement = i === input.length - 1;
      const nextNode = isLastElement
        ? headNodes[pos] || null
        : headNodes[i + 1] || null;

      node.next = nextNode;

      return node;
    };

    const nodes = headNodes.map(linkNextNode);
    return nodes[0];
  }
}

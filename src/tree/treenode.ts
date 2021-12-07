export type MaybeNode<T> = TreeNode<T> | null;
type MaybeValue<T> = T | null;

export class TreeNode<T> {
  val: MaybeValue<T>;
  left: MaybeNode<T>;
  right: MaybeNode<T>;

  constructor(val?: MaybeValue<T>, left?: MaybeNode<T>, right?: MaybeNode<T>) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  static createInstanceFromArray<T>(input: MaybeValue<T>[]): MaybeNode<T> {
    if (input.length === 0) return null;

    const inputWithSentinel: MaybeValue<T>[] = [null, ...input];
    const initialNode: TreeNode<T> = new TreeNode<T>(inputWithSentinel[1]);

    return gen<T>(initialNode, inputWithSentinel, 1);
  }
}

const gen = <T>(
  node: MaybeNode<T>,
  input: MaybeValue<T>[],
  i: number
): MaybeNode<T> => {
  if (i > input.length || !node) return node;

  const left = 2 * i;
  const leftValue: MaybeValue<T> = input[left];
  const right = 2 * i + 1;
  const rightValue: MaybeValue<T> = input[right];

  node.left = leftValue ? gen(new TreeNode(leftValue), input, left) : null;
  node.right = rightValue ? gen(new TreeNode(rightValue), input, right) : null;

  return node;
};
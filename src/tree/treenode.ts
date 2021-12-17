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

  static createInitilaNode<T>(input: MaybeValue<T>[]): MaybeNode<T> {
    if (input.length === 0) return null;

    return input[0] === null ? null : new TreeNode(input[0]);
  }

  static createCompleteBinaryTree<T>(input: MaybeValue<T>[]): MaybeNode<T> {
    if (input.length === 0) return null;

    const inputWithSentinel: MaybeValue<T>[] = [null, ...input];
    const initialNode: TreeNode<T> = new TreeNode<T>(inputWithSentinel[1]);

    return genCompleteBinaryTree<T>(initialNode, inputWithSentinel, 1);
  }

  insert(node: TreeNode<T>, value: T): TreeNode<T> {
    if (node.val !== null && node.val < value) {
      if (node.right === null) {
        node.right = value ? new TreeNode(value) : null;
      } else {
        node.right = this.insert(node.right, value);
      }
    }

    if (node.val !== null && node.val > value!) {
      if (node.left === null) {
        node.left = value ? new TreeNode(value) : null;
      } else {
        node.left = this.insert(node.left, value);
      }
    }
    return node;
  }
}

const genCompleteBinaryTree = <T>(
  node: MaybeNode<T>,
  input: MaybeValue<T>[],
  i: number
): MaybeNode<T> => {
  if (i > input.length || !node) return node;

  const left = 2 * i;
  const leftValue: MaybeValue<T> = input[left];
  const right = 2 * i + 1;
  const rightValue: MaybeValue<T> = input[right];

  node.left = leftValue
    ? genCompleteBinaryTree(new TreeNode(leftValue), input, left)
    : null;
  node.right = rightValue
    ? genCompleteBinaryTree(new TreeNode(rightValue), input, right)
    : null;

  return node;
};

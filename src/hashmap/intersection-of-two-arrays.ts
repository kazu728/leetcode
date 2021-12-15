const NUMS_SET = new Set<number>();

export function intersection(nums1: number[], nums2: number[]): number[] {
  const output: number[] = [];

  for (let i = 0; i < nums1.length; i++) NUMS_SET.add(nums1[i]);

  for (let i = 0; i < nums2.length; i++) {
    const a = nums2[i];

    if (NUMS_SET.has(a)) {
      output.push(a);
      NUMS_SET.delete(a);
    }
  }

  return output;
}

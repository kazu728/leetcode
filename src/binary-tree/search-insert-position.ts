export function searchInsert(nums: number[], target: number): number {
  const search = (begin: number, end: number): number => {
    const i = Math.ceil((begin + end) / 2);
    const [l, m, r] = [nums[begin], nums[i], nums[end]];

    if ((l < target && target < r) || (r < target && target < l)) return i;

    if (m < target) return search(i + 1, end);
    if (m > target) return search(begin, i - 1);

    return i;
  };

  return search(0, nums.length);
}

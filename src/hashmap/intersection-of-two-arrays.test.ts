import { assertEquals } from "../deps.ts";
import { intersection } from "./intersection-of-two-arrays.ts";

Deno.test("Should return [2]", () => {
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];

  const output = [2];

  assertEquals(intersection(nums1, nums2), output);
});

Deno.test("Should return [4, 9]", () => {
  const nums1 = [4, 9, 5];
  const nums2 = [9, 4, 9, 8, 4];

  const output = [9, 4];

  assertEquals(intersection(nums1, nums2), output);
});

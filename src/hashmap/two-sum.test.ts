import { assertEquals } from "../deps.ts";
import { twoSum } from "./two-sum.ts";

Deno.test("Should return right index in case of target is 9", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;

  assertEquals(twoSum(nums, target), [0, 1]);
});

Deno.test("Should return right index in case of target is 6", () => {
  const nums = [3, 2, 4];
  const target = 6;

  assertEquals(twoSum(nums, target), [1, 2]);
});

Deno.test("Should return right index in case of target is 6", () => {
  const nums = [3, 3];
  const target = 6;

  assertEquals(twoSum(nums, target), [0, 1]);
});

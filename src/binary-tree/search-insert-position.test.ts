import { assertEquals } from "../deps.ts";
import { searchInsert } from "./search-insert-position.ts";

Deno.test("Should search", () => {
  const nums = [1, 3, 5, 6];
  const target = 5;
  const output = 2;

  assertEquals(searchInsert(nums, target), output);
});

Deno.test("Should insert at 1", () => {
  const nums = [1, 3, 5, 6];
  const target = 2;
  const output = 1;

  assertEquals(searchInsert(nums, target), output);
});

Deno.test("Should insert at 4", () => {
  const nums = [1, 3, 5, 6];
  const target = 7;
  const output = 4;

  assertEquals(searchInsert(nums, target), output);
});

Deno.test("Should insert at 2", () => {
  const nums = [1, 3, 5, 6];
  const target = 4;
  const output = 2;

  assertEquals(searchInsert(nums, target), output);
});

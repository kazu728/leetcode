import { assertEquals } from "../deps.ts";
import { firstUniqChar } from "./first-unique-character-in-a-string.ts";

Deno.test("Should return 0", () => {
  const input = "leetcode";
  const output = 0;

  assertEquals(firstUniqChar(input), output);
});

Deno.test("Should return 2", () => {
  const input = "loveleetcode";
  const output = 2;

  assertEquals(firstUniqChar(input), output);
});

Deno.test("Should return unsearch value", () => {
  const input = "aabb";
  const output = -1;

  assertEquals(firstUniqChar(input), output);
});

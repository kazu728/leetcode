import { assertEquals } from "../deps.ts";
import { moveZeroes } from "./move-zeroes.ts";

Deno.test("Shoud have cycle", () => {
  const input = [0, 1, 0, 3, 12];
  const output = [1, 3, 12, 0, 0];

  assertEquals(moveZeroes(input), output);
});

Deno.test("Shoud have cycle", () => {
  const input = [0];
  const output = [0];

  assertEquals(moveZeroes(input), output);
});

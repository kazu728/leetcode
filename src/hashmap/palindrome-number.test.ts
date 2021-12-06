import { assertEquals } from "../deps.ts";
import { isPalindrome } from "./palindrome-number.ts";

Deno.test("Should be parindrome", () => {
  const input = 121;

  assertEquals(isPalindrome(input), true);
});

Deno.test("Should not be parindrome", () => {
  const input = -121;

  assertEquals(isPalindrome(input), false);
});

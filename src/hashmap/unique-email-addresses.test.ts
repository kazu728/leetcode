import { assertEquals } from "../deps.ts";
import { numUniqueEmails, convert } from "./unique-email-addresses.ts";

Deno.test("Should remove unnecessary character", () => {
  const input = [
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ];

  const output = [
    "testemail@leetcode.com",
    "testemail@leetcode.com",
    "testemail@lee.tcode.com",
  ];

  assertEquals(convert(input), output);
});

Deno.test("Should return unchanged character", () => {
  const input = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];
  const output = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];

  assertEquals(convert(input), output);
});

Deno.test("Should return 2", () => {
  const input = [
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ];

  const output = 2;

  assertEquals(numUniqueEmails(input), output);
});

Deno.test("Should return 3", () => {
  const input = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];

  const output = 3;

  assertEquals(numUniqueEmails(input), output);
});

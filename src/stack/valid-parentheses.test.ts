import { assertEquals } from "../deps.ts";
import { isValid } from "./valid-parentheses.ts";

Deno.test("Shoud be valid with ()", () => {
  const input = "()";

  assertEquals(isValid(input), true);
});

Deno.test("Shoud be valid with ()[]{}", () => {
  const input = "()[]{}";

  assertEquals(isValid(input), true);
});

Deno.test("Shoud be valid with (]", () => {
  const input = "(]";

  assertEquals(isValid(input), false);
});

Deno.test("Shoud be valid with ([)]", () => {
  const input = "([)]";

  assertEquals(isValid(input), false);
});

Deno.test("Shoud be valid with {[]}", () => {
  const input = "{[]}";

  assertEquals(isValid(input), true);
});

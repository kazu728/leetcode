import { assertEquals } from "../deps.ts";
import { canAttendMeetings } from "./meeting-rooms.ts";

Deno.test("Shoud be able to attend", () => {
  const input = [
    [0, 30],
    [5, 10],
    [15, 20],
  ];
  const output = false;

  assertEquals(canAttendMeetings(input), output);
});

Deno.test("Shoud not be able to attend", () => {
  const input = [
    [7, 10],
    [2, 4],
  ];
  const output = true;

  assertEquals(canAttendMeetings(input), output);
});

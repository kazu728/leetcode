const OPEN_CHARACTER_SET = new Set(["(", "[", "{"]);
const CLOSE_MAP = new Map([
  [")", "("],
  ["]", "["],
  ["}", "{"],
]);

export function isValid(s: string): boolean {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (OPEN_CHARACTER_SET.has(char)) {
      stack.push(char);
    } else if (CLOSE_MAP.get(char) === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

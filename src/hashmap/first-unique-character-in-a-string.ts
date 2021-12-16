export function firstUniqChar(s: string): number {
  const CHAR_MAP = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    CHAR_MAP.has(c) ? CHAR_MAP.delete(c) : CHAR_MAP.set(c, i);
  }

  return CHAR_MAP.size === 0 ? -1 : CHAR_MAP.values().next().value;
}

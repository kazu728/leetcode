const EMAIL_SET = new Set<string>();

export function numUniqueEmails(emails: string[]): number {
  if (emails.length === 0) return 0;

  const convertedEmails: string[] = convert(emails);

  const go = (i: number, acc: number): number => {
    if (!convertedEmails[i]) return acc;
    if (EMAIL_SET.has(convertedEmails[i])) return go(i + 1, acc);

    EMAIL_SET.add(convertedEmails[i]);
    return go(i + 1, acc + 1);
  };

  return go(0, 0);
}

export const convert = (emails: string[]): string[] => {
  const result: string[] = [];

  for (const email of emails) {
    let s = "";

    let isPlusRange,
      isDomainRange = false;

    for (const c of email) {
      if (c === "@") {
        isPlusRange = false;
        isDomainRange = true;
      }

      if ((c === "." && !isDomainRange) || isPlusRange) continue;

      if (c === "+") {
        isPlusRange = true;
        continue;
      }

      s += c;
    }
    result.push(s);
  }
  return result;
};

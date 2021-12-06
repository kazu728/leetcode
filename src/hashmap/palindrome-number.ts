export function isPalindrome(x: number): boolean {
  const elements = Array.from(x.toString());

  for (let i = 0; i < elements.length; i++) {
    if (elements[i] !== elements[elements.length - i - 1]) return false;
  }

  return true;
}

const UNIT_MS = { d: 86_400_000, h: 3_600_000, m: 60_000, s: 1_000 } as const;

/** Parse a compact duration like "2d", "1h30m" or "45s" into milliseconds. */
export function parseDuration(input: string): number {
  const value = input.trim();
  if (!/^(\d+[dhms])+$/.test(value)) {
    throw new SyntaxError(`Invalid duration: "${input}"`);
  }
  let total = 0;
  for (const [, amount, unit] of value.matchAll(/(\d+)([dhms])/g)) {
    total += Number(amount) * UNIT_MS[unit as keyof typeof UNIT_MS];
  }
  return total;
}

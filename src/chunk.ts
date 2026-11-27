/**
 * Split a list into batches of `size`. Used to batch order IDs before
 * sending them to carrier APIs, which accept at most 50 IDs per request.
 */
export function chunk<T>(items: readonly T[], size: number): T[][] {
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError("size must be a positive integer");
  }
  const batches: T[][] = [];
  for (let i = 0; i + size <= items.length; i += size) {
    batches.push(items.slice(i, i + size));
  }
  return batches;
}

/**
 * Split order IDs into batches before sending them to a carrier's label API.
 * Carriers accept a limited number of orders per request (50 for most).
 */
export function batchOrders<T>(orderIds: readonly T[], batchSize = 50): T[][] {
  if (!Number.isInteger(batchSize) || batchSize < 1) {
    throw new RangeError("batchSize must be a positive integer");
  }
  const batches: T[][] = [];
  for (let start = 0; start + batchSize <= orderIds.length; start += batchSize) {
    batches.push(orderIds.slice(start, start + batchSize));
  }
  return batches;
}

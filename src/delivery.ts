import { addDays, startOfDay } from "date-fns";

/**
 * Estimate when a parcel arrives, given the day it ships and the carrier's
 * transit time in business days. Shown to customers at checkout.
 */
export function estimateDelivery(shippedAt: Date, transitBusinessDays: number): Date {
  if (!Number.isInteger(transitBusinessDays) || transitBusinessDays < 0) {
    throw new RangeError("transitBusinessDays must be a non-negative integer");
  }
  return addDays(startOfDay(shippedAt), transitBusinessDays);
}

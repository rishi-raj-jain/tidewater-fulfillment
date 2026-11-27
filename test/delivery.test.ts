import { expect, test } from "bun:test";
import { estimateDelivery } from "../src";

test("adds transit days to a Monday shipment", () => {
  // Monday 23 Nov 2026 + 2 business days = Wednesday 25 Nov 2026
  expect(estimateDelivery(new Date(2026, 10, 23, 15, 30), 2)).toEqual(new Date(2026, 10, 25));
});

test("same-day delivery returns the ship date", () => {
  expect(estimateDelivery(new Date(2026, 10, 24, 9, 0), 0)).toEqual(new Date(2026, 10, 24));
});

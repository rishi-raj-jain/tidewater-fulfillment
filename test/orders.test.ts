import { expect, test } from "bun:test";
import { parseOrder } from "../src";

const baseOrder = {
  id: "ord_8f2k1",
  email: "sam@example.com",
  items: [{ sku: "TOTE-NAVY", quantity: 2, unitPriceCents: 2400 }],
  shippingAddress: {
    name: "Sam Rivera",
    line1: "200 Harbor St",
    city: "Portland",
    postalCode: "97201",
    country: "US",
  },
};

test("accepts a valid US order", () => {
  expect(parseOrder(baseOrder).id).toBe("ord_8f2k1");
});

test("rejects an order with no items", () => {
  expect(() => parseOrder({ ...baseOrder, items: [] })).toThrow();
});

test("rejects an invalid email", () => {
  expect(() => parseOrder({ ...baseOrder, email: "not-an-email" })).toThrow();
});

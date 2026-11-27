import { expect, test } from "bun:test";
import { parseOrder } from "../src";

const baseOrder = {
  id: "ord_8f2k1",
  email: "buyer@example.com ",
  items: [{ sku: "TOTE-NAVY", quantity: 2, unitPriceCents: 2400 }],
  shippingAddress: {
    name: "Sam Rivera",
    line1: "200 Harbor St",
    city: "Portland",
    postalCode: "97201",
    country: "US",
  },
};

test("trims surrounding whitespace from email", () => {
  expect(parseOrder(baseOrder).email).toBe("buyer@example.com");
});

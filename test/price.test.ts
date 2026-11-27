import { expect, test } from "bun:test";
import { formatPrice } from "../src";

test("formats dollars with thousands separators", () => {
  expect(formatPrice(105000)).toBe("$1,050.00");
});

test("puts the minus sign before the symbol for refunds", () => {
  expect(formatPrice(-2400)).toBe("-$24.00");
});

test("formats other currencies", () => {
  expect(formatPrice(1999, "EUR")).toBe("€19.99");
  expect(formatPrice(500, "GBP")).toBe("£5.00");
});

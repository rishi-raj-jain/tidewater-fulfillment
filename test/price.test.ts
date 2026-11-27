import { test } from "node:test";
import assert from "node:assert/strict";
import { formatPrice } from "../src/index.ts";

test("formats dollars with thousands separators", () => {
  assert.equal(formatPrice(105000), "$1,050.00");
});

test("formats other currencies", () => {
  assert.equal(formatPrice(1999, "EUR"), "€19.99");
  assert.equal(formatPrice(500, "GBP"), "£5.00");
});

test("rejects fractional cents", () => {
  assert.throws(() => formatPrice(10.5), TypeError);
});

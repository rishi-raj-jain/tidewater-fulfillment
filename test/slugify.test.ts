import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/index.ts";

test("lowercases and joins words with dashes", () => {
  assert.equal(slugify("Canvas Tote Bag"), "canvas-tote-bag");
});

test("trims punctuation at the edges", () => {
  assert.equal(slugify("  -- Gift Card! --  "), "gift-card");
});

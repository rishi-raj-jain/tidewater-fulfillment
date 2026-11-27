import { test } from "node:test";
import assert from "node:assert/strict";
import { chunk } from "../src/index.ts";

test("splits a list into even batches", () => {
  assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});

test("returns no batches for an empty list", () => {
  assert.deepEqual(chunk([], 3), []);
});

test("rejects a size below 1", () => {
  assert.throws(() => chunk([1, 2], 0), RangeError);
});

import { test } from "node:test";
import assert from "node:assert/strict";
import { parseDuration } from "../src/index.ts";

test("parses single units", () => {
  assert.equal(parseDuration("45s"), 45_000);
  assert.equal(parseDuration("2d"), 172_800_000);
});

test("parses combined units", () => {
  assert.equal(parseDuration("1h30m"), 5_400_000);
});

test("rejects malformed input", () => {
  assert.throws(() => parseDuration("soon"), SyntaxError);
});

import { expect, test } from "bun:test";
import { parseDuration } from "../src";

test("parses single units", () => {
  expect(parseDuration("45s")).toBe(45_000);
  expect(parseDuration("2d")).toBe(172_800_000);
});

test("parses combined units", () => {
  expect(parseDuration("1h30m")).toBe(5_400_000);
});

test("rejects malformed input", () => {
  expect(() => parseDuration("soon")).toThrow(SyntaxError);
});

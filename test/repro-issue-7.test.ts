import { expect, test } from "bun:test";
import { parseDuration } from "../src";

test("repeated units are rejected instead of summed", () => {
  expect(() => parseDuration("1h1h")).toThrow(SyntaxError);
  expect(() => parseDuration("2h2h")).toThrow(SyntaxError);
});

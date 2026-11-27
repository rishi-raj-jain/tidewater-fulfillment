import { expect, test } from "bun:test";
import { formatPrice } from "../src";

test("formats JPY with no decimal places", () => {
  expect(formatPrice(1500, "JPY")).toBe("¥1,500");
});

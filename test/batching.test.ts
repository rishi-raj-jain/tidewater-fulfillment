import { expect, test } from "bun:test";
import { batchOrders } from "../src";

test("splits orders into even batches", () => {
  expect(batchOrders(["ord_1", "ord_2", "ord_3", "ord_4"], 2)).toEqual([
    ["ord_1", "ord_2"],
    ["ord_3", "ord_4"],
  ]);
});

test("returns no batches when there are no orders", () => {
  expect(batchOrders([], 50)).toEqual([]);
});

test("rejects a batch size below 1", () => {
  expect(() => batchOrders(["ord_1"], 0)).toThrow(RangeError);
});

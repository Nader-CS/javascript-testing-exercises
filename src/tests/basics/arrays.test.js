import { describe, expect, it } from "vitest";
import { nums } from "../../basics/arrays";

describe("Array matchers", () => {
  it("expect array of numbers to have length of 4", () => {
    const array = nums;
    expect(array).toHaveLength(4);
  });

  it("expect array of numbers to include 1 and 4", () => {
    const array = nums;
    expect(array).toContain(1);
    expect(array).toContain(4);
  });
});

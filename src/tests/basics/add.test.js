import { describe, expect, it } from "vitest";
import { add } from "../../basics/add";

describe("add(a, b)", () => {
  it("it should add two numbers", () => {
    const a = 1;
    const b = 2;
    const result = add(a, b);

    expect(result).toBe(3);
  });

  it("it should add negative numbers", () => {
    const a = -1;
    const b = -2;
    const result = add(a, b);

    expect(result).toBe(-3);
  });

  it("it should concatenate strings", () => {
    const a = "1";
    const b = "2";
    const result = add(a, b);

    expect(result).toBe("12");
  });
});

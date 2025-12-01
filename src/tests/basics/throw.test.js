import { describe, expect, it } from "vitest";
import { divide } from "../../basics/throw";

describe("divide(a, b)", () => {
  it("should divide(a, b) return a division result", () => {
    const a = 10;
    const b = 5;

    const result = divide(a, b);

    expect(result).toBe(2);
  });

  it("should divide(a, b) throw error if b = 0", () => {
    const a = 10;
    const b = 0;

    const result = () => divide(a, b);

    expect(result).toThrow("Cannot divide by zero");
  });
});

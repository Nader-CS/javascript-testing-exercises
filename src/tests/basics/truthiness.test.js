import { describe, expect, it } from "vitest";
import { isAdult } from "../../basics/truthiness";

describe("isAdult(age)", () => {
  it("it should return true if age is >=18", () => {
    const age = 20;
    const result = isAdult(age);
    expect(result).toBe(true);
  });

  it("it should return false if age is <18", () => {
    const age = 15;
    const result = isAdult(age);
    expect(result).toBe(false);
  });

  it("it should return false if age is not a number", () => {
    const age = "a";
    const result = isAdult(age);
    expect(result).toBe(false);
  });
});

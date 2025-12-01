import { describe, expect, it } from "vitest";
import { person } from "../../basics/objects";

describe("object tests", () => {
  it("should objects with the same properties and values to be equal", () => {
    const person2 = { name: "nader", age: 28 };
    expect(person2).toEqual(person);
  });

  it("should objects with the different properties and values to be not equal", () => {
    const person2 = { name: "nader", age: 29 };
    expect(person2).not.toEqual(person);
  });

  it("should objects with the different properties and values to be not equal", () => {
    expect(person).toBeDefined();
  });
});

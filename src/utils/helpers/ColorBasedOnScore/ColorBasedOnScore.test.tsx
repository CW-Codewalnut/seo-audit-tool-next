import { colors } from "@/utils/constants/constants";
import { ColorBasedOnScore } from "./ColorBasedOnScore";

describe("ColorBasedOnScore", () => {
  it("should return min color for scores below 30", () => {
    expect(ColorBasedOnScore({ score: 10, fieldType: "cell" })).toBe(
      colors.min.cell,
    );
    expect(ColorBasedOnScore({ score: "20", fieldType: "header" })).toBe(
      colors.min.header,
    );
  });

  it("should return normal color for scores between 30 and 70", () => {
    expect(ColorBasedOnScore({ score: 30, fieldType: "cell" })).toBe(
      colors.normal.cell,
    );
    expect(ColorBasedOnScore({ score: "50", fieldType: "header" })).toBe(
      colors.normal.header,
    );
    expect(ColorBasedOnScore({ score: 70, fieldType: "cell" })).toBe(
      colors.normal.cell,
    );
  });

  it("should return max color for scores above 70", () => {
    expect(ColorBasedOnScore({ score: 71, fieldType: "cell" })).toBe(
      colors.max.cell,
    );
    expect(ColorBasedOnScore({ score: "90", fieldType: "header" })).toBe(
      colors.max.header,
    );
  });

  it("should handle non-numeric string scores as NaN and return max color", () => {
    // Assuming that the behavior for non-numeric strings is to treat them as NaN and hence return max color.
    expect(
      ColorBasedOnScore({ score: "non-numeric-string", fieldType: "cell" }),
    ).toBe(colors.max.cell);
  });
});

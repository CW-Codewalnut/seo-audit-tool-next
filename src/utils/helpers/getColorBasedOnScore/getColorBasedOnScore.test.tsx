import { tableColors } from "@/utils/constants/constants";
import { getColorBasedOnScore } from "./getColorBasedOnScore";

describe("ColorBasedOnScore", () => {
  it("should return min color for scores below 30", () => {
    expect(getColorBasedOnScore({ score: 10, fieldType: "cell" })).toBe(
      tableColors.min.cell,
    );
    expect(getColorBasedOnScore({ score: "20", fieldType: "header" })).toBe(
      tableColors.min.header,
    );
  });

  it("should return normal color for scores between 30 and 70", () => {
    expect(getColorBasedOnScore({ score: 30, fieldType: "cell" })).toBe(
      tableColors.normal.cell,
    );
    expect(getColorBasedOnScore({ score: "50", fieldType: "header" })).toBe(
      tableColors.normal.header,
    );
    expect(getColorBasedOnScore({ score: 70, fieldType: "cell" })).toBe(
      tableColors.normal.cell,
    );
  });

  it("should return max color for scores above 70", () => {
    expect(getColorBasedOnScore({ score: 71, fieldType: "cell" })).toBe(
      tableColors.max.cell,
    );
    expect(getColorBasedOnScore({ score: "90", fieldType: "header" })).toBe(
      tableColors.max.header,
    );
  });

  it("should handle non-numeric string scores as NaN and return max color", () => {
    // Assuming that the behavior for non-numeric strings is to treat them as NaN and hence return max color.
    expect(
      getColorBasedOnScore({ score: "non-numeric-string", fieldType: "cell" }),
    ).toBe(tableColors.max.cell);
  });
});
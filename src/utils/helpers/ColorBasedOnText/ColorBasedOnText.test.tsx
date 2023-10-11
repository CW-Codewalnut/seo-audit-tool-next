import { colors } from "@/utils/constants/constants";
import { ColorBasedOnText } from "./ColorBasedOnText";

describe("ColorBasedOnText", () => {
  it('should return max color for value "Yes"', () => {
    expect(ColorBasedOnText({ value: "Yes", fieldType: "cell" })).toEqual(
      colors.max.cell,
    );
    expect(ColorBasedOnText({ value: "Yes", fieldType: "header" })).toEqual(
      colors.max.header,
    );
  });

  it('should return min color for value "No"', () => {
    expect(ColorBasedOnText({ value: "No", fieldType: "cell" })).toEqual(
      colors.min.cell,
    );
    expect(ColorBasedOnText({ value: "No", fieldType: "header" })).toEqual(
      colors.min.header,
    );
  });

  it('should return normal color for value "Partial"', () => {
    expect(ColorBasedOnText({ value: "Partial", fieldType: "cell" })).toEqual(
      colors.normal.cell,
    );
    expect(
      ColorBasedOnText({ value: "Partial", fieldType: "header" }),
    ).toEqual(colors.normal.header);
  });
});
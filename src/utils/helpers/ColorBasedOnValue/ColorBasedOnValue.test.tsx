import { colors } from "@/utils/constants/constants";
import { ColorBasedOnValue } from "./ColorBasedOnValue";

describe("ColorBasedOnValue", () => {
  it('should return max color for value "Yes"', () => {
    expect(ColorBasedOnValue({ value: "Yes", fieldType: "cell" })).toEqual(
      colors.max.cell,
    );
    expect(ColorBasedOnValue({ value: "Yes", fieldType: "header" })).toEqual(
      colors.max.header,
    );
  });

  it('should return min color for value "No"', () => {
    expect(ColorBasedOnValue({ value: "No", fieldType: "cell" })).toEqual(
      colors.min.cell,
    );
    expect(ColorBasedOnValue({ value: "No", fieldType: "header" })).toEqual(
      colors.min.header,
    );
  });

  it('should return normal color for value "Partial"', () => {
    expect(ColorBasedOnValue({ value: "Partial", fieldType: "cell" })).toEqual(
      colors.normal.cell,
    );
    expect(
      ColorBasedOnValue({ value: "Partial", fieldType: "header" }),
    ).toEqual(colors.normal.header);
  });
});

import { TABLE_COLOR } from "@/utils/constants/constants";
import { getColorBasedOnText } from "./getColorBasedOnText";

describe("getColorBasedOnText", () => {
  it('should return max color for value "Yes"', () => {
    expect(getColorBasedOnText({ value: "Yes", fieldType: "cell" })).toEqual(
      TABLE_COLOR.max.cell,
    );
    expect(getColorBasedOnText({ value: "Yes", fieldType: "header" })).toEqual(
      TABLE_COLOR.max.header,
    );
  });

  it('should return min color for value "No"', () => {
    expect(getColorBasedOnText({ value: "No", fieldType: "cell" })).toEqual(
      TABLE_COLOR.min.cell,
    );
    expect(getColorBasedOnText({ value: "No", fieldType: "header" })).toEqual(
      TABLE_COLOR.min.header,
    );
  });

  it('should return normal color for value "Partial"', () => {
    expect(getColorBasedOnText({ value: "Partial", fieldType: "cell" })).toEqual(
      TABLE_COLOR.normal.cell,
    );
    expect(
      getColorBasedOnText({ value: "Partial", fieldType: "header" }),
    ).toEqual(TABLE_COLOR.normal.header);
  });
});
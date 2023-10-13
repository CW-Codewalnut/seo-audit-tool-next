import { tableColors } from "@/utils/constants/constants";
import { getColorBasedOnText } from "./getColorBasedOnText";

describe("getColorBasedOnText", () => {
  it('should return max color for value "Yes"', () => {
    expect(getColorBasedOnText({ value: "Yes", fieldType: "cell" })).toEqual(
      tableColors.max.cell,
    );
    expect(getColorBasedOnText({ value: "Yes", fieldType: "header" })).toEqual(
      tableColors.max.header,
    );
  });

  it('should return min color for value "No"', () => {
    expect(getColorBasedOnText({ value: "No", fieldType: "cell" })).toEqual(
      tableColors.min.cell,
    );
    expect(getColorBasedOnText({ value: "No", fieldType: "header" })).toEqual(
      tableColors.min.header,
    );
  });

  it('should return normal color for value "Partial"', () => {
    expect(getColorBasedOnText({ value: "Partial", fieldType: "cell" })).toEqual(
      tableColors.normal.cell,
    );
    expect(
      getColorBasedOnText({ value: "Partial", fieldType: "header" }),
    ).toEqual(tableColors.normal.header);
  });
});
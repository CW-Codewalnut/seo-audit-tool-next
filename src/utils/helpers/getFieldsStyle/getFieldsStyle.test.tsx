
import { TABLE_COLOR } from "@/utils/constants/constants";
import { getFieldsStyle, FieldsStyleArgs } from "./getFieldsStyle";

describe("getFieldsStyle", () => {
  const getStyles = (additionalProps?: Partial<FieldsStyleArgs>) => {
    const defaultProps: FieldsStyleArgs = {
      item: { fields: { yourScore: "Yes" } },
      order: 1,
      fieldType: "cell",
      tag: "",
      subTags: "",
    };

    return getFieldsStyle({ ...defaultProps, ...additionalProps });
  };

  it("should return max color for value 'Yes' with fieldType 'cell'", () => {
    const styles = getStyles();
    expect(styles).toEqual(TABLE_COLOR.max.cell);
  });

  it("should return max color for value 'Yes' with fieldType 'header'", () => {
    const styles = getStyles({ fieldType: "header" });
    expect(styles).toEqual(TABLE_COLOR.max.header);
  });

  it("should return min color for value 'No' with fieldType 'header'", () => {
    const styles = getStyles({
      fieldType: "header",
      item: { fields: { yourScore: "No" } },
    });
    expect(styles).toEqual(TABLE_COLOR.min.header);
  });

  it("should return min color for value 'No' with fieldType 'cell'", () => {
    const styles = getStyles({ item: { fields: { yourScore: "No" } } });
    expect(styles).toEqual(TABLE_COLOR.min.cell);
  });

  it("should return normal color for value 'Partial' with fieldType 'header'", () => {
    const styles = getStyles({
      fieldType: "header",
      item: { fields: { yourScore: "Partial" } },
    });
    expect(styles).toEqual(TABLE_COLOR.normal.header);
  });

  it("should return normal color for value 'Partial' with fieldType 'cell'", () => {
    const styles = getStyles({ item: { fields: { yourScore: "Partial" } } });
    expect(styles).toEqual(TABLE_COLOR.normal.cell);
  });

  it("should return max color for value more then '70' with sub tag 'Mobile score'", () => {
    const styles = getStyles({
      item: { fields: { yourScore: 72 } },
      subTags: "Mobile score",
    });
    expect(styles).toEqual(TABLE_COLOR.max.cell);
  });

  it("should return min color for value less then '30' with sub tag 'Mobile score'", () => {
    const styles = getStyles({
      item: { fields: { yourScore: 10 } },
      subTags: "Mobile score",
    });
    expect(styles).toEqual(TABLE_COLOR.min.cell);
  });

  it("should return normal color for value between '30' to '70' with sub tag 'Mobile score'", () => {
    const styles = getStyles({
      item: { fields: { yourScore: 55 } },
      subTags: "Mobile score",
    });
    expect(styles).toEqual(TABLE_COLOR.normal.cell);
  });

  it("should return max color for value more then '80' with sub tag 'Desktop score'", () => {
    const styles = getStyles({
      item: { fields: { yourScore: 87 } },
      subTags: "Desktop score",
    });
    expect(styles).toEqual(TABLE_COLOR.max.cell);
  });

  it("should return min color for value less then '30' with sub tag 'Desktop score'", () => {
    const styles = getStyles({
      item: { fields: { yourScore: 10 } },
      subTags: "Desktop score",
    });
    expect(styles).toEqual(TABLE_COLOR.min.cell);
  });

  it("should return normal color for value between '30' to '80' with sub tag 'Desktop score'", () => {
    const styles = getStyles({
      item: { fields: { yourScore: 50 } },
      subTags: "Desktop score",
    });
    expect(styles).toEqual(TABLE_COLOR.normal.cell);
  });

  it("should return max color for value more then '90' with sub tag 'Accessibility'", () => {
    const styles = getStyles({
      item: { fields: { yourScore: 92 } },
      subTags: "Accessibility",
    });
    expect(styles).toEqual(TABLE_COLOR.max.cell);
  });

  it("should return min color for value less then '70' with sub tag 'Accessibility'", () => {
    const styles = getStyles({
      item: { fields: { yourScore: 34 } },
      subTags: "Accessibility",
    });
    expect(styles).toEqual(TABLE_COLOR.min.cell);
  });

  it("should return normal color for value between '70' to '90' with sub tag 'Accessibility'", () => {
    const styles = getStyles({
      item: { fields: { yourScore: 84 } },
      subTags: "Accessibility",
    });
    expect(styles).toEqual(TABLE_COLOR.normal.cell);
  });

  it("should return header color when fieldType is 'header' and fields are undefined", () => {
    const styles = getStyles({
      item: { fields: { yourScore: undefined } },
      fieldType: "header",
    });
    expect(styles).toEqual(TABLE_COLOR.header.header);
  });

  it("should return default color when tag 'Web Vitals'", () => {
    const styles = getStyles({
      item: { fields: { yourScore: undefined } },
      tag: "Web Vitals",
    });
    expect(styles).toEqual(TABLE_COLOR.default.cell);
  });
});
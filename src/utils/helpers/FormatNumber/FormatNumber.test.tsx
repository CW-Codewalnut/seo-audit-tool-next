import { FormatNumber } from "./FormatNumber";

describe("FormatNumber", () => {
  it("should return the same number if it is less than 1000", () => {
    expect(FormatNumber(500)).toBe(500);
  });

  it('should format a number greater than 1000 with "k" and up to one decimal place', () => {
    expect(FormatNumber(1500)).toBe("1.5k");
    expect(FormatNumber(2000)).toBe("2k");
  });

  it('should omit the decimal part if it is ".0"', () => {
    expect(FormatNumber(1000)).toBe("1k");
    expect(FormatNumber(2000)).toBe("2k");
  });

  it("should return the same string if input is a string", () => {
    expect(FormatNumber("xyz")).toBe("xyz");
    expect(FormatNumber("abcd")).toBe("abcd");
  });
});

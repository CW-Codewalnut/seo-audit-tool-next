import { getFormatNumber } from "./getFormatNumber";

describe("getFormatNumber", () => {
  it("should return the same number if it is less than 1000", () => {
    expect(getFormatNumber(500)).toBe(500);
  });

  it('should format a number greater than 1000 with "k" and up to one decimal place', () => {
    expect(getFormatNumber(1500)).toBe("1.5k");
    expect(getFormatNumber(2000)).toBe("2k");
  });

  it('should omit the decimal part if it is ".0"', () => {
    expect(getFormatNumber(1000)).toBe("1k");
    expect(getFormatNumber(2000)).toBe("2k");
  });

  it("should return the same string if input is a string", () => {
    expect(getFormatNumber("xyz")).toBe("xyz");
    expect(getFormatNumber("abcd")).toBe("abcd");
  });
});
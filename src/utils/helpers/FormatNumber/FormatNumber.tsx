export function FormatNumber(number: number | string) {
  if (typeof number === "number") {
    if (number >= 1000) {
      const formattedNumber = (number / 1000).toFixed(1);
      return formattedNumber.endsWith(".0")
        ? `${formattedNumber.slice(0, -2)}k`
        : `${formattedNumber}k`;
    }
  }
  return number;
}

export function getFormatNumber(number: number | string) {
    const value = Number(number);
    if (value && value >= 1000) {
        const formattedNumber = (value / 1000).toFixed(1);
        return formattedNumber.endsWith(".0")
          ? `${formattedNumber.slice(0, -2)}k`
          : `${formattedNumber}k`;
      }
    return number;
  }
import { colors } from "@/Constants/constants";

interface ColorBasesOnValueProps {
  value: "Yes" | "No" | "Partial";
  fieldType: "cell" | "header";
}

export const ColorBasedOnValue = ({
  value,
  fieldType,
}: ColorBasesOnValueProps): { backgroundColor: string; color: string } => {
  const colorMap: Record<string, { backgroundColor: string; color: string }> = {
    Yes: colors.max[fieldType],
    No: colors.min[fieldType],
    Partial: colors.normal[fieldType],
  };
  return colorMap[value];
};

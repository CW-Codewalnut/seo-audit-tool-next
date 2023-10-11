import { colors } from "@/utils/constants/constants";

interface ColorBasesOnTextProps {
  value: "Yes" | "No" | "Partial";
  fieldType: "cell" | "header";
}

export const ColorBasedOnText = ({
  value,
  fieldType,
}: ColorBasesOnTextProps): { backgroundColor: string; color: string } => {
  const colorMap: Record<string, { backgroundColor: string; color: string }> = {
    Yes: colors.max[fieldType],
    No: colors.min[fieldType],
    Partial: colors.normal[fieldType],
  };
  return colorMap[value];
};

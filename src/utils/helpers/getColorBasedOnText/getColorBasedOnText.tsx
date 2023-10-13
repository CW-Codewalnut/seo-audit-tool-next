import { tableColors } from "@/utils/constants/constants";

interface ColorBasesOnTextArgs {
  value: "Yes" | "No" | "Partial";
  fieldType: "cell" | "header";
}

export const getColorBasedOnText = ({
  value,
  fieldType,
}: ColorBasesOnTextArgs): { backgroundColor: string; color: string } => {
  const colorMap: Record<string, { backgroundColor: string; color: string }> = {
    Yes: tableColors.max[fieldType],
    No: tableColors.min[fieldType],
    Partial: tableColors.normal[fieldType],
  };
  return colorMap[value];
};

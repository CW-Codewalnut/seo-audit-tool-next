import { TABLE_COLOR } from "@/utils/constants/constants";

interface ColorBasesOnTextArgs {
  value: "Yes" | "No" | "Partial";
  fieldType: "cell" | "header";
}

export const getColorBasedOnText = ({
  value,
  fieldType,
}: ColorBasesOnTextArgs): { backgroundColor: string; color: string } => {
  const colorMap: Record<string, { backgroundColor: string; color: string }> = {
    Yes: TABLE_COLOR.max[fieldType],
    No: TABLE_COLOR.min[fieldType],
    Partial: TABLE_COLOR.normal[fieldType],
  };
  return colorMap[value];
};

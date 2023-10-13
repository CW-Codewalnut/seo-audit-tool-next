import { tableColors } from "@/utils/constants/constants";

interface ColorBasedOnScoreArgs {
  score: string | number;
  fieldType: "cell" | "header";
}

export const getColorBasedOnScore = ({
  score,
  fieldType,
}: ColorBasedOnScoreArgs) => {
  const numericScore = typeof score === "string" ? parseFloat(score) : score;
  if (numericScore < 30) return tableColors.min[fieldType];
  if (numericScore >= 30 && numericScore <= 70) return tableColors.normal[fieldType];
  return tableColors.max[fieldType];
};

import { TABLE_COLOR } from "@/utils/constants/constants";

interface ColorBasedOnScoreArgs {
  score: string | number;
  fieldType: "cell" | "header";
}

export const getColorBasedOnScore = ({
  score,
  fieldType,
}: ColorBasedOnScoreArgs) => {
  const numericScore = typeof score === "string" ? parseFloat(score) : score;
  if (numericScore < 30) return TABLE_COLOR.min[fieldType];
  if (numericScore >= 30 && numericScore <= 70) return TABLE_COLOR.normal[fieldType];
  return TABLE_COLOR.max[fieldType];
};

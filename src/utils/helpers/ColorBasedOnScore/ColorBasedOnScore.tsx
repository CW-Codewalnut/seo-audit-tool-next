import { colors } from "@/utils/constants/constants";

interface ColorBasedOnScoreProps {
  score: string | number;
  fieldType: "cell" | "header";
}

export const ColorBasedOnScore = ({
  score,
  fieldType,
}: ColorBasedOnScoreProps) => {
  const numericScore = typeof score === "string" ? parseFloat(score) : score;
  if (numericScore < 30) return colors.min[fieldType];
  if (numericScore >= 30 && numericScore <= 70) return colors.normal[fieldType];
  return colors.max[fieldType];
};

import { TABLE_COLOR } from "../../constants/constants";
import { getColorBasedOnText } from "../getColorBasedOnText/getColorBasedOnText";

type ItemType = {
  fields?: {
    yourScore?: string | number;
    yourCompiteiter1?: string | number;
    yourCompiteiter2?: string | number;
    Tags?: string[];
    Name?: string;
  };
};

export interface FieldsStyleArgs {
  item: ItemType;
  order: number;
  fieldType?: "cell" | "header";
  tag?: string;
  subTags: string;
}

export const getFieldsStyle = ({
  item,
  order,
  fieldType = "cell",
  tag = "",
  subTags = "",
}: FieldsStyleArgs): { backgroundColor: string; color: string } => {
  const fields = item?.fields || {};
  const {
    yourScore,
    yourCompiteiter1: comp1,
    yourCompiteiter2: comp2,
  } = fields;
  const scores: (string | number | undefined)[] = [yourScore, comp1, comp2];
  const checkScores = (
    conditionFn: (score: string | number | undefined) => boolean,
  ): boolean => conditionFn(scores[order - 1]);

  if (
    checkScores(
      (value) => value === "Yes" || value === "No" || value === "Partial",
    )
  ) {
    const scoreValue = scores[order - 1];
    return getColorBasedOnText({
      value: scoreValue as "Yes" | "No" | "Partial",
      fieldType,
    });
  }
  switch (subTags) {
    case "Mobile score":
    case "Desktop score":
    case "Accessibility": {
      const thresholds = {
        "Mobile score": [30, 70],
        "Desktop score": [30, 80],
        Accessibility: [70, 90],
      };
      const [min, max] = thresholds[subTags];
      if (checkScores((score) => Number(score) < min)) {
        return TABLE_COLOR.min[fieldType];
      }
      if (checkScores((score) => Number(score) > max)) {
        return TABLE_COLOR.max[fieldType];
      }
      if (
        checkScores((score) => Number(score) >= min && Number(score) <= max)
      ) {
        return TABLE_COLOR.normal[fieldType];
      }
      break;
    }
    default:
      if (tag === "Web Vitals" || fieldType === "header") {
        return TABLE_COLOR[fieldType === "header" ? "header" : "default"][fieldType];
      }
  }

  return TABLE_COLOR.default[fieldType];
};
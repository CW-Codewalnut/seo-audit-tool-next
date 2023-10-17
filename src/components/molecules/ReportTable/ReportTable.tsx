import React from "react";
import { getFieldsStyle } from "@/utils/helpers/getFieldsStyle/getFieldsStyle";
import { getFormatedNumber } from "@/utils/helpers/getFormatNumber/getFormatNumber";

export type RecordFields = {
  yourScore?: string | number;
  yourCompiteiter1?: string | number;
  yourCompiteiter2?: string | number;
  Tags: string[];
  Name: string;
};
export interface ScoreData {
  id: string;
  fields: RecordFields;
}
export interface ReportTableProps {
  tableHeader?: string;
  tableBody: ScoreData[];
  tag: string;
}

export function ReportTable({ tableHeader, tableBody, tag }: ReportTableProps) {
  return (
    <tbody>
      {tableBody
        ?.filter((item: any) => item.fields.Name !== tableHeader)
        .map((item: any) => (
          <tr key={item.id}>
            <td className="bg-[#e9f0f5] text-deepNavy"> {item.fields.Name}</td>
            <td
              style={getFieldsStyle({
                item,
                order: 1,
                fieldType: "cell",
                tag,
                subTags: item.fields.Name,
              })}
            >
              {getFormatedNumber(item.fields.yourScore || "")}
            </td>
            {item?.fields?.yourCompiteiter1 && (
              <td
                style={getFieldsStyle({
                  item,
                  order: 2,
                  fieldType: "cell",
                  tag,
                  subTags: item.fields.Name,
                })}
              >
                {getFormatedNumber(item.fields.yourCompiteiter1 || "")}
              </td>
            )}
            {item?.fields?.yourCompiteiter2 && (
              <td
                style={getFieldsStyle({
                  item,
                  order: 3,
                  fieldType: "cell",
                  tag,
                  subTags: item.fields.Name,
                })}
              >
                {getFormatedNumber(item.fields.yourCompiteiter2 || "")}
              </td>
            )}
          </tr>
        ))}
    </tbody>
  );
}

import React from "react";
import { FieldsStyle } from "@/utils/helpers/FieldsStyle/FieldsStyle";
import { FormatNumber } from "@/utils/helpers/FormatNumber/FormatNumber";

export type RecordFields = {
  yourScore?: string | number;
  yourCompiteiter1?: string | number;
  yourCompiteiter2?: string | number;
  Tags: string[];
  Name: string;
};
export interface ResponseData {
  id: string;
  fields: RecordFields;
  createdTime?: string;
}
export interface ReportTableProps {
  tableHeader?: string;
  tableBody: (ResponseData | Partial<ResponseData>)[];
  tag: string;
}

export function ReportTable({ tableHeader, tableBody, tag }: ReportTableProps) {
  return (
    <tbody>
      {tableBody
        ?.filter((item: any) => item.fields.Name !== tableHeader)
        .map((item: any) => (
          <tr key={item.id}>
            <td className="bg-[#e9f0f5] text-[#0f2a3d]"> {item.fields.Name}</td>
            <td
              style={FieldsStyle({
                item,
                order: 1,
                fieldType: "cell",
                tag,
                subTags: item.fields.Name,
              })}
            >
              {FormatNumber(item.fields.yourScore || "")}
            </td>
            {item?.fields?.yourCompiteiter1 && (
              <td
                style={FieldsStyle({
                  item,
                  order: 2,
                  fieldType: "cell",
                  tag,
                  subTags: item.fields.Name,
                })}
              >
                {FormatNumber(item.fields.yourCompiteiter1 || "")}
              </td>
            )}
            {item?.fields?.yourCompiteiter2 && (
              <td
                style={FieldsStyle({
                  item,
                  order: 3,
                  fieldType: "cell",
                  tag,
                  subTags: item.fields.Name,
                })}
              >
                {FormatNumber(item.fields.yourCompiteiter2 || "")}
              </td>
            )}
          </tr>
        ))}
    </tbody>
  );
}

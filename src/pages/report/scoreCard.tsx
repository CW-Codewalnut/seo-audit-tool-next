import React from "react";
import { ReportTable } from "@/components/molecules/ReportTable/ReportTable";
import { arrayOfTags } from "@/Constants/constants";

type RecordFields = {
  yourScore?: string | number;
  yourCompiteiter1?: string | number;
  yourCompiteiter2?: string | number;
  Tags: string[];
  Name: string;
};
export interface ResponseData {
  id: string;
  fields: RecordFields;
}

interface ScoreCardProps {
  responseData: ResponseData[];
  companyData?: ResponseData;
}

export function ScoreCard({ responseData, companyData }: ScoreCardProps) {
  return (
    <>
      <h2 className="font-bold md:text-xl lg:text-4xl">SEO scorecard</h2>
      <table>
        <tbody>
          <tr>
            <td />
            {companyData?.fields?.yourScore && (
              <td>{companyData.fields.yourScore}</td>
            )}
            {companyData?.fields?.yourCompiteiter1 && (
              <td>{companyData.fields.yourCompiteiter1}</td>
            )}
            {companyData?.fields?.yourCompiteiter2 && (
              <td>{companyData.fields.yourCompiteiter2}</td>
            )}
          </tr>
        </tbody>
      </table>
      {arrayOfTags.map((tag) => {
        const tableBody = responseData?.filter(
          (item) => item?.fields?.Tags[0].trim() === tag,
        );

        const tableHeader = tableBody?.find(
          (item) => item?.fields?.Name.trim() === tag,
        );

        return (
          <table className="mt-2 md:mt-5">
            <thead>
              <tr>
                <td className="bg-[#0f2a3d] text-white">
                  {tableHeader?.fields?.Name}
                </td>
                {companyData?.fields?.yourScore && (
                  <td style={{ backgroundColor: "rgb(15, 42, 61)" }} />
                )}
                {companyData?.fields?.yourCompiteiter1 && (
                  <td style={{ backgroundColor: "rgb(15, 42, 61)" }} />
                )}
                {companyData?.fields?.yourCompiteiter2 && (
                  <td style={{ backgroundColor: "rgb(15, 42, 61)" }} />
                )}
              </tr>
            </thead>
              <ReportTable
                tableHeader={tableHeader?.fields?.Name}
                tableBody={tableBody}
                tag={tag}
              />
            
          </table>
        );
      })}
    </>
  );
}

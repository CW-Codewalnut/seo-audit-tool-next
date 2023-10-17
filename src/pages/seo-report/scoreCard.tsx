import React from "react";
import { ReportTable } from "@/components/molecules/ReportTable/ReportTable";
import { ARRAY_OF_TAGS } from "@/utils/constants/constants";

type RecordFields = {
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

interface ScoreCardProps {
  scoreData: ScoreData[];
  companyData?: ScoreData;
}

export default function ScoreCard({ scoreData, companyData }: ScoreCardProps) {
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
      {ARRAY_OF_TAGS.map((tag) => {
        const tableBody = scoreData?.filter(
          (item) => item?.fields?.Tags?.[0].trim() === tag,
        );

        const tableHeader = tableBody?.find(
          (item) => item?.fields?.Name.trim() === tag,
        );

        return (
          <table className="mt-2 md:mt-5">
            <thead>
              <tr>
                <td className="bg-deepNavy text-white">
                  {tableHeader?.fields?.Name}
                </td>
                {companyData?.fields?.yourScore && (
                  <td className="bg-deepNavy" />
                )}
                {companyData?.fields?.yourCompiteiter1 && (
                  <td className="bg-deepNavy" />
                )}
                {companyData?.fields?.yourCompiteiter2 && (
                  <td className="bg-deepNavy" />
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

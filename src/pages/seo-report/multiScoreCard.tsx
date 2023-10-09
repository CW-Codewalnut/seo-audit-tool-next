import React from "react";
import { arrayOfTags, technicalTerms } from "@/Constants/constants";
import { ReportTable } from "@/components/molecules/ReportTable/ReportTable";
import { Banner } from "@/components/atoms/Banner/Banner";
import { Card } from "@/components/atoms/Card/Card";
import { InfoCard } from "@/components/atoms/InfoCard/InfoCard";

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

export default function MultiScoreCard({
  responseData,
  companyData,
}: ScoreCardProps) {
  return (
    <>
    <Banner
        bannerUrl="/img/banner-image.webp"
        heading="Website health scorecard"
        subHeading={companyData?.fields?.yourScore || ""}
      />
      <Card className="mt-[-220px] md:mt-[-200px] md:w-[100%] lg:w-[80%] mx-auto">
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
      </Card> 
      <div className="mx-auto w-[80%]">
        <InfoCard technicalTerms={technicalTerms} />
      </div>  
    </>
  );
}

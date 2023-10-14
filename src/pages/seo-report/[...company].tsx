import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Banner } from "@/components/atoms/Banner/Banner";
import { Card } from "@/components/atoms/Card/Card";
import { Header } from "@/components/atoms/Header/Header";
import { Spinner } from "@/components/atoms/Spinner/Spinner";
import { LIST_OF_TECHNICAL_TERMS } from "@/utils/constants/constants";
import { fetchTableData } from "@/utils/api/airtableEndPoints";
import { InfoCard } from "@/components/atoms/InfoCard/InfoCard";
import ScoreCard, { ResponseData } from "./scoreCard";

export default function Report() {
  const router = useRouter();
  const [scoreData, setScoreData] = useState<ResponseData[]>();
  const [companyData, setCompanyData] = useState<ResponseData>();

  const { company } = router.query;
  const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  useEffect(() => {
    if (company) {
      fetchTableData(company[0])
        .then((res) => {
          const companyName = res.data.records.find(
            (item: ResponseData) => item?.fields?.Tags?.[0] === "CompanyName"
          );
  
          setScoreData(res.data.records);
          setCompanyData(companyName);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    }
  }, [company]);

  return (
    <>
      <Header companyLogo="/img/LeadwalnutIcon.svg" companyLogoAltText="Company logo" />
      <Banner
        bannerUrl="/img/banner-image.webp"
        heading="Website health scorecard"
        subHeading={companyData?.fields?.yourScore || ""}
        bannerAltTag="main banner"
      />
      <div className="mx-auto mt-[-220px] md:mt-[-150px] md:w-[100%] lg:w-[80%]">
        {scoreData ? (
          <>
            <Card>
              <ScoreCard
                scoreData={scoreData}
                companyData={companyData}
              />
            </Card>
            {company && (
              <a
                href={`${BACKEND_BASE_URL}/generate-pdf?companyName=${company}`}
                target="_blank"
                className="mt-5 flex w-fit justify-center rounded-xl bg-lightGreen py-2 px-5 font-semibold text-white hover:bg-darkGreen"
                rel="noreferrer"
              >
                Download Report in PDF{" "}
                <Image
                 src="/img/download-icon.svg"
                 alt="download icon"
                 className="ml-3"
                 width={20}
                 height={20}
                />
              </a>
            )}
          </>
        ) : (
          <Spinner />
        )}

        <InfoCard listOfTechnicalTerms={LIST_OF_TECHNICAL_TERMS} />
      </div>
      <footer className="w-full bg-green-800 p-4 py-6 text-center text-xs text-green-400 md:text-lg">
         LeadWalnut is a brand of Bizboost Business Solutions LLP.
      </footer>
    </>
  );
}
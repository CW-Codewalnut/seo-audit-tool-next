import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Banner } from "@/components/atoms/Banner/Banner";
import { Card } from "@/components/atoms/Card/Card";
import { Footer } from "@/components/atoms/Footer/Footer";
import { Header } from "@/components/atoms/Header/Header";
import { InfoCard } from "@/components/atoms/InfoCard/InfoCard";
import { Spinner } from "@/components/atoms/Spinner/Spinner";
import { TableData } from "@/utils/api/airtableEndPoints";
import { technicalTerms } from "@/utils/constants/constants";
import ScoreCard, { ResponseData } from "./scoreCard";

export default function Report() {
  const router = useRouter();
  const [responseData, setResponseData] = useState<ResponseData[]>();
  const [companyData, setCompanyData] = useState<ResponseData>();

  const { company } = router.query;
  const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  useEffect(() => {
    if (company) {
      TableData(company[0])
        .then((res) => {
          setResponseData(res.data.records);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }
  }, [company]);

  useEffect(() => {
    if (responseData) {
      const companyName = responseData?.filter(
        (item) => item?.fields?.Tags?.[0] === "CompanyName",
      );
      setCompanyData(companyName[0]);
    }
  }, [responseData]);

  return (
    <>
      <Header companyLogo="/img/LeadwalnutIcon.svg" altText="Company logo" />
      <Banner
        bannerUrl="/img/banner-image.webp"
        heading="Website health scorecard"
        subHeading={companyData?.fields?.yourScore || ""}
      />
      <div className="mx-auto mt-[-220px] md:mt-[-200px] md:w-[100%] lg:w-[80%]">
        {responseData ? (
          <>
            <Card>
              <ScoreCard
                responseData={responseData}
                companyData={companyData}
              />
            </Card>
            {company && (
              <a
                href={`${BACKEND_BASE_URL}/generate-pdf?companyName=${company}`}
                target="_blank"
                className="mt-5 flex w-fit justify-center rounded-xl bg-[#78C317] py-2 px-5 font-semibold text-white hover:bg-[#5A960C]"
                rel="noreferrer"
              >
                Download Report in PDF{" "}
                <img
                  src="/img/download-icon.svg"
                  alt="download icon"
                  className="ml-3"
                />
              </a>
            )}
          </>
        ) : (
          <Spinner />
        )}

        <InfoCard technicalTerms={technicalTerms} />
      </div>
      <Footer />
    </>
  );
}

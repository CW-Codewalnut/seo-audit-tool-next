import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer } from "@/components/atoms/Footer/Footer";
import { Header } from "@/components/atoms/Header/Header";
import { Spinner } from "@/components/atoms/Spinner/Spinner";
import { TableData } from "@/utils/api/airtableEndPoints";
import MultiScoreCard, { ResponseData } from "./multiScoreCard";
import { SingleScoreCard } from "./singleScoreCard";

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
      {responseData ? (
        <>
          {companyData?.fields?.yourCompiteiter1 ? (
            <MultiScoreCard
              responseData={responseData}
              companyData={companyData}
            />
          ) : (
            <SingleScoreCard responseData={responseData} />
          )}

          {company && (
            <a
              href={`${BACKEND_BASE_URL}/generate-pdf?companyName=${company}`}
              target="_blank"
              className="mx-auto my-5 flex w-fit justify-center rounded-xl bg-[#78C317] py-2 px-5 font-semibold text-white hover:bg-[#5A960C]"
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

      <Footer />
    </>
  );
}

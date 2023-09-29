import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { technicalTerms } from "@/Constants/constants";
import { toast } from "react-toastify";
import { Banner } from "@/components/atoms/Banner/Banner";
import { Button } from "@/components/atoms/Button/Button";
import { Card } from "@/components/atoms/Card/Card";
import { Footer } from "@/components/atoms/Footer/Footer";
import { Header } from "@/components/atoms/Header/Header";
import { InfoCard } from "@/components/atoms/InfoCard/InfoCard";
import { Spinner } from "@/components/atoms/Spinner/Spinner";
import { DownloadPDF, TableData } from "@/utils/api/airtableEndPoints";
import ScoreCard, { ResponseData } from "./scoreCard";

export default function Report() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
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

  const handleDownloadPdf = () => {
    setIsLoading(true);
    if (company)
      DownloadPDF(company[0])
        .then((response) => {
          const blob = new Blob([response.data], { type: "application/pdf" });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "seo-audit-report.pdf";
          // a.click();
          window.URL.revokeObjectURL(url);
          toast.success("PDF downloaded successfully");
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error("Error downloading PDF:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
  };

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
            <a href={`${BACKEND_BASE_URL}/generate-pdf?queryParam1=${company}`}>
            <Button
              className="my-3 mx-2.5 md:my-5 md:mx-0"
              onClick={handleDownloadPdf}
              trailingIcon="/img/download-icon.svg"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Download Report in PDF"}
            </Button>
            </a>
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

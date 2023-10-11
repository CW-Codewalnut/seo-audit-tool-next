import DoughnutChart from "@/components/atoms/DoughnutChart/DoughnutChart";
import { ResponseData } from "../ReportTable/ReportTable";

interface SingleClientHeaderProps {
  companyData: ResponseData[];
  overallPerformance: any;
}

export function SingleClientHeader({ companyData, overallPerformance }: SingleClientHeaderProps) {
  const overallPerformanceData = overallPerformance[0]?.fields?.yourScore;

  const chartData = {
    labels: ["Red", "white"],
    datasets: [
      {
        label: "# of Votes",
        data: [overallPerformanceData],
        backgroundColor: ["#FFBE00", "#E9F0F5"],
        borderColor: ["#FFBE00", "#E9F0F5"],
        borderWidth: 1,
      },
    ],
  };

  const createdTime = companyData[0]?.createdTime;
  const formattedDate = createdTime
    ? `${new Date(createdTime).getDate()} ${new Date(
        createdTime,
      ).toLocaleString("default", { month: "short" })} ${new Date(
        createdTime,
      ).getFullYear()}`
    : "";

  return (
    <div className="bg-white py-10">
      <div className="mx-auto justify-between gap-5 px-5 md:flex md:w-[70%] md:px-0">
        <div className="flex gap-5">
          <img
            src={companyData[0]?.fields?.Name}
            alt=""
            className="h-16 w-16 rounded-lg"
          />
          <div>
            <h1 className="text-sm font-semibold">{companyData[0]?.fields?.yourScore}</h1>
            <h2 className="text-xl font-bold">
              Website
              <br /> health scorecard
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <DoughnutChart data={chartData} />
          <div>
            <p className="text-base font-bold">
              Overall
              <br />
              Performance
            </p>
            <p>As on {formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

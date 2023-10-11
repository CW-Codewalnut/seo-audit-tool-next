import { arrayOfTags, technicalTerms } from "@/Constants/constants";
import { DetailCard } from "@/components/atoms/DetailCard/DetailCard";
import { SingleClientHeader } from "@/components/molecules/SingleClientHeader/SingleClientHeader";
import { FieldsStyle } from "@/utils/helpers/FieldsStyle/FieldsStyle";
import { ResponseData } from "./multiScoreCard";

interface SingleClientProps {
  responseData: ResponseData[];
}

export function SingleScoreCard({ responseData }: SingleClientProps) {
  function filterDataOnTag(data: ResponseData[], tag: string) {
    const filteredData = data?.filter((item) => {
      if(tag === "Overall Performance"){
        return item.fields.Name === tag ;
      }
      return item.fields.Name !== tag && item.fields.Tags.includes(tag)
  });
    return filteredData;
  }

  return (
    <>
      <SingleClientHeader
        companyData={filterDataOnTag(responseData, "CompanyName")}
        overallPerformance={filterDataOnTag(responseData, "Overall Performance")}
      />
      <div className="mx-auto w-[90%] md:w-[70%]">
        {arrayOfTags.map((tag: string) => (
          <div className="border-b-2 border-[#CCD6DD] py-10 ">
            <p className="px-2 pb-4 text-lg font-medium">{tag}</p>
            <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-8 ">
              {filterDataOnTag(responseData, tag)?.map((item: any) => {
                const { backgroundColor, color } = FieldsStyle({
                  item,
                  order: 1,
                  fieldType: "cell",
                  tag,
                  subTags: item.fields.Name,
                });
                return (
                  <DetailCard
                    key={item.id}
                    tag={tag}
                    title={item.fields.Name}
                    scoreValue={item.fields.yourScore}
                    bgColor={backgroundColor}
                    flex={
                      tag === "Web Performance" || tag === "Trust & Authority"
                    }
                    textColor={color}
                  />
                );
              })}
            </div>
          </div>
        ))}

        <div className="my-4">
          <p className="font-medium text-black md:text-xs lg:text-xl">
            Technical compliance
          </p>
          <p className="py-4 lg:text-xl">
            There are some more critical, technical SEO elements which can only
            be assessed with GA4 and GSC access.
          </p>
        </div>
        <div className="mb-10 grid grid-cols-1 gap-4 rounded-tl-[20px] rounded-br-[20px] rounded-tr-md rounded-bl-md bg-neutral-50 p-6 drop-shadow-lg md:p-6 lg:grid-cols-3 lg:p-10">
          {technicalTerms?.map((term) => (
             <div className="flex" key={term}>
              <p className="text-base font-bold text-[#1cbd66] lg:text-2xl">
                ✓
              </p>
              <p className="mt-1 px-4 text-base lg:text-xl">{term}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

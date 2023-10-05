import { technicalTerms } from "@/Constants/constants";
import { BigCard } from "@/components/atoms/BigCard/BigCard";
import { SmallCard } from "@/components/atoms/SmallCard/SmallCard";
import { ResponseData } from "./scoreCard";

interface SingleClientProps {
  responseData?: ResponseData[];
}

export function SingleClinetCard({ responseData }: SingleClientProps) {
  function filterWebSetUp(data: ResponseData[] | undefined, tag: string) {
    const webSetUpData = data?.filter(
      (item) => item.fields.Name !== tag && item.fields.Tags.includes(tag),
    );

    return webSetUpData;
  }

  return (
    <>
      <div className="border-b-2 border-[#CCD6DD] py-10 ">
        <p className="px-2 pb-4 text-lg font-medium">Web Set Up</p>
        <div className="grid max-w-full grid-cols-2 gap-6 md:flex md:flex-wrap">
          {filterWebSetUp(responseData, "Web Set Up")?.map((item: any) => (
            <SmallCard
              key={item.id}
              title={item.fields.Name}
              scoreValue={item.fields.yourScore}
              className="h-[112px] min-w-[146px] flex-col justify-between p-5"
            />
          ))}
        </div>
      </div>

      <div className="border-b-2 border-[#CCD6DD] py-10 ">
        <p className="px-2 pb-4 text-lg font-medium">Web Vitals</p>
        <div className="grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filterWebSetUp(responseData, "Web Vitals")?.map((item: any) => (
            <BigCard
              key={item.id}
              title={item.fields.Name}
              scoreValue={item.fields.yourScore}
            />
          ))}
        </div>
      </div>

      <div className="border-b-2 border-[#CCD6DD] py-10 ">
        <p className="px-2 pb-4 text-lg font-medium">Meta Data Compliance</p>
        <div className="grid max-w-full grid-cols-2 gap-6 md:flex md:flex-wrap">
          {filterWebSetUp(responseData, "Meta Data Compliance")?.map(
            (item: any) => (
              <SmallCard
                key={item.id}
                title={item.fields.Name}
                scoreValue={item.fields.yourScore}
                className="h-[112px] min-w-[146px] flex-col justify-between p-5"
              />
            ),
          )}
        </div>
      </div>

      <div className="border-b-2 border-[#CCD6DD] py-10 ">
        <p className="px-2 pb-4 text-lg font-medium">Backlink Profile</p>
        <div className="grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filterWebSetUp(responseData, "Backlink Profile")?.map(
            (item: any) => (
              <BigCard
                key={item.id}
                title={item.fields.Name}
                scoreValue={item.fields.yourScore}
              />
            ),
          )}
        </div>
      </div>

      <div className="border-b-2 border-[#CCD6DD] py-10 ">
        <p className="px-2 pb-4 text-lg font-medium">Web Performance</p>
        <div className="grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {filterWebSetUp(responseData, "Web Performance")?.map((item: any) => (
            <SmallCard
              key={item.id}
              title={item.fields.Name}
              scoreValue={item.fields.yourScore}
              className="w-[300px] justify-between p-6"
            />
          ))}
        </div>
      </div>

      <div className="border-b-2 border-[#CCD6DD] py-10 ">
        <p className="px-2 pb-4 text-lg font-medium">Trust & Authority</p>
        <div className="grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {filterWebSetUp(responseData, "Trust & Authority")?.map(
            (item: any) => (
              <SmallCard
                key={item.id}
                title={item.fields.Name}
                scoreValue={item.fields.yourScore}
                className="w-[300px] justify-between p-6"
              />
            ),
          )}
        </div>
      </div>

      <div className="border-b-2 border-[#CCD6DD] py-10 ">
        <p className="px-2 pb-4 text-lg font-medium">Social Channels</p>
        <div className="grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {filterWebSetUp(responseData, "Social Channels")?.map((item: any) => (
            <SmallCard
              key={item.id}
              title={item.fields.Name}
              scoreValue={item.fields.yourScore}
              className="w-[300px] justify-between p-6"
            />
          ))}
        </div>
      </div>

      <div className="border-b-2 border-[#CCD6DD] py-10 ">
        <p className="px-2 pb-4 text-lg font-medium">Backlink Profile</p>
        <div className="grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filterWebSetUp(responseData, "Backlink Profile")?.map(
            (item: any) => (
              <BigCard
                key={item.id}
                title={item.fields.Name}
                scoreValue={item.fields.yourScore}
              />
            ),
          )}
        </div>
      </div>

      <div className="mx-2.5 p-2">
        <p className="font-medium text-black md:text-xs lg:text-xl">
          Technical compliance
        </p>
        <p className="py-4 lg:text-xl">
          There are some more critical, technical SEO elements which can only be
          assessed with GA4 and GSC access.
        </p>
      </div>
      <div className="mb-10 grid grid-cols-1 gap-4 rounded-tl-[20px] rounded-br-[20px] rounded-tr-md rounded-bl-md bg-neutral-50 p-6 drop-shadow-lg md:p-6 lg:grid-cols-3 lg:p-10">
        {technicalTerms?.map((term) => (
          <div className="flex" key={term}>
            <p className="text-base font-bold text-[#1cbd66] lg:text-2xl">✓</p>
            <p className="mt-1 px-4 text-base lg:text-xl">{term}</p>
          </div>
        ))}
      </div>
    </>
  );
}

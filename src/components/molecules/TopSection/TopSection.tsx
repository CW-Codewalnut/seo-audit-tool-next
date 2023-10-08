import Image from "next/image";

export function TopSection() {
  return (
    <div className="mx-auto w-full max-w-[1000px] mt-10">
      <article className="lg:flex-colX mx-auto flex flex-row">
        <div className="flex flex-1 gap-10">
          <Image
            src="/img/akasa_logo.png"
            alt="Company logo"
            width={65}
            height={10}
            className="h-16 rounded-md"
          />
          <div className="flex max-w-[266px] flex-col gap-2">
            <span className="-mt-1 text-lg font-medium text-[#5A6F7D]">
              Akasa Air
            </span>
            <h4 className="text-base font-bold lg:text-4xl">
              Website health scoreCard
            </h4>
          </div>
        </div>
        <div className="flex flex-1 gap-12">
          <div className="">Cricel</div>
          <div className="flex flex-col justify-center">
            <span className="text-sm font-medium lg:text-base ">
              Overall Performance
            </span>
            <span className="text-sm font-medium lg:text-base ">
              As on 22 Sep’23
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

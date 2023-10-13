import React from "react";

interface BannerProps {
  bannerUrl: string;
  heading: string;
  subHeading: string | number;
  bannerAltTag?: string;
}

export function Banner({ bannerUrl, heading, subHeading, bannerAltTag }: BannerProps) {
  return (
    <div className="h-[330px] relative">
      <img src={bannerUrl} alt={bannerAltTag} className="rounded-b-[5%] lg:h-[400px] w-full"/>
      <div className="absolute text-center w-full top-0">
      <h2 className="pt-5 text-center text-xl font-bold text-white md:pt-10 lg:text-5xl">
        {heading}
      </h2>
      <p className="mt-4 text-center text-base font-semibold capitalize text-lightGreen lg:mt-6 lg:text-2xl">
        {subHeading}
      </p>
      </div>
    </div>
  );
}

import React from "react";

interface BannerProps {
  bannerUrl: string;
  heading: string;
  subHeading: string;
}

export function Banner({ bannerUrl, heading, subHeading }: BannerProps) {
  return (
    <div
      style={{ backgroundImage: `url(${bannerUrl})` }}
      className="h-[330px] rounded-b-[5%] bg-cover lg:h-[400px]"
      data-testid="banner-container"
    >
      <h1 className="pt-5 text-center text-xl font-bold text-white lg:text-5xl md:pt-10">
        {heading}
      </h1>
      <p className="mt-4 text-center text-base font-semibold text-[#78c317] lg:mt-6 lg:text-2xl">
        {subHeading}
      </p>
    </div>
  );
}

import React from "react";

interface BannerProps {
  bannerUrl: string;
  heading: string;
  subHeading: string | number;
}

export function Banner({ bannerUrl, heading, subHeading }: BannerProps) {
  return (
    <div
      style={{ backgroundImage: `url(${bannerUrl})` }}
      className="h-[330px] rounded-b-[5%] bg-cover lg:h-[400px]"
      data-testid="banner-container"
    >
      <h2 className="pt-5 text-center text-xl font-bold text-white md:pt-10 lg:text-5xl">
        {heading}
      </h2>
      <p className="mt-4 text-center text-base font-semibold capitalize text-lightGreen lg:mt-6 lg:text-2xl">
        {subHeading}
      </p>
    </div>
  );
}

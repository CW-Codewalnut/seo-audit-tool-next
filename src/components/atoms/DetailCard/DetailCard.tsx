import React from "react";
import clsx from "clsx";

export interface DetailCardProps {
  className?: string;
  tag: string;
  title: string;
  scoreValue: string | number | undefined;
  flex?: Boolean;
  bgColor?: string;
  textColor?: string;
}

export function DetailCard({
  className,
  tag,
  title,
  scoreValue,
  flex,
  bgColor,
  textColor,
}: DetailCardProps) {
  const cardClasses = clsx(
    "p-6 rounded-tl-[20px] rounded-br-[20px] font-medium rounded-tr-md rounded-bl-md drop-shadow-lg bg-neutral-50 border border-solid md:gap-5",
    className,
    {
      "md:flex flex-row font-light text-base justify-between": flex,
      "flex flex-col": !flex,
    },
  );

  const bgColorStyle = {
    backgroundColor: bgColor,
  };

  const textColorStyle = {
    color: textColor,
  };

  return (
    <article className={cardClasses}>
      {tag !== "Web Vitals" && tag !== "Backlink Profile" ? (
        <>
          <p className="pb-5 text-sm md:pb-0 lg:text-lg">{title}</p>
          <div
            className="flex h-7 w-fit items-center rounded-xl px-2 font-medium"
            style={bgColorStyle}
          >
            <div
              className="mr-2 h-2.5 w-2.5 rounded-full font-medium"
              style={{ backgroundColor: textColor }}
            />
            {scoreValue}
          </div>
        </>
      ) : (
        <>
          <span className="relative h-[100px] text-base font-extralight md:text-base">
            {title}
          </span>
          <div
            className="absolute bottom-5 text-5xl font-bold"
            style={textColorStyle}
          >
            {scoreValue}
          </div>
        </>
      )}
    </article>
  );
}

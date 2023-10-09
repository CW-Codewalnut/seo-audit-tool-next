import React from "react";
import clsx from "clsx";

interface SmallCardProps {
  className?: string;
  tag: string;
  title: string;
  scoreValue: string | number | undefined;
  flex?: Boolean;
  bgColor?: string;
  textColor?: string;
}

export function DetailCard(props: SmallCardProps) {
  const {
    className,
    tag,
    title,
    scoreValue,
    flex,
    bgColor,
    textColor,
  } = props;

  const cardClasses = clsx(
    "p-6 rounded-tl-[20px] rounded-br-[20px] font-medium rounded-tr-md rounded-bl-md drop-shadow-lg bg-neutral-50 border border-solid md:gap-5",
    className,
    {
      "md:flex flex-row font-light text-base justify-between": flex,
      "flex flex-col": !flex,
    }
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
          <p className="text-sm lg:text-lg pb-5 md:pb-0">{title}</p>
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
          <span className="text-base font-extralight md:text-base relative h-[100px]">{title}</span>
          <div className="text-5xl font-bold absolute bottom-5" style={textColorStyle}>
            {scoreValue}
          </div>
        </>
      )}
    </article>
  );
}

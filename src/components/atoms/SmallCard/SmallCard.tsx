import React from "react";
import clsx from "clsx";

interface SmallCardProps {
  className?: string;
  title: string;
  scoreValue: string | number | undefined;
  flex?: Boolean;
  bgColor?: string;
  textColor?: string;
}

export function SmallCard({
  className,
  title,
  scoreValue,
  flex,
  bgColor,
  textColor,
}: SmallCardProps) {
  const cardClasses = clsx(className, {
    "p-6 rounded-tl-[20px] rounded-br-[20px] font-medium rounded-tr-md rounded-bl-md drop-shadow-lg bg-neutral-50 border border-solid gap-5":
      true,
    "flex flex-row font-light text-base justify-between": flex,
    "flex flex-col": !flex
  });

  return (
    <article className={cardClasses}>
      <p className="text-sm lg:text-lg">{title}</p>

      <div
        className="flex h-7 w-fit items-center rounded-xl px-2 font-medium"
        style={{ backgroundColor: bgColor}}
      >
        <div
          className="mr-2 h-2.5 w-2.5 rounded-full font-medium"
          style={{ backgroundColor: textColor }}
        />
        {scoreValue}
      </div>
    </article>
  );
}

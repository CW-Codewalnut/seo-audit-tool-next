import React from "react";
import clsx from "clsx";

interface BigCardProps {
  className?: string;
  title: string;
  scoreValue: string | number | undefined;
}

export function BigCard({ className, title, scoreValue }: BigCardProps) {
  const cardClasses = clsx(className, {
    "border-cc-d6-dd mx-2.5 w-[185px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-md rounded-bl-md border border-solid bg-neutral-50 p-4 drop-shadow-lg md:mx-0":
      true,
  });
  return (
    <div className={cardClasses}>
      <span className="text-base font-extralight md:text-base">{title}</span>
      <div className="text-4xl font-bold text-green-900">{scoreValue}</div>
    </div>
  );
}

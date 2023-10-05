import React from "react";
import clsx from "clsx";

interface SmallCardProps {
  className?: string;
  title: string;
  scoreValue: string | number | undefined;
}

export function SmallCard({ className, title, scoreValue }: SmallCardProps) {
  const cardClasses = clsx(className, {
    "rounded-tl-[20px] rounded-br-[20px] rounded-tr-md rounded-bl-md drop-shadow-lg mx-2.5 md:mx-0 flex bg-neutral-50 border border-solid border-cc-d6-dd":
      true,
  });

  return (
    <article className={cardClasses}>
      <span className="text-lg font-medium md:text-base">{title}</span>
      <div className="flex h-7 w-fit items-center rounded-lg bg-green-300 px-2">
        <div className="mr-2 h-2.5 w-2.5 rounded-full bg-black" />
        {scoreValue}
      </div>
    </article>
  );
}


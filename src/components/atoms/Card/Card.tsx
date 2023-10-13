import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  additionalClassName?: string;
}

export function Card({ children, additionalClassName }: CardProps) {
  const cardClasses = clsx(additionalClassName, {
    "rounded-xl bg-white drop-shadow-lg p-4 lg:p-10 mx-2.5 md:mx-0": true,
  });
  return <article className={cardClasses}>{children}</article>;
}

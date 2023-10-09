import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  const cardClasses = clsx(className, {
    "rounded-xl bg-white drop-shadow-lg p-4 lg:p-10": true,
  });
  return <article className={cardClasses}>{children}</article>;
}

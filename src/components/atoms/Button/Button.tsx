import React, { ReactNode } from "react";
import NextImage from "next/image";
import clsx from "clsx";

type ButtonVariant = "primary";

export interface ButtonProps {
  variant?: ButtonVariant;
  leadingIcon?: string;
  trailingIcon?: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  leadingIconAlt?: string;
  trailingIconAlt?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  children,
  leadingIcon,
  leadingIconAlt,
  trailingIcon,
  trailingIconAlt,
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const buttonClasses = clsx(className, {
    "flex rounded py-1 px-4 font-extralight w-min-6 justify-center": true,
    "opacity-30": disabled,
    "bg-[#78C317] text-white py-2 px-5 rounded-xl hover:bg-[#5A960C]":
      variant === "primary" || variant === "default",
  });
  const iconDynamicClasses = clsx({
    "opacity-20": disabled,
  });

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      type={type}
    >
      {!!leadingIcon && !disabled && (
        <span className={`relative h-6 w-6 peer-[]:mr-2 ${iconDynamicClasses}`}>
          <NextImage src={leadingIcon} fill alt={leadingIconAlt || "icon"} />
        </span>
      )}
      {!!children && <span className="peer font-medium">{children}</span>}
      {!!trailingIcon && !disabled && (
        <span className={`relative h-6 w-6 peer-[]:ml-2 ${iconDynamicClasses}`}>
          <NextImage src={trailingIcon} fill alt={trailingIconAlt || "icon"} />
        </span>
      )}
    </button>
  );
}

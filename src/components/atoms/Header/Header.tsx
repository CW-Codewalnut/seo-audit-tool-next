import React from "react";
import Image from "next/image";

export interface HeaderProps {
  companyLogo: string;
  altText: string;
}
export function Header({ companyLogo, altText }: HeaderProps) {
  return (
    <header className="bg-white py-3 px-2 shadow-md md:py-5 md:px-0">
      <div className="w-[40%] md:mx-auto md:w-[80%]">
        <Image src={companyLogo} width={220} height={40} alt={altText} />
      </div>
    </header>
  );
}

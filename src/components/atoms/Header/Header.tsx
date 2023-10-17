import React from "react";
import Image from "next/image";

export interface HeaderProps {
  companyLogo: string;
  companyLogoAltText: string;
}
export function Header({ companyLogo, companyLogoAltText }: HeaderProps) {
  return (
    <header className="bg-white py-3 px-2 shadow-md md:py-5 md:px-0">
      <div className="max-w-[40%] mx-auto md:max-w-[80%]">
        <Image src={companyLogo} width={220} height={40} alt={companyLogoAltText} />
      </div>
    </header>
  );
}

import React from "react";

interface FooterProps{
  children: string;
}
export function Footer({children}: FooterProps) {
  return (
    <footer className="w-full bg-green-800 p-4 py-6 text-center text-xs text-green-400 md:text-lg">
      {children}
    </footer>
  );
}
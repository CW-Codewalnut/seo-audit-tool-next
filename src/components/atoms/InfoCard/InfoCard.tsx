import React from "react";
import { Card } from "../Card/Card";

interface InfoCardProps {
  technicalTerms: string[];
}

export function InfoCard({ technicalTerms }: InfoCardProps) {
  return (
    <Card className="my-6">
      <p className="py-4 font-bold text-[#0f2a3d] lg:text-3xl">
        There are some more critical, technical SEO elements which can only be
        assessed with GA4 and GSC access.
      </p>
      <p className="bg-[#0f2a3d] py-3 px-6 font-medium text-white md:text-xs lg:text-xl">
        Technical compliance
      </p>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-3">
        {technicalTerms?.map((term) => (
          <p
            key={term}
            className="bg-[#E9F0F5] p-3 font-bold text-[#0f2a3d] md:text-xs lg:text-xl"
          >
            {term}
          </p>
        ))}
      </div>
    </Card>
  );
}

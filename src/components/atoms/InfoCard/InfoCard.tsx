import React from "react";
import { Card } from "../Card/Card";

export interface InfoCardProps {
  listOfTechnicalTerms: string[];
}

export function InfoCard({ listOfTechnicalTerms }: InfoCardProps) {
  return (
    <Card additionalClassName="my-6">
      <p className="py-4 font-bold text-deepNavy lg:text-3xl">
        There are some more critical, technical SEO elements which can only be
        assessed with GA4 and GSC access.
      </p>
      <p className="bg-deepNavy py-3 px-6 font-medium text-white md:text-xs lg:text-xl">
        Technical compliance
      </p>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-3">
        {listOfTechnicalTerms?.length > 0 && listOfTechnicalTerms?.map((term) => (
          <p
            key={term}
            className="bg-lightGray p-3 font-bold text-deepNavy md:text-xs lg:text-xl"
          >
            {term}
          </p>
        ))}
      </div>
    </Card>
  );
}
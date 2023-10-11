import React from "react";

export function Spinner() {
  return (
    <div
      data-testid="spinner"
      className="text-white-900 flex h-6 items-center justify-center"
    >
      <div className="border-white-900 h-5 w-5 animate-spin rounded-full border-b-2" />
    </div>
  );
}
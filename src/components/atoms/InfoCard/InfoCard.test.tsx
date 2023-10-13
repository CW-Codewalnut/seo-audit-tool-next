import React from "react";
import { render, screen } from "@testing-library/react";
import { InfoCard, InfoCardProps } from "./InfoCard";

describe("InfoCard", () => {
  const renderComponent = (additionalProps?: Partial<InfoCardProps>) => {
    const defaultProps: InfoCardProps = {
      listOfTechnicalTerms: ["term 1", "term 2"],
    };

    render(<InfoCard {...defaultProps} {...additionalProps} />);
  };

  it("renders the component without error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("renders the list of technical terms", () => {
    renderComponent();
    expect(screen.getByText("term 1")).toBeInTheDocument();
    expect(screen.getByText("term 2")).toBeInTheDocument();
  });

  it("renders the Technical compliance text correctly", () => {
    renderComponent();
    expect(screen.getByText("Technical compliance")).toBeInTheDocument();
  });
});

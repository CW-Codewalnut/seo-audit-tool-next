import React from "react";
import { render, screen } from "@testing-library/react";
import { Header, HeaderProps } from "./Header";

describe("Header", () => {
  const renderComponent = () => {
    const defaultProps: HeaderProps = {
      companyLogo: "/img/logo.png",
      companyLogoAltText: "Company Logo",
    };
    render(<Header {...defaultProps} />);
  };

  it("render without error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("renders the alt text correctly", () => {
    renderComponent();
    expect(screen.getByAltText("Company Logo")).toBeInTheDocument();
  });
});

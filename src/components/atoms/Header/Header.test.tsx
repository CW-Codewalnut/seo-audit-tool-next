import React from "react";
import { render, screen } from "@testing-library/react";
import { Header, HeaderProps } from "./Header";

describe("Header", () => {
  const renderComponent = () => {
    const defaultProps: HeaderProps = {
      companyLogo: "/img/logo.png",
      altText: "Company Logo",
    };
    render(<Header {...defaultProps} />);
  };

  it("render without error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("renders the company logo", () => {
    renderComponent();
    const imageElement = screen.getByRole("img");
    const imgSrc = imageElement.getAttribute("src");

    if (!imgSrc) {
      throw new Error("Image src attribute is missing");
    }

    const urlParam = new URLSearchParams(imgSrc.split("?")[1]).get("url");
    expect(decodeURIComponent(urlParam || "")).toBe("/img/logo.png");
  });

  it("renders the alt text 'company logo'", () => {
    renderComponent();
    expect(screen.getByAltText("Company Logo")).toBeInTheDocument(); // Assuming altText prop is "Company Logo"
  });
});

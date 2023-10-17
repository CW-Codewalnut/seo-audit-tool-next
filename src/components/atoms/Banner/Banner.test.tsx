import React from "react";
import { render, screen } from "@testing-library/react";
import { Banner } from "./Banner";

describe("Banner", () => {
  const renderComponent = () => {
    const defaultProps = {
      bannerUrl: "img/banner-image.png",
      heading: "Main heading",
      subHeading: "Dummy Subheading",
      bannerAltTag: "image Tag"
    };
    render(<Banner {...defaultProps} />);
  };

  it("render without error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("render the heading text correctly", () => {
    renderComponent();
    expect(screen.getByText("Main heading")).toBeInTheDocument();
  });

  it("renders with subheading  text", () => {
    renderComponent();
    expect(screen.getByText("Dummy Subheading")).toBeInTheDocument();
  });

  it("renders the background image correctly", () => {
    renderComponent();
    expect(screen.getByRole("img")).toHaveAttribute("src", "img/banner-image.png")
  });

  it("sets the alt tag for the background image correctly", () => {
    renderComponent();
    expect(screen.getByRole("img")).toHaveAttribute("alt", "image Tag")
  });
});
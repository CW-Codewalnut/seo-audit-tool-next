import React from "react";
import { render, screen } from "@testing-library/react";
import { Banner } from "./Banner";

describe("Banner", () => {
  const renderComponent = () => {
    const defaultProps = {
      bannerUrl: "img/banner-image.png",
      heading: "Main heading",
      subHeading: "Dummy Subheading",
    };
    render(<Banner {...defaultProps} />);
  };

  it("render without error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("render with Main heading", () => {
    renderComponent();
    expect(screen.getByText("Main heading")).toBeInTheDocument();
  });

  it("render with Subheading", () => {
    renderComponent();
    expect(screen.getByText("Dummy Subheading")).toBeInTheDocument();
  });

  it("sets the background image correctly", () => {
    renderComponent();
    expect(screen.getByTestId("banner-container")).toHaveStyle(
      `background-image: url(img/banner-image.png)`,
    );
  });
});
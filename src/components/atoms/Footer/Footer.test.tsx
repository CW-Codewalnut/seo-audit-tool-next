import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  const renderComponent = () => {
    render(
      <Footer>
        My Footer Text
      </Footer>,
    );
  };

  it("render without error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("render footer with children", () => {
    renderComponent();
    expect(screen.getByText("My Footer Text")).toBeInTheDocument();
  });
});
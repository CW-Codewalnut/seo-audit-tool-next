import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  const renderComponent = () => {
    render(
      <Card className="additional-test-class">
        <h1>Test Content</h1>
      </Card>,
    );
  };

  it("render without error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("render card with children", () => {
    renderComponent();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("render card with additional classes", () => {
    renderComponent();
    expect(screen.getByRole("article")).toHaveClass("additional-test-class");
  });
});
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, ButtonProps } from "./Button";

describe("Button", () => {
  const mockOnClick = jest.fn();

  const renderComponent = (additionalProps?: Partial<ButtonProps>) => {
    const defaultProps: Partial<ButtonProps> = {
      onClick: mockOnClick,
      variant: "primary",
      children: "Button Text",
      trailingIcon: "img/add-icon.svg",
      trailingIconAlt: "Trailing Icon Text",
    };
    render(<Button {...defaultProps} {...additionalProps} />);
  };

  it("render without error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("renders the button text", () => {
    renderComponent();
    expect(
      screen.getByRole("button", { name: /Button Text/i }),
    ).toBeInTheDocument();
  });

  it("renders the leading icon", () => {
    renderComponent({
      leadingIcon: "img/add-icon.svg",
      leadingIconAlt: "leading icon",
    });
    expect(screen.getByAltText("leading icon")).toBeInTheDocument();
  });

  it("renders the trailing icon", () => {
    renderComponent({
      trailingIcon: "img/add-icon.svg",
      trailingIconAlt: "trailing icon",
    });
    expect(screen.getByAltText("trailing icon")).toBeInTheDocument();
  });

  it("Calls the onClick function when the button is clicked", async () => {
    renderComponent();
    await userEvent.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalled();
  });
});

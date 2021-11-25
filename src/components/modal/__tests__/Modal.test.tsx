import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";

import { Modal } from "./../Modal";

const onClick = jest.fn();
const SELECTED_DOG = {
  breed: "french",
  subbreed: "bulldog",
};

describe("Modal", () => {
  it("renders loading content and close button", () => {
    render(<Modal selectedDog={SELECTED_DOG} setSelectedDog={onClick} />);

    const closeButton = screen.getByRole("button", {
      name: "close button",
    });
    const loadingText = screen.getByText("Loading...");
    const checkPictureText = screen.getByText("Check another picture!");
    const refreshButton = screen.getByRole("button", {
      name: "refresh image button",
    });

    fireEvent.click(closeButton);
    expect(onClick).toBeCalledTimes(1);

    expect(refreshButton).toBeDisabled();
    expect(loadingText).toBeInTheDocument();
    expect(checkPictureText).toBeInTheDocument();
  });
});

import React from "react";
import { screen, render } from "@testing-library/react";

import { Card } from "./../Card";

const onClick = jest.fn();
const DOG_NAME = "french bulldog";

describe("Card", () => {
  it("renders dog's name", () => {
    render(<Card dogName={DOG_NAME} onClick={onClick} />);

    const button = screen.getByRole("button");
    const dogName = screen.getByText(DOG_NAME);

    expect(button).toBeInTheDocument();
    expect(dogName).toBeInTheDocument();
  });
});

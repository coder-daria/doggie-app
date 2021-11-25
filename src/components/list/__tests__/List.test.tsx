import React from "react";
import { screen, render } from "@testing-library/react";

import { List } from "./../List";

describe("List", () => {
  it("renders empty state when dogs list is empty", () => {
    render(<List />);

    const emptyStateMessage = screen.getByText("Sorry, all dogs went home!");

    expect(emptyStateMessage).toBeInTheDocument();
  });
});

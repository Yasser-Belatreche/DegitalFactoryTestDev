import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home Page", () => {
  it("should ...", () => {
    render(<Home />);
    const element = screen.getByText(/Happy Coding/g);
    expect(element).toBeInTheDocument();
  });
});

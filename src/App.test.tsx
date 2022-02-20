import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("The Hole App", () => {
  it("should...", () => {
    render(<App />);
    const linkElement = screen.getByText(/Happy Coding/i);
    expect(linkElement).toBeInTheDocument();
  });
});

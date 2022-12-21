import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

// Suppose you wish to change the heading's text when users click a button. In that case, you can simulate users' interaction with the button to confirm that it works as intended.
// We rendered <App /> for each test case because React Testing Library unmounts the rendered components after each test.
// However, suppose you have numerous test cases for a component. In that case, use Jest's beforeEach() method to run render(<App />) before each test in your file (or describe block).
describe("App component", () => {
  test("codesweetly test heading", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent(/codesweetly test/i);
  });

  test("a codesweetly project heading", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "Update Heading" });

    userEvent.click(button);

    expect(screen.getByRole("heading")).toHaveTextContent(
      /a codesweetly project/i
    );
  });
});

/**
 * @jest-environment jsdom
 */
import { logRoles } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button click flow", () => {
  // render App

  render(<App />);

  const buttonElement = screen.getByRole("button", { name: /blue/i });
  //check initial color
  expect(buttonElement).toHaveClass("red");

  // click the button
  fireEvent.click(buttonElement);
  // check button text
  expect(buttonElement).toHaveTextContent(/red/i);
  // check the button color
  // expect(buttonElement).toHaveClass("blue");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("button has correct label and color after click", () => {});

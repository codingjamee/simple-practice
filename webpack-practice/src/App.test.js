import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /Hello Webpack/i });
  expect(linkElement).toBeInTheDocument();
});
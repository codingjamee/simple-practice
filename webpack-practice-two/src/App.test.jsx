/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("button starts with correct color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  // getByRole이 요소를 찾지 못하면 에러! 테스트 실패
  // name은 버튼에 표시되는 문자열
  expect(buttonElement).toHaveClass("red");
});

test("button starts with correct text", () => {});

test("button has correct color after click", () => {});

test("button has correct text after click", () => {});

import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectsPage from "./Projects_page";

test("renders ProjectPage heading", () => {
  render(<ProjectsPage />);
  expect(screen.getByRole("heading")).toHaveTextContent("Projects");
});
import { render, screen } from "@testing-library/react";
import { Review } from "../Review";

test("Home component renders correctly", () => {
  render(<Review />);

  const bodyElement = screen.getByText("Add review about a book:");

  expect(bodyElement).toBeInTheDocument();
});

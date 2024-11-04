import {  render, screen, waitFor } from "@testing-library/react";
import { Home } from "../Home";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";


jest.mock("axios", () => ({
  get: jest.fn(),
}));


const renderWithRouter = (component) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>),
  };
};

const mockedResponse = {
  data: [
    {
      title: "book title",
      author: "author",
      category: "category",
      price: "10",
      cover: "cover",
      reserved: false,
    },
  ],
};



test("All books list renders correctly in Home page", async () => {
  axios.get.mockResolvedValue(mockedResponse);

  renderWithRouter(<Home />);

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalled();
    const titleElement = screen.getByTestId("book-title");
    expect(titleElement).toHaveTextContent("book title");

  });

});

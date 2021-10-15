import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // TODO <Provider store={initStore(...)}><App /></Provider>
  render(<App />);

  screen.findByTestId("..."); // <div data-test-id="...">

  const linkElement = screen.getByText(/learn react/i);

  // Example: fireEvent.click(button)
  expect(linkElement).toBeInTheDocument();
});

import { fireEvent, render, screen } from "@testing-library/react";
import FetchUsers from "../components/FetchUsers";
import userEvent from "@testing-library/user-event";

describe("FetchUsers List functionality", () => {
  it("creates an empty list initially", () => {
    render(<FetchUsers />);

    const elements = screen.queryAllByRole("listitem");
    expect(elements).toHaveLength(0);
  });

  it("populates the list after the fetch is done, with 10 elements", async () => {
    render(<FetchUsers />);
    const elements = await screen.findAllByRole("listitem");

    expect(elements).toHaveLength(10);
  });

  it("returns 3 elements if 'in' is typed in the input field", async () => {
    render(<FetchUsers />);
    // const inputField = screen.getByPlaceholderText(/cerca utente per nome/i);
    const inputField = screen.getByTestId("filterInput");

    // fireEvent.change(inputField, { target: { value: "in" } });

    const user = userEvent.setup();
    await user.type(inputField, "in");

    const filteredElements = await screen.findAllByRole("listitem");

    expect(filteredElements).toHaveLength(3);
  });
});

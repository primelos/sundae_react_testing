import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("initial conditions", () => {
  render(<SummaryForm />);
  const agreeCheckbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const submitButton = screen.getByRole("button", { name: "Confirm order" });

  expect(submitButton).toBeInTheDocument();
  expect(agreeCheckbox).not.toBeChecked();
  expect(submitButton).toBeDisabled();
});

test("checkbox disables button on first click and enables on second click", async () => {
  const ue = userEvent.setup();
  render(<SummaryForm />);

  const agreeCheckbox = screen.getByRole("checkbox", {
    name: /i agree/i,
  });
  const submitButton = screen.getByRole("button", { name: "Confirm order" });

  await ue.click(agreeCheckbox);

  expect(agreeCheckbox).toBeChecked();
  expect(submitButton).toBeEnabled();

  await ue.click(agreeCheckbox);
  expect(submitButton).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);

  let nullPopover = screen.queryByText(/no ice cream will be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();
  // let temp = userEvent.setup();
  let termsHover = screen.getByText(/Terms and Conditions/i);
  await userEvent.hover(termsHover);

  let hoverReveal = screen.getByText(/no ice cream will be delivered/i);
  expect(hoverReveal).toBeInTheDocument();

  await userEvent.unhover(termsHover);

  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will be delivered/i)
  );
});

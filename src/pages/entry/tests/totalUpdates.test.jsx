import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Options from "../Options";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

test("update scoop subtotal when scoops change", async () => {
  render(<Options optionsType="scoops" />, { wrapper: OrderDetailsProvider });

  const scoopsSubTotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubTotal).toHaveTextContent("0.00");

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopsSubTotal).toHaveTextContent("2.00");

  const ChocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  userEvent.clear(ChocolateInput);
  userEvent.type(ChocolateInput, "2");
  expect(scoopsSubTotal).toHaveTextContent("6.00");
});

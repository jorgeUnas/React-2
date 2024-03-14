import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

it("finds form fields and checkout button", () => {
  render(<CheckoutForm />);
   screen.getByRole("textbox", { name: /name/i });
  screen.getByRole("textbox", { name: /email/i });
  screen.getByRole("textbox", { name: /address/i });
  screen.getByRole("combobox", { name: /payment method/i });
  screen.getByRole("button", { name: /checkout/i });
});
import React from "react";
import Options from "./Options";
import Button from "react-bootstrap/Button";
import { useOrderDetails } from "../../contexts/OrderDetails";

const OrderEntry = () => {
  const [orderDetails] = useOrderDetails();
  const orderDisabled = orderDetails.totals.scoops === "$0.00";

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button disabled={orderDisabled}>Order Sundae!</Button>
    </div>
  );
};

export default OrderEntry;

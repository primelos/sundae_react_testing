import axios from "axios";
import React, { useEffect, useState } from "react";
import ScoopOptions from "./ScoopOptions";
import { Row } from "react-bootstrap";
import ToppingOptions from "./ToppingOptions";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  // const [orderDetails, updateItemCount] = useOrderDetails();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOptions;

  const optionItems = items.map((item) => {
    return (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    );
  });

  return <Row>{optionItems}</Row>;
};

export default Options;

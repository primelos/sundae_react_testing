import React from "react";
import { Col } from "react-bootstrap";

const ToppingOptions = ({ name, imagePath, updateItemCount }) => {
  return (
    <Col>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
    </Col>
  );
};

export default ToppingOptions;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body as="h3">no ice cream will be delivered</Popover.Body>
  </Popover>
);
export default function SummaryForm() {
  const [toChecked, setToChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group className="Here" controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={toChecked}
          onChange={(e) => setToChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!toChecked}>
        Confirm order
      </Button>
    </Form>
  );
}

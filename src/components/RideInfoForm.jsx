import { Form } from "react-bootstrap";

export const RideInfoForm = () => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="cost">
        <Form.Label>Cost</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="seats">
        <Form.Label>Available Seats (including yourself)</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
    </div>
  );
};

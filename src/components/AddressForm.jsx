import Form from "react-bootstrap/Form";

export const AddressForm = () => {
  return (
    <div>
      <Form.Group controlId="street">
        <Form.Label>Street Address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="zip">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
    </div>
  );
};

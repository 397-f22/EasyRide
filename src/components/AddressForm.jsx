import Form from "react-bootstrap/Form";

export const AddressForm = ({ id }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId={`${id}_street`}>
        <Form.Label>Street Address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId={`${id}_city`}>
        <Form.Label>City</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId={`${id}_state`}>
        <Form.Label>State</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId={`${id}_zip`}>
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
    </div>
  );
};

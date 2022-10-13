import Form from "react-bootstrap/Form";
import TimePicker from "react-bootstrap-time-picker";

export const DateTimeForm = () => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Time</Form.Label>
        <TimePicker start="00:00" end="24:00" step={30} />
      </Form.Group>
    </div>
  );
};

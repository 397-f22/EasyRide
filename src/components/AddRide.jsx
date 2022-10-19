import { AddressForm } from "./AddressForm";
import Button from "react-bootstrap/Button";
import { DateTimeForm } from "./DateTimeForm";
import Form from "react-bootstrap/Form";
import { RideInfoForm } from "./RideInfoForm";
import { useNavigate } from "react-router-dom";

export const AddRide = () => {
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
  };

  return (
    <Form className="p-3" onSubmit={handleSubmit}>
      <h3>Pickup</h3>
      <DateTimeForm />
      <AddressForm />
      <h3>Destination</h3>
      <AddressForm />
      <h3>Ride Info</h3>
      <RideInfoForm />
      <Button variant="secondary" onClick={() => navigate(-1)}>
        Cancel
      </Button>{" "}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

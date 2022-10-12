import { AddressForm } from "./AddressForm";
import Button from "react-bootstrap/Button";
import { DateTimeForm } from "./DateTimeForm";
import Form from "react-bootstrap/Form";
import { RideInfoForm } from "./RideInfoForm";

export const AddRide = () => {
  return (
    <Form className="p-3">
      <h3>Pickup</h3>
      <DateTimeForm />
      <AddressForm />
      <h3>Destination</h3>
      <AddressForm />
      <h3>Ride Info</h3>
      <RideInfoForm />

      <Button variant="secondary" type="submit">
        Cancel
      </Button>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

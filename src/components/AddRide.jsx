import { AddressForm } from "./AddressForm";
import Button from "react-bootstrap/Button";
import { DateTimeForm } from "./DateTimeForm";
import Form from "react-bootstrap/Form";
import { RideInfoForm } from "./RideInfoForm";
import { addNewRide } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";

export const AddRide = () => {
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const date = new Date(
      `${evt.target.date.value}T${evt.target.time.value}:00`
    );

    const ride = {
      date: date.toString(),
      pickup: {
        street_address: evt.target.pickup_street.value,
        city: evt.target.pickup_city.value,
        state: evt.target.pickup_state.value,
        zip: evt.target.pickup_zip.value,
      },
      destination: {
        street_address: evt.target.destination_street.value,
        city: evt.target.destination_city.value,
        state: evt.target.destination_state.value,
        zip: evt.target.destination_zip.value,
      },
      passengers: ["USER ID"],
      total_cost: Number(evt.target.cost.value),
      total_seats: Number(evt.target.seats.value),
    };

    addNewRide("", ride);

    navigate("/allRides");
  };

  return (
    <Form className="p-3" onSubmit={handleSubmit}>
      <h3>Pickup</h3>
      <DateTimeForm />
      <AddressForm id="pickup" />
      <h3>Destination</h3>
      <AddressForm id="destination" />
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

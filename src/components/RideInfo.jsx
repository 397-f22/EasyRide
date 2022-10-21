import "./RideInfo.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import { BookRide } from "./BookRide";

const BookRideButton = ({ ride, user }) => {
  if (ride.passengers.includes(user.uid)) {
    return "";
  } else {
    return (
      <Button
        variant="primary"
        onClick={() => {
          BookRide(user, ride);
        }}
      >
        Book ride
      </Button>
    );
  }
};

export const RideInfo = ({ show, onHide, ride, user, users }) => {
  if (ride != undefined) {
    const date = new Date(ride.date).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return (
      <Modal show={show} onHide={onHide} className="Modal" centered>
        <Modal.Header closeButton>
          <Modal.Title>{ride.destination.street_address}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Pickup: {ride.pickup.street_address}</p>
          <p>{date}</p>
          <div>
            <p className="alignleft">
              ${(ride.total_cost / (ride.passengers.length + 1)).toFixed(2)}
              /person
            </p>
            <p className="alignright">
              {ride.total_seats - ride.passengers.length} available
            </p>
          </div>
        </Modal.Body>
        <hr />
        <Modal.Body>
          <p>Organizer: {users[ride.passengers[0]].displayName}</p>
          <p>
            Passengers:{" "}
            {ride.passengers
              .slice(1, ride.passengers.length)
              .map((passenger) => users[passenger].displayName)
              .join(", ")}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <BookRideButton ride={ride} user={user} />
        </Modal.Footer>
      </Modal>
    );
  }
};

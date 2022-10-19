import "./RideInfo.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";

export const RideInfo = ({ show, onHide, ride }) => {
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
          <p>Organizer: {ride.passengers[0]}</p>
          <p>
            Passengers:{" "}
            {ride.passengers.slice(1, ride.passengers.length).join(", ")}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => alert("booked ride!")}>
            Book ride
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

import Card from "react-bootstrap/Card";

import "./Ride.css";

export const Ride = ({ ride, handleShow }) => {
  const date = new Date(ride.date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <Card onClick={() => handleShow(ride)}>
      <Card.Body>
        <Card.Title>{ride.destination.street_address}</Card.Title>
        <Card.Text>Pickup: {ride.pickup.street_address}</Card.Text>
        <Card.Text>{date}</Card.Text>
        <div>
            <p className="alignleft">
              ${(ride.total_cost / (ride.passengers.length + 1)).toFixed(2)}
              /person
            </p>
            <p className="alignright">{ride.total_seats - ride.passengers.length} available</p>
        </div>
      </Card.Body>
    </Card>
  );
};

import Card from "react-bootstrap/Card";

export const Ride = ({ ride }) => {
  const date = new Date(ride.date);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{ride.destination.street_address}</Card.Title>
        <Card.Text>Pickup: {ride.pickup.street_address}</Card.Text>
        <Card.Text>
          {date.toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </Card.Text>
        <Card.Text>
          ${(ride.total_cost / (ride.passengers.length + 2)).toFixed(2)}/person
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
